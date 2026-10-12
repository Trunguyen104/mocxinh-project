import { NextResponse } from "next/server";
import { hmacSha256 } from "@/lib/server/crypto";
import { env } from "@/lib/server/env";
import { setVerifiedEmailSession } from "@/lib/server/session";
import { supabaseRpc } from "@/lib/server/supabase";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { email, otp } = (await request.json()) as { email?: string; otp?: string };
    const normalizedEmail = email?.trim().toLowerCase() || "";
    const normalizedOtp = otp?.trim() || "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail) || !/^\d{6}$/.test(normalizedOtp)) {
      return NextResponse.json({ error: "Email hoặc mã xác minh không hợp lệ." }, { status: 400 });
    }
    const verified = await supabaseRpc<boolean>("verify_email_otp", {
      p_email: normalizedEmail,
      p_otp_hash: hmacSha256(`${normalizedEmail}:${normalizedOtp}`, env.otpHashSecret()),
    });
    if (!verified) {
      return NextResponse.json({ error: "Mã đã hết hạn hoặc không chính xác." }, { status: 400 });
    }
    await setVerifiedEmailSession(normalizedEmail);
    return NextResponse.json({ ok: true, email: normalizedEmail });
  } catch (error) {
    console.error("verify-otp failed", error);
    return NextResponse.json(
      { error: "Không thể xác minh mã. Vui lòng thử lại." },
      { status: 500 },
    );
  }
}
