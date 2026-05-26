"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "@/contexts/AppContext";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const LEAVES = [
  { top: "15%", left: "8%", delay: "0s", dur: "8s", size: 18 },
  { top: "70%", left: "5%", delay: "2s", dur: "10s", size: 12 },
  { top: "35%", right: "6%", delay: "1s", dur: "9s", size: 20 },
  { top: "80%", right: "12%", delay: "3s", dur: "7s", size: 14 },
  { top: "50%", left: "50%", delay: "4s", dur: "11s", size: 10 },
];

export function HeroSection() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([titleRef.current, subtitleRef.current, ctaRef.current], {
        y: 40, opacity: 0, duration: 1.2, stagger: 0.18, ease: "power3.out", delay: 0.3,
      });
      if (imageRef.current) {
        gsap.from(imageRef.current, { x: 60, opacity: 0, duration: 1.4, ease: "power3.out", delay: 0.5 });
      }
      if (badgeRef.current) {
        gsap.from(badgeRef.current, { scale: 0.5, opacity: 0, duration: 0.8, ease: "back.out(2)", delay: 1.2 });
      }
      if (sectionRef.current && decorRef.current) {
        gsap.to(decorRef.current, {
          yPercent: 30, ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: true },
        });
      }
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -50, ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: true },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-cream pt-20 dark:bg-[var(--background)]"
    >
      {/* Ambient blobs */}
      <div ref={decorRef} className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-32 top-1/4 h-[600px] w-[600px] rounded-full bg-moc-green/5 blur-[100px] dark:bg-moc-green/4" />
        <div className="absolute -right-20 bottom-1/3 h-[500px] w-[500px] rounded-full bg-kraft/5 blur-[80px] dark:bg-kraft/3" />
        <div className="absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-moc-green/6 blur-[120px] dark:bg-moc-green/3" />
      </div>

      {/* Leaf particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {LEAVES.map((leaf, i) => (
          <div
            key={i}
            className="leaf-particle"
            style={{
              top: leaf.top,
              left: "left" in leaf ? leaf.left : "auto",
              right: "right" in leaf ? (leaf as { right: string }).right : "auto",
              animationDelay: leaf.delay,
              animationDuration: leaf.dur,
              width: leaf.size / 2 + "px",
              height: leaf.size + "px",
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Paper texture */}
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-60" aria-hidden />

      {/* Content grid */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Left: Text */}
        <div>
          {/* Badge */}
          {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-olive/20 bg-olive/8 px-4 py-1.5 dark:border-olive/15 dark:bg-olive/6">
            <span className="h-1.5 w-1.5 animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-olive" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-olive-dark dark:text-olive-dark">
              {t("hero_badge")}
            </span>
          </div> */}

          <h1
            ref={titleRef}
            className="font-display text-5xl leading-[1.15] text-kraft-dark md:text-6xl lg:text-7xl dark:text-kraft-dark"
          >
            {t("hero_tagline")}
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 max-w-lg text-lg leading-relaxed text-olive-dark/80 dark:text-olive-dark/80"
          >
            {t("hero_description")}
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              onClick={() =>
                document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("hero_cta_primary")}
            </Button>
            <a
              href="#products"
              id="hero-products-link"
              className="flex items-center gap-2 text-sm font-medium text-olive-dark/80 underline-offset-4 transition-colors duration-300 hover:text-kraft-dark hover:underline dark:text-olive-dark/80 dark:hover:text-kraft-dark"
            >
              {t("hero_cta_secondary")}
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-10 border-t border-moc-green/15 pt-8 dark:border-moc-green/10">
            {[
              { value: "100%", label: t("hero_stat_natural") },
              { value: "Eco", label: t("hero_stat_eco") },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-medium text-moc-green dark:text-moc-green-light">{stat.value}</p>
                <p className="mt-0.5 text-xs uppercase tracking-wider text-olive/70 dark:text-olive/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div ref={imageRef} className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-paper">
            <Image
              src="/images/hero-lifestyle.png"
              alt="Sản phẩm giấy handmade Mộc Xinh"
              width={680}
              height={520}
              className="h-[520px] w-full object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-kraft-dark/20 to-transparent" />
          </div>

          {/* Eco badge */}
          <div
            ref={badgeRef}
            className="absolute -bottom-5 -left-6 flex h-20 w-20 flex-col items-center justify-center rounded-full border-4 border-cream bg-moc-green text-center shadow-paper animate-badge-pop glow-pulse-green dark:border-[var(--background)]"
          >
            <span className="text-xl leading-none">🌿</span>
            <span className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-white/90">100%</span>
            <span className="text-[8px] uppercase tracking-wider text-white/70">Eco</span>
          </div>

          {/* Floating mini image */}
          <div className="absolute -right-4 top-12 hidden overflow-hidden rounded-2xl shadow-card ring-4 ring-cream animate-float-slow dark:ring-[var(--background)] lg:block">
            <Image
              src=""
              alt="Cỏ tự nhiên nguyên liệu"
              width={140}
              height={170}
              className="h-40 w-32 object-cover"
            />
          </div>

          {/* Gradient border effect */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-kraft/10 dark:ring-kraft/6" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs uppercase tracking-[0.2em] text-olive/50 dark:text-olive/40">
          {t("hero_scroll")}
        </span>
        <span className="block h-12 w-px bg-gradient-to-b from-olive/40 to-transparent" />
      </div>
    </section>
  );
}
