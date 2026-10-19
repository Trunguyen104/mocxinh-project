import nodemailer from "nodemailer";
import { env } from "@/lib/server/env";

export async function sendOtpEmail(to: string, otp: string) {
  const smtpUser = env.smtpUser();
  const smtpPass = env.smtpPass();

  const subject = "Mã xác minh đăng ký Workshop Mộc Xinh";
  const text = `Mã xác minh của bạn là ${otp}. Mã có hiệu lực trong 5 phút. Không chia sẻ mã này với bất kỳ ai.`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #faf8f5;">
      <h2 style="color: #632d18; text-align: center; margin-bottom: 8px;">Mộc Xinh — Nghệ Thuật Giấy Dó</h2>
      <p style="color: #4b5563; font-size: 15px; text-align: center;">Mã xác minh đăng ký Workshop của bạn là:</p>
      <div style="background-color: #f5ebe1; border-radius: 8px; padding: 16px; margin: 20px 0; text-align: center;">
        <span style="font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #8e3e1d;">${otp}</span>
      </div>
      <p style="color: #6b7280; font-size: 13px; text-align: center;">Mã có hiệu lực trong <strong>5 phút</strong>. Tuyệt đối không chia sẻ mã này cho bất kỳ ai.</p>
    </div>
  `;

  // 1. Ưu tiên gửi bằng Gmail SMTP nếu có cấu hình
  if (smtpUser && smtpPass) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Mộc Xinh" <${smtpUser}>`,
      to,
      subject,
      text,
      html,
    });
    return;
  }

  // 2. Dự phòng: Gửi qua Resend nếu có cấu hình Resend API key
  const resendKey = env.resendApiKey();
  if (resendKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: env.emailFrom(),
        to: [to],
        subject,
        text,
        html,
      }),
    });
    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      console.error("Resend API error:", response.status, errorBody);
      throw new Error(`Unable to send verification email: ${response.status} ${errorBody}`);
    }
    return;
  }

  // 3. Nếu chưa cấu hình cả 2, in ra console để test
  console.log(`[DEV OTP] Email: ${to} | OTP: ${otp}`);
  throw new Error(
    "Chưa cấu hình tài khoản gửi email (GMAIL_USER / GMAIL_PASS hoặc RESEND_API_KEY).",
  );
}
