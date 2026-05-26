"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "@/contexts/AppContext";

gsap.registerPlugin(ScrollTrigger);

export function CoreValuesSection() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  const CORE_VALUES = [
    {
      title: t("value1_title"), description: t("value1_desc"),
      icon: "🌿", stat: t("value1_stat"), statLabel: t("value1_stat_label"),
      color: "from-moc-green-pale/60 to-moc-green-pale/20 dark:from-moc-green-pale/40 dark:to-moc-green-pale/10",
      border: "border-moc-green/20 dark:border-moc-green/15",
      iconBg: "bg-moc-green/12 dark:bg-moc-green/10",
      statColor: "text-moc-green dark:text-moc-green-light",
    },
    {
      title: t("value2_title"), description: t("value2_desc"),
      icon: "✋", stat: t("value2_stat"), statLabel: t("value2_stat_label"),
      color: "from-kraft/8 to-beige/5 dark:from-kraft/5 dark:to-beige/3",
      border: "border-kraft/15 dark:border-kraft/10",
      iconBg: "bg-kraft/10 dark:bg-kraft/8",
      statColor: "text-kraft-dark dark:text-kraft-dark",
    },
    {
      title: t("value3_title"), description: t("value3_desc"),
      icon: "♻️", stat: t("value3_stat"), statLabel: t("value3_stat_label"),
      color: "from-moc-green-pale/40 to-ivory/10 dark:from-moc-green-pale/20 dark:to-ivory/5",
      border: "border-moc-green/15 dark:border-moc-green/10",
      iconBg: "bg-moc-green/8 dark:bg-moc-green/6",
      statColor: "text-moc-green-dark dark:text-moc-green",
    },
  ];

  const TESTIMONIALS = [
    {
      text: t("testimonial1_text"),
      author: t("testimonial1_author"),
      role: t("testimonial1_role"),
      avatar: "🎨",
    },
    {
      text: t("testimonial2_text"),
      author: t("testimonial2_author"),
      role: t("testimonial2_role"),
      avatar: "✏️",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        y: 32, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 80%" },
      });
      gsap.from(".value-card", {
        y: 40, opacity: 0, duration: 0.85, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
      });
      gsap.from(".testimonial-card", {
        x: -30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".testimonials-row", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="values"
      ref={sectionRef}
      className="relative overflow-hidden bg-ivory-warm py-28 dark:bg-[var(--ivory-warm)] md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-50" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-moc-green/5 blur-[100px] dark:bg-moc-green/3" aria-hidden />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-moc-green/4 blur-[80px] dark:bg-moc-green/2" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Heading */}
        <div ref={headRef} className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-olive/40" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-olive dark:text-olive">
              {t("values_badge")}
            </p>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-olive/40" />
          </div>
          <h2 className="font-display text-4xl text-kraft-dark dark:text-kraft-dark md:text-5xl">
            {t("values_title_1")} <span className="italic text-olive dark:text-olive">{t("values_title_italic")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-olive-dark/70 dark:text-olive-dark/65">
            {t("values_subtitle")}
          </p>
        </div>

        {/* Value cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {CORE_VALUES.map((value) => (
            <article
              key={value.title}
              className={`value-card group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${value.color} ${value.border} p-8 shadow-soft transition-all duration-700 hover:-translate-y-1.5 hover:shadow-paper`}
            >
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${value.iconBg} transition-transform duration-500 group-hover:scale-110`}>
                <span className="text-2xl" aria-hidden>{value.icon}</span>
              </div>
              <div className="mb-4">
                <p className={`font-display text-4xl font-light ${value.statColor}`}>{value.stat}</p>
                <p className="text-xs uppercase tracking-wider text-olive/60 dark:text-olive/50">{value.statLabel}</p>
              </div>
              <h3 className="font-display text-xl text-kraft-dark dark:text-kraft-dark">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-olive-dark/75 dark:text-olive-dark/70">{value.description}</p>
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-moc-green/5 to-transparent" aria-hidden />
            </article>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials-row mt-16 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t_) => (
            <div
              key={t_.author}
              className="testimonial-card rounded-3xl border border-kraft/10 bg-ivory/80 p-7 shadow-soft backdrop-blur-sm dark:border-kraft/8 dark:bg-[var(--surface)]/60"
            >
              <div className="mb-4 flex text-2xl text-olive/30 dark:text-olive/20">
                {[...Array(3)].map((_, i) => <span key={i}>"</span>)}
              </div>
              <p className="italic leading-relaxed text-kraft-dark/80 dark:text-kraft-dark/80">{t_.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-beige text-lg dark:bg-[var(--beige)]">
                  {t_.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-kraft-dark dark:text-kraft-dark">{t_.author}</p>
                  <p className="text-xs text-olive/60 dark:text-olive/50">{t_.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-olive/12 bg-ivory/60 px-8 py-12 text-center backdrop-blur-sm dark:border-olive/8 dark:bg-[var(--surface)]/40">
          <span className="text-4xl" aria-hidden>🌾</span>
          <h3 className="font-display text-2xl text-kraft-dark dark:text-kraft-dark">
            {t("values_cta_banner_title")}
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-olive-dark/70 dark:text-olive-dark/65">
            {t("values_cta_banner_desc")}
          </p>
          <a
            href="#contact"
            id="values-cta-btn"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-moc-green px-8 py-3 text-sm font-medium text-white transition-all duration-500 hover:bg-moc-green-dark hover:shadow-paper glow-green hover:glow-pulse-green"
          >
            {t("values_cta")}
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
