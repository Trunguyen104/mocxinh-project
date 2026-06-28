"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "@/contexts/AppContext";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        y: 32,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 80%" },
      });
      gsap.from(".about-left", {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: contentRef.current, start: "top 75%" },
      });
      gsap.from(".about-right", {
        x: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: contentRef.current, start: "top 75%" },
      });
      gsap.from(".about-stat", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-stats-row", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const STATS = [
    { value: t("about_stat1_value"), label: t("about_stat1_label"), icon: "✋" },
    { value: t("about_stat2_value"), label: t("about_stat2_label"), icon: "🌿" },
    { value: t("about_stat3_value"), label: t("about_stat3_label"), icon: "👥" },
    { value: t("about_stat4_value"), label: t("about_stat4_label"), icon: "📅" },
  ];

  const INFO_CARDS = [
    {
      label: t("about_mission_label"),
      text: t("about_mission"),
      icon: "🎯",
      color: "from-moc-green/10 to-moc-green-pale/20 border-moc-green/20",
    },
    {
      label: t("about_vision_label"),
      text: t("about_vision"),
      icon: "🔭",
      color: "from-kraft/8 to-beige/10 border-kraft/15",
    },
  ];

  const META = [
    { label: t("about_founded_label"), value: t("about_founded") },
    { label: t("about_location_label"), value: t("about_location") },
    { label: t("about_university_label"), value: t("about_university") },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-cream py-28 dark:bg-[var(--background)] md:py-36"
    >
      {/* Texture + blobs */}
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-[500px] w-[500px] rounded-full bg-moc-green/5 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-[400px] w-[400px] rounded-full bg-kraft/5 blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Heading */}
        <div ref={headRef} className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-olive/40" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-olive dark:text-olive">
              {t("about_badge")}
            </p>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-olive/40" />
          </div>
          <h2 className="font-display text-4xl text-kraft-dark dark:text-kraft-dark md:text-5xl">
            {t("about_title_1")}{" "}
            <span className="italic text-moc-green dark:text-moc-green-light">
              {t("about_title_italic")}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-olive-dark/70 dark:text-olive-dark/65">
            {t("about_subtitle")}
          </p>
        </div>

        {/* Stats row */}
        <div className="about-stats-row mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="about-stat group flex flex-col items-center gap-2 rounded-2xl border border-kraft/10 bg-ivory/60 px-4 py-6 text-center shadow-soft backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-paper dark:border-kraft/8 dark:bg-[var(--surface)]/60"
            >
              <span className="text-2xl" aria-hidden>
                {stat.icon}
              </span>
              <p className="font-display text-3xl font-light text-moc-green dark:text-moc-green-light">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-olive/60 dark:text-olive/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main content grid */}
        <div ref={contentRef} className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Left: text */}
          <div className="about-left flex flex-col justify-center gap-6">
            <p className="text-base leading-relaxed text-olive-dark/80 dark:text-olive-dark/75">
              {t("about_desc_1")}
            </p>
            <p className="text-base leading-relaxed text-olive-dark/80 dark:text-olive-dark/75">
              {t("about_desc_2")}
            </p>

            {/* Meta info */}
            <div className="mt-2 flex flex-col gap-3 rounded-2xl border border-kraft/10 bg-ivory/50 p-5 dark:border-kraft/8 dark:bg-[var(--surface)]/40">
              {META.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moc-green" />
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-olive/60 dark:text-olive/50">
                      {item.label}:
                    </span>
                    <span className="text-sm text-kraft-dark dark:text-kraft-dark">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mission + Vision cards */}
          <div className="about-right flex flex-col gap-5">
            {INFO_CARDS.map((card) => (
              <div
                key={card.label}
                className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${card.color} p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-paper`}
              >
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/50 text-xl shadow-soft dark:bg-white/10">
                  {card.icon}
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-olive/60 dark:text-olive/50">
                  {card.label}
                </p>
                <p className="font-display text-lg leading-snug text-kraft-dark dark:text-kraft-dark">
                  {card.text}
                </p>
                <div
                  className="pointer-events-none absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-white/20"
                  aria-hidden
                />
              </div>
            ))}

            {/* Decorative quote */}
            <div className="rounded-2xl border border-moc-green/15 bg-moc-green/5 px-6 py-5 dark:border-moc-green/10 dark:bg-moc-green/4">
              <div className="mb-2 flex text-2xl text-moc-green/30">
                {[...Array(3)].map((_, i) => (
                  <span key={i}>&ldquo;</span>
                ))}
              </div>
              <p className="italic leading-relaxed text-olive-dark/75 dark:text-olive-dark/70">
                Từ một tờ giấy cỏ — chúng tôi muốn kể một câu chuyện về tình yêu thiên nhiên, sức
                sáng tạo và trách nhiệm với cộng đồng.
              </p>
              <p className="mt-3 text-xs font-medium text-moc-green dark:text-moc-green-light">
                — Nhóm Mộc Xinh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
