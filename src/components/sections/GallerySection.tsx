"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "@/contexts/AppContext";

gsap.registerPlugin(ScrollTrigger);

export function GallerySection() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const GALLERY_ITEMS = [
    {
      src: "/images/a8b43079-7a27-41de-8231-7df90a1995cb.jpg",
      alt: "Bộ sưu tập sản phẩm Mộc Xinh",
      span: "col-span-2 row-span-2",
      label: t("gallery_label_1"),
    },
    {
      src: "/images/9e89018c-4900-43eb-870d-0c698709652a.jpg",
      alt: "Cỏ tự nhiên nguyên liệu",
      span: "col-span-1 row-span-1",
      label: t("gallery_label_2"),
    },
    {
      src: "/images/265ea7cd-b798-4d72-9c43-868db04c46ed.jpg",
      alt: "Tờ giấy tự nhiên",
      span: "col-span-1 row-span-1",
      label: t("gallery_label_3"),
    },
    {
      src: "/images/7f9514d1-2b26-4749-a543-b5708449e1ad.jpg",
      alt: "Sổ tay và thiệp handmade",
      span: "col-span-1 row-span-2",
      label: t("gallery_label_4"),
    },
    {
      src: "/images/1dc34e6f-b9e5-491c-9886-13b2bfe18361.jpg",
      alt: "Texture giấy gốc Mộc Xinh",
      span: "col-span-1 row-span-1",
      label: t("gallery_label_5"),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%" },
      });
      gsap.from(".gallery-item", {
        scale: 0.94,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative overflow-hidden bg-beige py-24 dark:bg-[var(--beige)] md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Header */}
        <div ref={headRef} className="mb-12 flex items-end justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-olive" />
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-olive dark:text-olive">
                {t("gallery_badge")}
              </p>
            </div>
            <h2 className="font-display text-4xl text-kraft-dark dark:text-kraft-dark md:text-5xl">
              {t("gallery_title_1")}{" "}
              <span className="italic text-olive dark:text-olive">{t("gallery_title_italic")}</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-olive-dark/65 dark:text-olive-dark/60 md:block">
            {t("gallery_subtitle")}
          </p>
        </div>

        {/* Gallery grid */}
        <div ref={gridRef} className="grid grid-cols-3 gap-4" style={{ gridAutoRows: "200px" }}>
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`gallery-item group relative overflow-hidden rounded-2xl shadow-card ${item.span}`}
              style={{ minHeight: "200px" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-kraft-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-ivory">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-olive/50 dark:text-olive/40">
          {t("gallery_note")}
        </p>
      </div>
    </section>
  );
}
