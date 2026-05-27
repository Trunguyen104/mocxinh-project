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
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-kraft-dark/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-lg text-ivory/95">{t("story_quote")}</p>
              </div>
            </div>

            {/* Floating inset */}
            <div className="absolute -bottom-8 -right-6 hidden overflow-hidden rounded-2xl shadow-card ring-4 ring-ivory-warm dark:ring-[var(--ivory-warm)] lg:block">
              <Image
                src="/images/1dc34e6f-b9e5-491c-9886-13b2bfe18361.jpg"
                alt="Texture giấy gốc"
                width={180}
                height={140}
                className="h-36 w-44 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-kraft-dark/60 to-transparent p-3">
                <p className="text-xs font-medium text-ivory/90">Texture giấy gốc</p>
              </div>
            </div>
          </div>

          {/* Steps column */}
          <div ref={stepsRef} className="order-1 flex flex-col gap-8 lg:order-2 lg:pt-4">
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

            {/* Eco circular economy card */}
            <div className="mt-4 rounded-2xl border border-olive/15 bg-ivory/60 p-6 backdrop-blur-sm dark:border-olive/10 dark:bg-[var(--surface)]/50">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-kraft/10 dark:bg-kraft/8">
                  <span className="text-lg">♻️</span>
                </div>
                <div>
                  <h4 className="font-medium text-kraft-dark dark:text-kraft-dark">
                    {t("story_eco_title")}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-olive-dark/70 dark:text-olive-dark/65">
                    {t("story_eco_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Texture gallery row */}
        <div className="texture-row mt-20">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.3em] text-olive/60 dark:text-olive/50">
            {t("story_texture_label")}
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              {
                src: "/images/1dc34e6f-b9e5-491c-9886-13b2bfe18361.jpg",
                label: "Texture Giấy Gốc",
              },
              { src: "/images/265ea7cd-b798-4d72-9c43-868db04c46ed.jpg", label: "Giấy Tự Nhiên" },
              { src: "/images/9e89018c-4900-43eb-870d-0c698709652a.jpg", label: "Cỏ Nguyên Liệu" },
              { src: "/images/7f9514d1-2b26-4749-a543-b5708449e1ad.jpg", label: "Bộ Sản Phẩm" },
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
