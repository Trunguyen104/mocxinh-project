import { NextResponse } from "next/server";
import { createPaymentLink } from "@/lib/server/payos";
import { env } from "@/lib/server/env";
import { getVerifiedEmailSession } from "@/lib/server/session";
import { supabaseRpc } from "@/lib/server/supabase";

export const runtime = "nodejs";

type Registration = {
  order_code: number | string;
  amount: number;
  payment_link_id: string | null;
  checkout_url: string | null;
  payment_expires_at: string;
};

const asText = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request: Request) {
  try {
    const verifiedEmail = await getVerifiedEmailSession();
    if (!verifiedEmail)
      return NextResponse.json(
        { error: "Hãy xác minh email trước khi thanh toán." },
        { status: 401 },
      );

    const body = (await request.json()) as Record<string, unknown>;
    const fullName = asText(body.fullName, 120);
    const phone = asText(body.phone, 30);
    const activity = asText(body.activity, 200);
    const note = asText(body.note, 1000);
    if (!fullName || !phone || !activity || asText(body.website, 200)) {
      return NextResponse.json({ error: "Thông tin đăng ký chưa hợp lệ." }, { status: 400 });
    }

    const reservation = await supabaseRpc<Registration | Registration[]>("reserve_workshop_seat", {
      p_slug: env.workshopSlug(),
      p_email: verifiedEmail,
      p_full_name: fullName,
      p_phone: phone,
      p_activity: activity,
      p_note: note,
      p_expires_at: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    });
    const registration = Array.isArray(reservation) ? reservation[0] : reservation;
    if (!registration) throw new Error("Could not reserve workshop seat");
    const orderCode = Number(registration.order_code);
    if (!Number.isSafeInteger(orderCode)) throw new Error("Invalid order code");
    if (registration.checkout_url) {
      return NextResponse.json({ checkoutUrl: registration.checkout_url, orderCode });
    }

    const payment = await createPaymentLink({
      orderCode,
      amount: registration.amount,
      description: `Moc Xinh ve ${orderCode}`,
      items: [{ name: "Ve Workshop Moc Xinh", quantity: 1, price: registration.amount }],
      returnUrl: `${env.appUrl()}/payment-result?orderCode=${orderCode}`,
      cancelUrl: `${env.appUrl()}/payment-result?orderCode=${orderCode}&cancelled=1`,
      expiredAt: Math.floor(new Date(registration.payment_expires_at).getTime() / 1000),
    });
    await supabaseRpc<void>("save_payment_link", {
      p_order_code: orderCode,
      p_payment_link_id: payment.paymentLinkId,
      p_checkout_url: payment.checkoutUrl,
    });
    return NextResponse.json({ checkoutUrl: payment.checkoutUrl, orderCode });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    console.error("checkout failed", error);
    if (message.includes("SOLD_OUT"))
      return NextResponse.json({ error: "Workshop đã hết chỗ." }, { status: 409 });
    if (message.includes("ALREADY_REGISTERED")) {
      return NextResponse.json({ error: "Email này đã có vé cho workshop." }, { status: 409 });
    }
    return NextResponse.json(
      { error: "Không thể tạo thanh toán. Vui lòng thử lại." },
      { status: 500 },
    );
  }
}
