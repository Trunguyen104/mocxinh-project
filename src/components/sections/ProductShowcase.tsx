"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "@/contexts/AppContext";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS_DATA = [
  {
    id: "dong-ho-a5",
    tagVi: "Chủ đề Đông Hồ",
    tagEn: "Dong Ho Theme",
    size: "Khổ A5 (14.8 × 21 cm)",
    tagStyle: "bg-kraft/15 text-kraft-dark dark:bg-kraft/12 dark:text-kraft",
    nameVi: "Tranh vẽ màu nước Đông Hồ",
    nameEn: "Dong Ho Watercolor Painting (A5)",
    textureVi: "Giấy lá dứa (dày, sần) hoặc giấy mía/sậy (cứng cáp), in viền nét đen",
    textureEn: "Pineapple leaf (thick, grainy) or bagasse/reed paper, pre-printed outlines",
    descriptionVi:
      "Bề mặt giấy bám màu nước Thiên Long và bút acrylic cực tốt, không bị lem, nhòe hay rách bục. Dùng tô màu sáng tạo, làm tranh treo tường, trang trí bàn học/làm việc hoặc quà tặng.",
    descriptionEn:
      "Holds Thien Long watercolor and acrylic markers vibrantly without bleeding or tearing. Ideal for DIY painting, wall art, desk decor, or cultural gifts.",
    image: "/images/product-paper-a4.png",
    accent: "from-sage/20 to-ivory dark:from-sage/8 dark:to-[var(--ivory)]",
  },
  {
    id: "notebook",
    tagVi: "Đóng gáy dây thừng",
    tagEn: "Hemp-Bound",
    size: "8 × 11.5 cm (10–15 trang)",
    tagStyle: "bg-olive/15 text-olive-dark dark:bg-olive/10 dark:text-olive",
    nameVi: "Sổ tay thủ công Mộc Xinh",
    nameEn: "Mộc Xinh Handmade Notebook",
    textureVi: "Bìa & ruột sổ từ giấy mía, giấy sậy; đóng gáy dây thừng mộc",
    textureEn: "Bagasse & reed paper cover/pages; rustic hemp-twine binding",
    descriptionVi:
      "Gáy sổ đục lỗ đều đặn, đóng dây thừng chắc chắn, lật mở dễ dàng. Bìa sổ để trơn sẵn sàng cho khách hàng tự do vẽ tô trang trí cá nhân hóa mà không lem màu.",
    descriptionEn:
      "Sturdy hemp-twine binding that opens flat. Blank botanical cover ready for personalized watercolor or acrylic artwork without bleeding.",
    image: "/images/product-notebook.png",
    accent: "from-beige/40 to-ivory dark:from-beige/10 dark:to-[var(--ivory)]",
  },
  {
    id: "do-lantern",
    tagVi: "Tích hợp đèn LED",
    tagEn: "Built-in LED",
    size: "Cao 21 × Rộng 14.8 cm",
    tagStyle: "bg-kraft/15 text-kraft-dark dark:bg-kraft/12 dark:text-kraft",
    nameVi: "Đèn lồng giấy Dó Mộc Xinh",
    nameEn: "Mộc Xinh Do Paper LED Lantern",
    textureVi: "Khung que gỗ vuông vức, 4 mặt bọc giấy Dó khổ A5, đèn LED tích hợp",
    textureEn: "Wooden frame, 4 A5 traditional Do paper panels, integrated warm LED",
    descriptionVi:
      "4 mặt giấy Dó dán căng phẳng, xuyên sáng ấm áp khi bật đèn LED và bám màu vẽ tốt. Dùng tự do trang trí 4 mặt làm đèn ngủ, đèn decor góc chill hoặc quà tặng sáng tạo.",
    descriptionEn:
      "4 taut Do paper panels with warm light diffusion and excellent paint retention. Customize all 4 sides for a cozy nightlight or artistic room decor.",
    image: "/images/9e89018c-4900-43eb-870d-0c698709652a.jpg",
    accent: "from-ivory-warm/60 to-ivory dark:from-[var(--ivory-warm)] dark:to-[var(--ivory)]",
  },
  {
    id: "do-fan",
    tagVi: "Thủ công truyền thống",
    tagEn: "Traditional Craft",
    size: "Quạt xếp cầm tay",
    tagStyle: "bg-sage-light/40 text-olive-dark dark:bg-sage/10 dark:text-olive",
    nameVi: "Quạt giấy Dó nghệ thuật",
    nameEn: "Artisanal Do Paper Folding Fan",
    textureVi: "Khung nan tre/gỗ tự nhiên, mặt quạt bọc giấy Dó dẻo dai",
    textureEn: "Natural bamboo/wood ribs, supple traditional Do paper surface",
    descriptionVi:
      "Khung quạt gấp xòe mượt mà, giấy Dó chịu được độ ẩm cao khi vẽ màu nước và bút acrylic mà không biến dạng. Dùng làm mát, đạo cụ chụp ảnh nghệ thuật hoặc decor phòng.",
    descriptionEn:
      "Smooth-folding bamboo ribs paired with moisture-resistant Do paper for watercolor painting. Great for cooling, photography props, or traditional decor.",
    image: "/images/product-card.png",
    accent: "from-beige-light/50 to-ivory dark:from-beige/8 dark:to-[var(--ivory)]",
  },
  {
    id: "bookmark",
    tagVi: "Quà tặng nhỏ xinh",
    tagEn: "Eco Keepsake",
    size: "5 × 15 cm",
    tagStyle: "bg-olive/15 text-olive-dark dark:bg-olive/10 dark:text-olive",
    nameVi: "Bookmark thủ công Mộc Xinh",
    nameEn: "Mộc Xinh Botanical Bookmark",
    textureVi: "Giấy lá dứa hoặc giấy mía/sậy đầm tay, gắn dây thừng/dây tua rua",
    textureEn: "Thick pineapple leaf or bagasse/reed paper, hemp cord/tassel",
    descriptionVi:
      "Cắt chuẩn kích thước 5×15 cm, viền thẳng gọn, đục lỗ tròn xỏ dây. Giấy đầm tay, chịu màu vẽ acrylic và màu nước tốt mà không thấm lem sang mặt sau.",
    descriptionEn:
      "Precision-cut 5×15 cm with pre-punched eyelet and tassel. Substantial feel that holds two-sided watercolor and acrylic lettering without bleed-through.",
    image: "/images/product-bookmark.png",
    accent: "from-sage/20 to-ivory dark:from-sage/8 dark:to-[var(--ivory)]",
  },
];

export function ProductShowcase() {
  const { t, lang } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        y: 32,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 80%" },
      });
      gsap.from(".product-item", {
        y: 56,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 75%" },
      });
      gsap.from(featureRef.current, {
        y: 32,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
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
      <div
        className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-sage/5 blur-[120px] dark:bg-sage/3"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headRef}
          className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
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
              <span className="italic text-olive dark:text-olive">
                {t("products_title_italic")}
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-olive-dark/70 dark:text-olive-dark/65 md:text-right">
            {t("products_subtitle")}
          </p>
        </div>

        {/* Product grid (5 products: 3 top + 2 bottom or 3-col responsive) */}
        <div ref={gridRef} className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS_DATA.map((product) => {
            const name = lang === "vi" ? product.nameVi : product.nameEn;
            const tag = lang === "vi" ? product.tagVi : product.tagEn;
            const texture = lang === "vi" ? product.textureVi : product.textureEn;
            const description = lang === "vi" ? product.descriptionVi : product.descriptionEn;

            return (
              <article
                key={product.id}
                id={`product-${product.id}`}
                className="product-item group relative flex flex-col overflow-hidden rounded-3xl bg-ivory shadow-card transition-all duration-700 hover:-translate-y-2 hover:shadow-paper dark:bg-[var(--surface)]"
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-b ${product.accent} aspect-[16/11]`}
                >
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm ${product.tagStyle}`}
                    >
                      {tag}
                    </span>
                    <span className="rounded-full bg-ivory/85 px-2.5 py-1 text-[10px] font-medium text-kraft-dark backdrop-blur-sm dark:bg-stone-900/80 dark:text-ivory">
                      {product.size}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-kraft-dark dark:text-kraft-dark">
                    {name}
                  </h3>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-olive dark:text-olive">
                    {texture}
                  </p>
                  <p className="mt-2.5 text-xs leading-relaxed text-olive-dark/70 dark:text-olive-dark/65">
                    {description}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-kraft/10 pt-4 mt-5 dark:border-kraft/8">
                    <a
                      href="#workshop"
                      className="text-xs font-semibold uppercase tracking-wider text-kraft hover:text-olive transition-colors dark:text-kraft"
                    >
                      {lang === "vi" ? "Trải nghiệm tại Workshop →" : "Try at Workshop →"}
                    </a>
                    <a
                      href="#contact"
                      id={`add-to-cart-${product.id}`}
                      aria-label={`${t("products_add_to_cart")} ${name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-olive/10 text-olive-dark transition-all duration-300 hover:bg-olive hover:text-ivory hover:shadow-soft dark:bg-olive/8 dark:text-olive dark:hover:bg-olive dark:hover:text-ivory"
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M7 1v12M1 7h12" strokeLinecap="round" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Ring hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-olive/0 transition-all duration-700 group-hover:ring-olive/20 dark:group-hover:ring-olive/15" />
              </article>
            );
          })}
        </div>

        {/* Feature band — Workshop Teaser */}
        <div ref={featureRef} className="mt-16 overflow-hidden rounded-3xl shadow-paper">
          <div className="relative overflow-hidden bg-gradient-to-r from-kraft-dark to-olive-dark px-8 py-10 md:px-12">
            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-sage dark:text-sage">
                  {t("products_custom_badge")}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ivory md:text-3xl">
                  {t("products_custom_title")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/75">
                  {t("products_custom_desc")}
                </p>
              </div>
              <a
                href="#workshop"
                id="custom-order-btn"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/30 bg-ivory/10 px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-500 hover:border-ivory/60 hover:bg-ivory/20 whitespace-nowrap"
              >
                {t("products_custom_cta")}
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
