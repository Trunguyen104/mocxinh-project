import { env } from "@/lib/server/env";

export async function sendOtpEmail(to: string, otp: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.resendApiKey()}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.emailFrom(),
      to: [to],
      subject: "Mã xác minh đăng ký Workshop Mộc Xinh",
      text: `Mã xác minh của bạn là ${otp}. Mã có hiệu lực trong 5 phút. Không chia sẻ mã này với bất kỳ ai.`,
      html: `<p>Mã xác minh đăng ký Workshop Mộc Xinh của bạn là:</p><p style="font-size:28px;font-weight:700;letter-spacing:6px">${otp}</p><p>Mã có hiệu lực trong 5 phút. Không chia sẻ mã này với bất kỳ ai.</p>`,
    }),
  });
  if (!response.ok) throw new Error("Unable to send verification email");
}
