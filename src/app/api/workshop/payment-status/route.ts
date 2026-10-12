import { NextRequest, NextResponse } from "next/server";
import { getVerifiedEmailSession } from "@/lib/server/session";
import { supabaseRpc, supabaseSelect } from "@/lib/server/supabase";

type RegistrationStatus = {
  status: "PENDING_PAYMENT" | "PAID" | "EXPIRED" | "CANCELLED";
  payment_expires_at: string;
};

export async function GET(request: NextRequest) {
  const email = await getVerifiedEmailSession();
  const orderCode = Number(request.nextUrl.searchParams.get("orderCode"));
  if (!email) return NextResponse.json({ error: "Phiên xác minh đã hết hạn." }, { status: 401 });
  if (!Number.isSafeInteger(orderCode))
    return NextResponse.json({ error: "Mã đơn không hợp lệ." }, { status: 400 });
  try {
    await supabaseRpc<void>("expire_registration_if_needed", {
      p_order_code: orderCode,
      p_email: email,
    });
    const rows = await supabaseSelect<RegistrationStatus[]>(
      "workshop_registrations",
      `order_code=eq.${orderCode}&verified_email=eq.${encodeURIComponent(email)}&select=status,payment_expires_at&limit=1`,
    );
    if (!rows[0])
      return NextResponse.json({ error: "Không tìm thấy đơn đăng ký." }, { status: 404 });
    return NextResponse.json(rows[0], { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("payment status failed", error);
    return NextResponse.json(
      { error: "Không thể kiểm tra trạng thái thanh toán." },
      { status: 500 },
    );
  }
}
