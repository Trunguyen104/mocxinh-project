import { canonicalize, hmacSha256, safeEqual } from "@/lib/server/crypto";
import { env } from "@/lib/server/env";

type CreatePaymentLink = {
  orderCode: number;
  amount: number;
  description: string;
  returnUrl: string;
  cancelUrl: string;
  items: { name: string; quantity: number; price: number }[];
  expiredAt: number;
};

type PaymentLinkResponse = {
  code: string;
  desc: string;
  data?: { paymentLinkId: string; checkoutUrl: string };
};

export async function createPaymentLink(payment: CreatePaymentLink) {
  const signature = hmacSha256(
    canonicalize({
      amount: payment.amount,
      cancelUrl: payment.cancelUrl,
      description: payment.description,
      orderCode: payment.orderCode,
      returnUrl: payment.returnUrl,
    }),
    env.payosChecksumKey(),
  );
  const response = await fetch("https://api-merchant.payos.vn/v2/payment-requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-client-id": env.payosClientId(),
      "x-api-key": env.payosApiKey(),
    },
    body: JSON.stringify({ ...payment, signature }),
  });
  const result = (await response.json().catch(() => ({}))) as PaymentLinkResponse;
  if (
    !response.ok ||
    result.code !== "00" ||
    !result.data?.checkoutUrl ||
    !result.data.paymentLinkId
  ) {
    throw new Error(result.desc || "PayOS could not create a payment link");
  }
  return result.data;
}

export function verifyPayosWebhook(payload: {
  data?: Record<string, unknown>;
  signature?: string;
}) {
  if (!payload.data || !payload.signature) return false;
  const expected = hmacSha256(canonicalize(payload.data), env.payosChecksumKey());
  return safeEqual(payload.signature, expected);
}
