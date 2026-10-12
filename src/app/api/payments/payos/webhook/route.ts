import { NextResponse } from "next/server";
import { verifyPayosWebhook } from "@/lib/server/payos";
import { supabaseRpc } from "@/lib/server/supabase";

export const runtime = "nodejs";

type WebhookData = {
  orderCode?: number;
  amount?: number;
  paymentLinkId?: string;
  reference?: string;
  code?: string;
  [key: string]: unknown;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      success?: boolean;
      data?: WebhookData;
      signature?: string;
    };
    if (!verifyPayosWebhook(payload))
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    const data = payload.data;
    if (!payload.success || data?.code !== "00") return NextResponse.json({ ok: true });
    if (
      !data ||
      !Number.isSafeInteger(data.orderCode) ||
      !Number.isInteger(data.amount) ||
      !data.paymentLinkId
    ) {
      return NextResponse.json({ error: "Invalid payment payload" }, { status: 400 });
    }
    await supabaseRpc<boolean>("mark_registration_paid", {
      p_order_code: data.orderCode,
      p_payment_link_id: data.paymentLinkId,
      p_amount: data.amount,
      p_reference: typeof data.reference === "string" ? data.reference : "",
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("PayOS webhook failed", error);
    // A non-2xx response makes PayOS retry a transient database/network failure.
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
