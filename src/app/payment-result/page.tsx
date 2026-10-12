"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Status = "loading" | "PENDING_PAYMENT" | "PAID" | "EXPIRED" | "CANCELLED" | "error";

export default function PaymentResultPage() {
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const orderCode = new URLSearchParams(window.location.search).get("orderCode");
    if (!orderCode) {
      const timeout = window.setTimeout(() => {
        setStatus("error");
        setMessage("Không tìm thấy mã đơn thanh toán.");
      }, 0);
      return () => window.clearTimeout(timeout);
    }

    let active = true;
    let timeout: number | undefined;
    const checkStatus = async () => {
      try {
        const response = await fetch(
          `/api/workshop/payment-status?orderCode=${encodeURIComponent(orderCode)}`,
          {
            cache: "no-store",
          },
        );
        const result = (await response.json()) as { status?: Status; error?: string };
        if (!response.ok || !result.status)
          throw new Error(result.error || "Không thể kiểm tra thanh toán.");
        if (active) {
          setStatus(result.status);
          if (result.status === "PENDING_PAYMENT") timeout = window.setTimeout(checkStatus, 3000);
        }
      } catch (error) {
        if (active) {
          setStatus("error");
          setMessage(error instanceof Error ? error.message : "Không thể kiểm tra thanh toán.");
        }
      }
    };

    void checkStatus();
    return () => {
      active = false;
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  const content = {
    loading: ["Đang kiểm tra thanh toán", "Vui lòng chờ trong giây lát."],
    PENDING_PAYMENT: [
      "Đang chờ PayOS xác nhận",
      "Thanh toán của bạn đang được đối soát. Trang này sẽ tự cập nhật.",
    ],
    PAID: ["Đăng ký thành công", "Thanh toán đã được xác nhận. Hẹn gặp bạn tại Workshop Mộc Xinh!"],
    EXPIRED: [
      "Đơn đã hết hạn",
      "Thời gian giữ chỗ đã kết thúc. Bạn có thể quay lại để đăng ký lại nếu còn chỗ.",
    ],
    CANCELLED: [
      "Thanh toán đã hủy",
      "Bạn chưa hoàn tất thanh toán. Bạn có thể quay lại đăng ký lại.",
    ],
    error: ["Không thể kiểm tra đơn", message || "Vui lòng liên hệ Mộc Xinh để được hỗ trợ."],
  } satisfies Record<Status, [string, string]>;
  const [title, description] = content[status];

  return (
    <main className="flex min-h-screen items-center justify-center bg-ivory-warm px-6 py-16">
      <section className="w-full max-w-lg rounded-3xl border border-kraft/15 bg-cream p-8 text-center shadow-card">
        <div className="mb-5 text-4xl">
          {status === "PAID" ? "✅" : status === "error" ? "⚠️" : "🌿"}
        </div>
        <h1 className="font-display text-3xl text-kraft-dark">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-olive-dark/75">{description}</p>
        {status !== "PAID" && status !== "loading" && status !== "PENDING_PAYMENT" && (
          <Link
            href="/#workshop-registration"
            className="mt-7 inline-flex rounded-full bg-olive px-5 py-3 text-sm font-semibold text-ivory"
          >
            Quay lại Workshop
          </Link>
        )}
      </section>
    </main>
  );
}
