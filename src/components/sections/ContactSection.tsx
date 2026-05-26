"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "@/contexts/AppContext";
import { CONTACT } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        x: -40, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.from(infoRef.current, {
        x: 40, opacity: 0, duration: 1, ease: "power3.out", delay: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-cream py-28 dark:bg-[var(--cream)] md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-olive/5 blur-[120px] dark:bg-olive/3" aria-hidden />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-kraft/4 blur-[100px] dark:bg-kraft/2" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-olive/40" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-olive dark:text-olive">
              {t("contact_badge")}
            </p>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-olive/40" />
          </div>
          <h2 className="font-display text-4xl text-kraft-dark dark:text-kraft-dark md:text-5xl">
            {t("contact_title_1")}{" "}
            <span className="italic text-olive dark:text-olive">{t("contact_title_italic")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-olive-dark/70 dark:text-olive-dark/65">
            {t("contact_subtitle")}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* ── Contact Form ─────────────────────────────────────────────── */}
          <div ref={formRef} className="lg:col-span-3">
            <div className="rounded-3xl border border-kraft/10 bg-ivory p-8 shadow-card dark:border-kraft/8 dark:bg-[var(--surface)] lg:p-10">
              {status === "success" ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <div className="flex h-16 w-16 animate-badge-pop items-center justify-center rounded-full bg-olive/15 text-3xl dark:bg-olive/10">
                    ✅
                  </div>
                  <p className="font-display text-xl text-kraft-dark dark:text-kraft-dark">
                    {t("contact_form_success")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-medium uppercase tracking-wider text-olive dark:text-olive">
                        {t("contact_form_name")}
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Nguyễn Văn A"
                        className="input-field"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-medium uppercase tracking-wider text-olive dark:text-olive">
                        {t("contact_form_email")}
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-medium uppercase tracking-wider text-olive dark:text-olive">
                      {t("contact_form_subject")}
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="" disabled>— Chọn chủ đề —</option>
                      <option value="order">Đặt hàng sản phẩm</option>
                      <option value="custom">Đặt hàng tùy chỉnh</option>
                      <option value="wholesale">Mua số lượng lớn</option>
                      <option value="partnership">Hợp tác</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-medium uppercase tracking-wider text-olive dark:text-olive">
                      {t("contact_form_message")}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Xin chào Mộc Xinh..."
                      className="input-field resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={status === "sending"}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-olive px-8 py-3.5 text-sm font-medium text-ivory transition-all duration-500 hover:bg-olive-dark hover:shadow-paper disabled:cursor-not-allowed disabled:opacity-60 glow-olive"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 1 1-6.22-8.56" strokeLinecap="round" />
                        </svg>
                        {t("contact_form_sending")}
                      </>
                    ) : (
                      <>
                        {t("contact_form_submit")}
                        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── Contact Info ─────────────────────────────────────────────── */}
          <div ref={infoRef} className="flex flex-col gap-6 lg:col-span-2">
            {/* Info card */}
            <div className="rounded-3xl border border-kraft/10 bg-ivory p-8 shadow-card dark:border-kraft/8 dark:bg-[var(--surface)]">
              <h3 className="mb-6 font-display text-xl text-kraft-dark dark:text-kraft-dark">
                Thông tin liên hệ
              </h3>
              <div className="space-y-5">
                {[
                  {
                    label: t("contact_info_address"),
                    value: CONTACT.address,
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M10 2C7.239 2 5 4.239 5 7c0 4.418 5 11 5 11s5-6.582 5-11c0-2.761-2.239-5-5-5Z" />
                        <circle cx="10" cy="7" r="1.5" />
                      </svg>
                    ),
                  },
                  {
                    label: t("contact_info_email"),
                    value: CONTACT.email,
                    href: `mailto:${CONTACT.email}`,
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="4" width="16" height="12" rx="2" />
                        <path d="M2 7l8 5 8-5" />
                      </svg>
                    ),
                  },
                  {
                    label: t("contact_info_phone"),
                    value: CONTACT.phone,
                    href: `tel:${CONTACT.phone}`,
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.3a1.5 1.5 0 0 1 1.48 1.254l.55 3.3A1.5 1.5 0 0 1 5.86 8.1l-.78.52a11.04 11.04 0 0 0 6.3 6.3l.52-.78a1.5 1.5 0 0 1 1.546-.97l3.3.55A1.5 1.5 0 0 1 18 15.2v1.3A1.5 1.5 0 0 1 16.5 18C8.492 18 2 11.508 2 3.5Z" />
                      </svg>
                    ),
                  },
                  {
                    label: t("contact_hours_label"),
                    value: t("contact_hours"),
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="10" cy="10" r="8" />
                        <path d="M10 6v4l2.5 2.5" strokeLinecap="round" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-olive/10 text-olive dark:bg-olive/8 dark:text-olive">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-olive/60 dark:text-olive/50">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="mt-0.5 text-sm text-kraft-dark transition-colors hover:text-olive dark:text-kraft-dark dark:hover:text-olive">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm text-kraft-dark dark:text-kraft-dark">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social & map teaser */}
            <div className="rounded-3xl border border-olive/12 bg-gradient-to-br from-kraft-dark to-olive-dark p-8 text-center shadow-paper">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-sage">Theo dõi Mộc Xinh</p>
              <p className="mb-5 font-display text-lg text-ivory">Cập nhật sản phẩm mới & câu chuyện tự nhiên</p>
              <div className="flex justify-center gap-3">
                {["Facebook", "Instagram", "Zalo"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    id={`footer-social-${s.toLowerCase()}`}
                    className="flex items-center gap-1.5 rounded-full border border-ivory/20 px-4 py-2 text-xs font-medium text-ivory/75 transition-all duration-300 hover:border-ivory/40 hover:bg-ivory/10 hover:text-ivory"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
