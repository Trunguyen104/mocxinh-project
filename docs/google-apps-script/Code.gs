const SHEET_NAME = "Workshop registrations";

function doPost(event) {
  try {
    const input = JSON.parse(event.postData.contents || "{}");
    const required = ["fullName", "email", "phone", "activity"];
    if (required.some((field) => !String(input[field] || "").trim())) {
      throw new Error("Missing required registration fields.");
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
  const text = String(value || "").trim();
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
