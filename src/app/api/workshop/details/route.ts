import { NextResponse } from "next/server";
import { env } from "@/lib/server/env";
import { supabaseSelect } from "@/lib/server/supabase";

type Workshop = { title: string; ticket_price: number; capacity: number; starts_at: string };

export async function GET() {
  try {
    const rows = await supabaseSelect<Workshop[]>(
      "workshops",
      `slug=eq.${encodeURIComponent(env.workshopSlug())}&select=title,ticket_price,capacity,starts_at&limit=1`,
    );
    if (!rows[0])
      return NextResponse.json({ error: "Workshop chưa được cấu hình." }, { status: 503 });
    return NextResponse.json(rows[0], { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("workshop details failed", error);
    return NextResponse.json({ error: "Không thể tải thông tin workshop." }, { status: 500 });
  }
}
