"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "@/contexts/AppContext";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS_DATA = [
  {
    id: "paper-a4",
    tag: "Bestseller",
    tagStyle: "bg-kraft/15 text-kraft-dark dark:bg-kraft/12 dark:text-kraft",
    texture: "Sợi cỏ dại thô, bề mặt grain tự nhiên",
    description: "Kích thước 210×297mm, 180-300gsm, phân hủy sinh học.",
    image: "/images/product-paper-a4.png",
    accent: "from-sage/20 to-ivory dark:from-sage/8 dark:to-[var(--ivory)]",
    price: "85.000đ",
    name: "Giấy Handmade A4",
  },
  {
    id: "notebook",
    tag: "Mới",
    tagStyle: "bg-olive/15 text-olive-dark dark:bg-olive/10 dark:text-olive",
    texture: "Bìa cứng, ruột giấy handmade, đóng chỉ thủ công",
    description: "32 trang giấy handmade A5, bìa cứng, dây bookmark tự nhiên.",
    image: "/images/product-notebook.png",
    accent: "from-beige/40 to-ivory dark:from-beige/10 dark:to-[var(--ivory)]",
    price: "120.000đ",
    name: "Sổ Tay Eco",
  },
  {
    id: "bookmark",
    tag: "Thủ công",
    tagStyle: "bg-sage-light/40 text-olive-dark dark:bg-sage/10 dark:text-olive",
    texture: "Ép sợi, viền cắt thủ công",
    description: "Đánh dấu sách với vẻ đẹp tự nhiên — mỗi chiếc là tác phẩm độc đáo.",
    image: "/images/product-bookmark.png",
    accent: "from-ivory-warm/60 to-ivory dark:from-[var(--ivory-warm)] dark:to-[var(--ivory)]",
    price: "25.000đ",
    name: "Bookmark Eco",
  },
  {
    id: "card",
    tag: "Eco Gift",
    tagStyle: "bg-kraft/12 text-kraft-mid dark:bg-kraft/8 dark:text-kraft",
    texture: "In khoen, phủ sợi cỏ mịn, kèm phong bì kraft",
    description: "Thiệp từ giấy cỏ, kèm phong bì kraft.",
    image: "/images/product-card.png",
    accent: "from-beige-light/50 to-ivory dark:from-beige/8 dark:to-[var(--ivory)]",
    price: "35.000đ",
    name: "Thiệp Eco Handmade",
  },
];

export function ProductShowcase() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        y: 32, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 80%" },
      });
      gsap.from(".product-item", {
        y: 56, opacity: 0, duration: 0.9, stagger: 0.14, ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 75%" },
      });
      gsap.from(featureRef.current, {
        y: 32, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: featureRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative overflow-hidden bg-cream py-28 dark:bg-[var(--cream)] md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-40" aria-hidden />
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-sage/5 blur-[120px] dark:bg-sage/3" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Header */}
        <div ref={headRef} className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-olive" />
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-olive dark:text-olive">
                {t("products_badge")}
              </p>
            </div>
            <h2 className="font-display text-4xl text-kraft-dark dark:text-kraft-dark md:text-5xl">
              {t("products_title_1")}
              <br />
              <span className="italic text-olive dark:text-olive">{t("products_title_italic")}</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-olive-dark/70 dark:text-olive-dark/65 md:text-right">
            {t("products_subtitle")}
          </p>
        </div>

        {/* Product grid */}
        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS_DATA.map((product) => (
            <article
              key={product.id}
              id={`product-${product.id}`}
              className="product-item group relative flex flex-col overflow-hidden rounded-3xl bg-ivory shadow-card transition-all duration-700 hover:-translate-y-2 hover:shadow-paper dark:bg-[var(--surface)]"
            >
              {/* Image */}
              <div className={`relative overflow-hidden bg-gradient-to-b ${product.accent} aspect-[4/5]`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute left-3 top-3">
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${product.tagStyle}`}>
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg text-kraft-dark dark:text-kraft-dark">{product.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-olive/75 dark:text-olive/70">{product.texture}</p>
                <p className="mt-2 hidden text-xs leading-relaxed text-olive-dark/60 dark:text-olive-dark/55 lg:block">
                  {product.description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-kraft/10 pt-4 dark:border-kraft/8">
                  <p className="font-display text-base font-medium text-kraft dark:text-kraft">{product.price}</p>
                  <button
                    id={`add-to-cart-${product.id}`}
                    aria-label={`${t("products_add_to_cart")} ${product.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-olive/10 text-olive-dark transition-all duration-300 hover:bg-olive hover:text-ivory hover:shadow-soft dark:bg-olive/8 dark:text-olive dark:hover:bg-olive dark:hover:text-ivory"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M7 1v12M1 7h12" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Ring hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-olive/0 transition-all duration-700 group-hover:ring-olive/20 dark:group-hover:ring-olive/15" />
            </article>
          ))}
        </div>

        {/* Feature band — Custom Orders */}
        <div
          ref={featureRef}
          className="mt-16 overflow-hidden rounded-3xl shadow-paper"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-kraft-dark to-olive-dark px-8 py-10 md:px-12">
            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-lg">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-sage dark:text-sage">
                  {t("products_custom_badge")}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ivory md:text-3xl">
                  {t("products_custom_title")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                  {t("products_custom_desc")}
                </p>
              </div>
              <a
                href="#contact"
                id="custom-order-btn"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-7 py-3 text-sm font-medium text-ivory transition-all duration-500 hover:border-ivory/50 hover:bg-ivory/10 whitespace-nowrap"
              >
                {t("products_custom_cta")}
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 overflow-hidden rounded-full opacity-15">
              <Image src="/images/265ea7cd-b798-4d72-9c43-868db04c46ed.jpg" alt="" fill sizes="160px" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
