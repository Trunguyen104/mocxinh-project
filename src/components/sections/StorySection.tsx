"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "@/contexts/AppContext";

gsap.registerPlugin(ScrollTrigger);

export function StorySection() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const PROCESS_STEPS = [
    { number: "01", title: t("step1_title"), description: t("step1_desc"), icon: "🌾" },
    { number: "02", title: t("step2_title"), description: t("step2_desc"), icon: "💧" },
    { number: "03", title: t("step3_title"), description: t("step3_desc"), icon: "✋" },
    { number: "04", title: t("step4_title"), description: t("step4_desc"), icon: "☀️" },
  ];

  const MATERIALS = [
    {
      icon: "🍍",
      name: t("mat1_name"),
      trait: t("mat1_trait"),
      desc: t("mat1_desc"),
      badge: "Độ dai & Vân sần",
    },
    {
      icon: "🎋",
      name: t("mat2_name"),
      trait: t("mat2_trait"),
      desc: t("mat2_desc"),
      badge: "Độ đanh chắc",
    },
    {
      icon: "🌾",
      name: t("mat3_name"),
      trait: t("mat3_trait"),
      desc: t("mat3_desc"),
      badge: "Khung kết cấu",
    },
    {
      icon: "🏮",
      name: t("mat4_name"),
      trait: t("mat4_trait"),
      desc: t("mat4_desc"),
      badge: "Xuyên sáng & Chịu ẩm",
    },
    {
      icon: "🌿",
      name: t("mat5_name"),
      trait: t("mat5_trait"),
      desc: t("mat5_desc"),
      badge: "100% Sinh thái",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
      });
      gsap.from(".process-step", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: { trigger: stepsRef.current, start: "top 75%" },
      });
      gsap.from(imageRef.current, {
        scale: 0.92,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: imageRef.current, start: "top 80%" },
      });
      gsap.from(".material-card", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".materials-grid", start: "top 80%" },
      });
      gsap.from(".texture-thumb", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".texture-row", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative overflow-hidden bg-ivory-warm py-28 dark:bg-[var(--ivory-warm)] md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-olive/8 dark:border-olive/4"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-sage/5 blur-[80px] dark:bg-sage/3"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Header */}
        <div ref={headingRef} className="mb-16 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-olive" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-olive dark:text-olive">
              {t("story_badge")}
            </p>
          </div>
          <h2 className="font-display text-4xl leading-tight text-kraft-dark md:text-5xl dark:text-kraft-dark">
            {t("story_title_1")}{" "}
            <span className="italic text-olive dark:text-olive">{t("story_title_italic")}</span>
            <br />
            {t("story_title_2")}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-olive-dark/75 dark:text-olive-dark/75">
            {t("story_subtitle")}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image column */}
          <div ref={imageRef} className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-paper">
              <Image
                src="/images/story-process.png"
                alt="Quy trình làm giấy thủ công Mộc Xinh"
                width={600}
                height={700}
                className="h-[500px] w-full object-cover lg:h-[620px]"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-kraft-dark/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-lg text-ivory/95">{t("story_quote")}</p>
              </div>
            </div>
          </div>

          {/* Steps column */}
          <div ref={stepsRef} className="order-1 flex flex-col gap-8 lg:order-2 lg:pt-2">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.number} className="process-step group relative flex gap-5">
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-6 top-14 h-[calc(100%+0.5rem)] w-px bg-gradient-to-b from-olive/25 to-transparent dark:from-olive/15" />
                )}
                <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full border border-olive/25 bg-ivory shadow-soft transition-all duration-500 group-hover:border-olive/50 group-hover:bg-sage-light dark:border-olive/15 dark:bg-[var(--surface)] dark:group-hover:bg-olive/15">
                  <span className="text-xl" aria-hidden>
                    {step.icon}
                  </span>
                </div>
                <div className="pb-2 pt-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-olive/40 dark:text-olive/30">
                      {step.number}
                    </span>
                    <h3 className="font-display text-lg text-kraft-dark transition-colors duration-300 group-hover:text-olive-dark dark:text-kraft-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-olive-dark/70 dark:text-olive-dark/65">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* 3-stage Quality Control card */}
            <div className="mt-2 rounded-2xl border border-olive/15 bg-ivory/75 p-6 shadow-soft backdrop-blur-sm dark:border-olive/10 dark:bg-[var(--surface)]/60">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-moc-green/12 dark:bg-moc-green/10">
                  <span className="text-lg">✨</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-medium text-kraft-dark dark:text-kraft-dark">
                    {t("story_eco_title")}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-olive-dark/75 dark:text-olive-dark/65">
                    {t("story_eco_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Core Botanical Materials Grid */}
        <div className="materials-grid mt-24">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.28em] text-olive dark:text-olive">
              {t("story_texture_label")}
            </p>
            <h3 className="font-display text-3xl text-kraft-dark dark:text-kraft-dark md:text-4xl">
              {t("materials_heading")}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-olive-dark/70 dark:text-olive-dark/65">
              {t("materials_subheading")}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {MATERIALS.map((mat) => (
              <div
                key={mat.name}
                className="material-card group relative flex flex-col rounded-2xl border border-kraft/12 bg-ivory/90 p-5 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-olive/30 hover:shadow-paper dark:border-kraft/8 dark:bg-[var(--surface)]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-olive/10 text-xl dark:bg-olive/8">
                    {mat.icon}
                  </span>
                  <span className="rounded-full bg-kraft/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-kraft-dark dark:bg-kraft/15 dark:text-kraft">
                    {mat.badge}
                  </span>
                </div>
                <h4 className="font-display text-base text-kraft-dark dark:text-kraft-dark">
                  {mat.name}
                </h4>
                <p className="mt-1 text-xs font-medium text-olive dark:text-olive">{mat.trait}</p>
                <p className="mt-2.5 text-xs leading-relaxed text-olive-dark/70 dark:text-olive-dark/65">
                  {mat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Texture gallery row */}
        <div className="texture-row mt-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              {
                src: "/images/cat-co.png",
                label: "Xơ Sợi Cỏ & Lá Dứa",
              },
              { src: "/images/nau-co.png", label: "Ủ Mềm & Nghiền Xơ" },
              { src: "/images/phoi-giay.png", label: "Phôi Giấy Thực Vật" },
              { src: "/images/thanh-pham.png", label: "Thành Phẩm Thủ Công" },
            ].map((item) => (
              <div
                key={item.src}
                className="texture-thumb group relative overflow-hidden rounded-2xl shadow-card img-hover-zoom"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={300}
                  height={220}
                  className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-kraft-dark/60 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs font-medium text-ivory/95">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
