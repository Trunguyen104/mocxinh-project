const SHEET_NAME = "Workshop registrations";
const REGISTRATION_COOLDOWN_SECONDS = 300;

function doPost(event) {
  try {
    const input = JSON.parse(event.postData.contents || "{}");
    const required = ["fullName", "email", "phone", "activity"];
    if (required.some((field) => !String(input[field] || "").trim())) {
      throw new Error("Missing required registration fields.");
    }
    if (String(input.website || "").trim()) {
      return json_({ ok: true });
    }
    if (!isValidEmail_(input.email)) {
      throw new Error("Invalid email address.");
    }

    const lock = LockService.getScriptLock();
    if (!lock.tryLock(5000)) {
      return json_({ ok: false, error: "Please try again shortly." });
    }

    try {
      const cache = CacheService.getScriptCache();
      const rateLimitKey = `workshop:${digest_(String(input.email).trim().toLowerCase())}`;
      if (cache.get(rateLimitKey)) {
        return json_({ ok: false, error: "Please wait before registering again." });
      }

      const sheet = getRegistrationSheet_();
      sheet.appendRow([
        new Date(),
        safeCell_(input.fullName),
        safeCell_(input.email),
        safeCell_(input.phone),
        safeCell_(input.activity),
        safeCell_(input.attendees),
        safeCell_(input.note),
        safeCell_(input.source),
      ]);
      cache.put(rateLimitKey, "1", REGISTRATION_COOLDOWN_SECONDS);
    } finally {
      lock.releaseLock();
    }

    return json_({ ok: true });
  } catch (error) {
    console.error(error);
    return json_({ ok: false, error: "Unable to save registration." });
  }
}

function doGet() {
  return json_({ ok: true, service: "Moc Xinh workshop registration" });
}

function getRegistrationSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Created at",
      "Full name",
      "Email",
      "Phone",
      "Activity",
      "Attendees",
      "Note",
      "Source",
    ]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function safeCell_(value) {
  const text = String(value || "")
    .trim()
    .slice(0, 500);
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function isValidEmail_(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

function digest_(value) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value);
  return bytes.map((byte) => (byte + 256).toString(16).slice(-2)).join("");
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
