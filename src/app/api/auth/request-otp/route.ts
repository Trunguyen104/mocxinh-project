import { NextResponse } from "next/server";
import { createOtp, hmacSha256 } from "@/lib/server/crypto";
import { sendOtpEmail } from "@/lib/server/email";
import { env } from "@/lib/server/env";
import { requestFingerprint } from "@/lib/server/session";
import { supabaseRpc } from "@/lib/server/supabase";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string };
    const normalizedEmail = email?.trim().toLowerCase() || "";
    if (!emailPattern.test(normalizedEmail)) {
      return NextResponse.json({ error: "Email không hợp lệ." }, { status: 400 });
    }

    const otp = createOtp();
    const allowed = await supabaseRpc<boolean>("issue_email_otp", {
      p_email: normalizedEmail,
      p_otp_hash: hmacSha256(`${normalizedEmail}:${otp}`, env.otpHashSecret()),
      p_expires_at: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
      p_ip_hash: requestFingerprint(request),
    });
    if (!allowed) {
      return NextResponse.json(
        { error: "Vui lòng chờ trước khi yêu cầu mã mới." },
        { status: 429 },
      );
    }

    await sendOtpEmail(normalizedEmail, otp);
    return NextResponse.json({ ok: true, expiresInSeconds: 300 });
  } catch (error) {
    console.error("request-otp failed", error);
    return NextResponse.json(
      { error: "Không thể gửi mã xác minh. Vui lòng thử lại." },
      { status: 500 },
    );
  }
}
