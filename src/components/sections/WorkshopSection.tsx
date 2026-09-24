"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "@/contexts/AppContext";
import { FANPAGE_URL, WORKSHOP_REGISTRATION_URL } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export function WorkshopSection() {
  const { t, lang } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const infoGridRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const ACTIVITIES = [
    {
      num: "01",
      icon: "🎨",
      title: lang === "vi" ? "Tô màu Tranh Đông Hồ A5" : "Dong Ho A5 Watercolor Painting",
      material:
        lang === "vi" ? "Giấy lá dứa / Giấy mía / Sậy" : "Pineapple Leaf / Bagasse / Reed Paper",
      desc:
        lang === "vi"
          ? "Phối màu nước Thiên Long hoặc bút acrylic theo nét viền tranh dân gian Đông Hồ in sẵn sắc nét."
          : "Color pre-printed traditional Dong Ho folk outlines with Thien Long watercolors or acrylic pens.",
    },
    {
      num: "02",
      icon: "📔",
      title: lang === "vi" ? "Trang trí Sổ tay dây thừng" : "Hemp-Bound Notebook Art",
      material:
        lang === "vi" ? "Giấy mía & Giấy sậy (8 × 11.5 cm)" : "Bagasse & Reed Paper (8 × 11.5 cm)",
      desc:
        lang === "vi"
          ? "Sổ đóng gáy dây thừng mộc chuẩn bị sẵn; tự do phác thảo và tô màu bìa sổ mang dấu ấn riêng."
          : "Sketch and paint your own personalized cover on a rustic hemp-twine bound botanical notebook.",
    },
    {
      num: "03",
      icon: "🏮",
      title: lang === "vi" ? "Vẽ Đèn lồng giấy Dó LED" : "4-Sided Do Paper LED Lantern",
      material:
        lang === "vi" ? "Khung gỗ + 4 mặt giấy Dó A5" : "Wooden Frame + 4 A5 Do Paper Panels",
      desc:
        lang === "vi"
          ? "Trang trí 4 mặt giấy Dó căng phẳng, chờ màu khô và bật đèn LED tích hợp để ngắm ánh sáng ấm áp."
          : "Paint all 4 taut Do paper panels and switch on the built-in LED for a warm, artistic glow.",
    },
    {
      num: "04",
      icon: "🪭",
      title: lang === "vi" ? "Họa tiết Quạt giấy Dó" : "Traditional Do Paper Folding Fan",
      material: lang === "vi" ? "Khung nan tre/gỗ + Giấy Dó" : "Bamboo/Wood Ribs + Do Paper",
      desc:
        lang === "vi"
          ? "Mở quạt dán sẵn giấy Dó dẻo dai, phác thảo họa tiết màu nước mà không lo lem nhòe hay rách giấy."
          : "Unfold the smooth bamboo fan and paint botanical motifs on moisture-resistant Do paper.",
    },
    {
      num: "05",
      icon: "🔖",
      title: lang === "vi" ? "Thiết kế Bookmark & Tua rua" : "Botanical Bookmark & Tassel",
      material:
        lang === "vi"
          ? "Giấy lá dứa / Mía / Sậy (5 × 15 cm)"
          : "Pineapple / Bagasse Paper (5 × 15 cm)",
      desc:
        lang === "vi"
          ? "Vẽ họa tiết, viết thông điệp cá nhân lên phôi giấy đầm tay và luồn dây thừng/tua rua hoàn thiện."
          : "Illustrate patterns, write a personal quote, and thread a rustic tassel cord.",
    },
  ];

  const TIMELINE = [
    {
      time: "18:15 – 18:45",
      title:
        lang === "vi"
          ? "Đón khách, Check-in & Nhận bộ dụng cụ"
          : "Welcome, Check-in & Toolkit Handout",
      desc:
        lang === "vi"
          ? "Check-in sớm, chụp ảnh tại góc trưng bày chất liệu mộc và nhận bộ dụng cụ sáng tạo tại bàn thực hành."
          : "Early check-in, photo corner with botanical paper samples, and settling in with your table toolkit.",
    },
    {
      time: "18:45 – 18:55",
      title:
        lang === "vi" ? "Khai mạc & Câu chuyện tái sinh Mộc Xinh" : "Opening & The Mộc Xinh Story",
      desc:
        lang === "vi"
          ? "Giao lưu cùng đội ngũ Mộc Xinh, lắng nghe hành trình biến phụ phẩm nông nghiệp thành giấy thủ công."
          : "Meet the Mộc Xinh team and explore how local plant byproducts are transformed into eco-paper.",
    },
    {
      time: "18:55 – 19:15",
      title:
        lang === "vi"
          ? "Giới thiệu chất liệu & Hướng dẫn kỹ thuật"
          : "Material Touch & Live Demonstration",
      desc:
        lang === "vi"
          ? "Trực tiếp chạm các loại phôi giấy (lá dứa, mía, sậy, giấy Dó), xem làm mẫu 5 sản phẩm và lưu ý cách đi màu."
          : "Feel the 4 botanical paper types, watch demonstrations of all 5 crafts, and learn watercolor tips.",
    },
    {
      time: "19:15 – 20:35",
      title:
        lang === "vi"
          ? "Thực hành sáng tạo, Sấy khô & Đóng gói"
          : "Hands-on Crafting, Drying & Packaging",
      desc:
        lang === "vi"
          ? "Tự do phác thảo, tô vẽ với sự đồng hành 1-1 của nhân sự tại bàn; hỗ trợ làm khô và đóng gói túi/hộp sinh thái."
          : "Create your artwork with 1-on-1 table guidance, followed by drying assistance and eco-gift packaging.",
    },
    {
      time: "20:35 – 21:00",
      title:
        lang === "vi"
          ? "Chia sẻ thành quả & Chụp ảnh Check-out"
          : "Show & Tell, Group Photo & Wrap-up",
      desc:
        lang === "vi"
          ? "Giao lưu câu chuyện đằng sau tác phẩm, chụp ảnh lưu niệm cùng thành phẩm hoàn thiện và nhận quà từ Mộc Xinh."
          : "Share the story behind your creation, take souvenir photos with your finished piece, and wrap up.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        y: 32,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 80%" },
      });
      gsap.from(".workshop-card", {
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: infoGridRef.current, start: "top 78%" },
      });
      gsap.from(".timeline-item", {
        x: -30,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: timelineRef.current, start: "top 80%" },
      });
      gsap.from(ctaRef.current, {
        scale: 0.96,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ctaRef.current, start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="workshop"
      ref={sectionRef}
      className="relative overflow-hidden bg-ivory-warm py-28 dark:bg-[var(--ivory-warm)] md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 top-16 h-[500px] w-[500px] rounded-full bg-moc-green/10 blur-[120px] dark:bg-moc-green/6"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-16 h-[450px] w-[450px] rounded-full bg-kraft/10 blur-[100px] dark:bg-kraft/6"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div ref={headRef} className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-olive/40" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-moc-green-dark dark:text-moc-green-light">
              {t("workshop_badge")}
            </p>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-olive/40" />
          </div>
          <h2 className="font-display text-4xl leading-tight text-kraft-dark dark:text-kraft-dark md:text-5xl">
            {t("workshop_title_1")}{" "}
            <span className="italic text-olive dark:text-olive">{t("workshop_title_italic")}</span>{" "}
            {t("workshop_title_2")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-olive-dark/75 dark:text-olive-dark/70">
            {t("workshop_subtitle")}
          </p>
        </div>

        {/* ── Key Info & Perks Grid ───────────────────────────────────────── */}
        <div ref={infoGridRef} className="grid gap-8 lg:grid-cols-12">
          {/* Left: Event Details + Image */}
          <div className="workshop-card flex flex-col justify-between overflow-hidden rounded-3xl border border-kraft/15 bg-cream/90 p-7 shadow-card backdrop-blur-sm dark:border-kraft/8 dark:bg-[var(--surface)] lg:col-span-5">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-moc-green/12 px-3.5 py-1.5 text-xs font-semibold text-moc-green-dark dark:bg-moc-green/15 dark:text-moc-green-light">
                <span>🌿</span>
                <span>Workshop Mộc Xinh • Fall 2026</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 rounded-2xl p-4 backdrop-blur-sm">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-olive/12 text-lg">
                    📅
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-olive/70">
                      {t("workshop_date_label")}
                    </p>
                    <p className="mt-0.5 font-display text-base font-semibold text-kraft-dark dark:text-kraft-dark">
                      {t("workshop_date_value")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl p-4 backdrop-blur-sm">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-olive/12 text-lg">
                    📍
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-olive/70">
                      {t("workshop_location_label")}
                    </p>
                    <p className="mt-0.5 font-display text-base font-semibold text-kraft-dark dark:text-kraft-dark">
                      {t("workshop_location_value")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl p-4 backdrop-blur-sm">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-olive/12 text-lg">
                    👥
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-olive/70">
                      {t("workshop_scale_label")}
                    </p>
                    <p className="mt-0.5 font-display text-base font-semibold text-kraft-dark dark:text-kraft-dark">
                      {t("workshop_scale_value")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-olive/15 p-5 backdrop-blur-sm">
              <h3 className="mb-3 font-display text-base font-semibold text-kraft-dark dark:text-kraft-dark">
                ✨ {t("workshop_perks_title")}
              </h3>
              <ul className="space-y-2.5 text-xs leading-relaxed text-olive-dark/80 dark:text-olive-dark/75">
                {[
                  t("workshop_perk1"),
                  t("workshop_perk2"),
                  t("workshop_perk3"),
                  t("workshop_perk4"),
                ].map((perk, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-moc-green">✓</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: 5 DIY Activities */}
          <div className="workshop-card flex flex-col justify-between rounded-3xl border border-kraft/15 bg-cream/90 p-7 shadow-card backdrop-blur-sm dark:border-kraft/8 dark:bg-[var(--surface)] lg:col-span-7">
            <div>
              <h3 className="mb-5 font-display text-2xl text-kraft-dark dark:text-kraft-dark">
                {t("workshop_activities_title")}
              </h3>
              <div className="grid gap-3.5 sm:grid-cols-2">
                {ACTIVITIES.map((act, idx) => (
                  <div
                    key={act.num}
                    className={`group rounded-2xl border border-kraft/12 p-4 backdrop-blur-sm transition-all duration-300 hover:border-olive/40 hover:shadow-soft dark:border-kraft/8 ${
                      idx === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl">{act.icon}</span>
                      <span className="rounded-full bg-olive/10 px-2.5 py-0.5 text-[10px] font-medium text-olive-dark dark:text-olive">
                        {act.material}
                      </span>
                    </div>
                    <h4 className="mt-2 font-display text-base text-kraft-dark dark:text-kraft-dark">
                      {act.num}. {act.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-olive-dark/70 dark:text-olive-dark/65">
                      {act.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-olive/12 to-kraft/10 p-4">
              <div className="relative h-14 w-14 flex-none overflow-hidden rounded-xl shadow-soft">
                <Image
                  src="/images/7f9514d1-2b26-4749-a543-b5708449e1ad.jpg"
                  alt="Workshop Mộc Xinh"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <p className="text-xs leading-relaxed text-kraft-dark/85 dark:text-kraft-dark/80">
                {lang === "vi"
                  ? "Mọi sản phẩm hoàn thiện tại Workshop đều được hỗ trợ sấy khô tại chỗ và đóng gói trong túi/hộp sinh thái để bạn mang về làm kỷ niệm hoặc tặng người thân."
                  : "All creations completed at the Workshop are dried on-site and packed in eco-friendly bags/boxes ready to take home or gift."}
              </p>
            </div>
          </div>
        </div>

        {/* ── Workshop Timeline ───────────────────────────────────────────── */}
        <div
          ref={timelineRef}
          className="mt-16 rounded-3xl border border-kraft/15 bg-ivory/60 p-8 shadow-soft backdrop-blur-sm dark:border-kraft/8 dark:bg-[var(--surface)]/70 lg:p-10"
        >
          <h3 className="mb-8 text-center font-display text-2xl text-kraft-dark dark:text-kraft-dark md:text-3xl">
            {t("workshop_timeline_title")}
          </h3>
          <div className="grid gap-5 md:grid-cols-5">
            {TIMELINE.map((step, i) => (
              <div
                key={step.time}
                className="timeline-item relative flex flex-col rounded-2xl border border-olive/15 bg-cream/80 p-5 shadow-soft backdrop-blur-sm dark:border-olive/8"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-moc-green/15 px-3 py-1 font-mono text-xs font-semibold text-moc-green-dark dark:text-moc-green-light">
                    {step.time}
                  </span>
                  <span className="font-mono text-xs font-bold text-olive/35">0{i + 1}</span>
                </div>
                <h4 className="font-display text-base text-kraft-dark dark:text-kraft-dark">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-olive-dark/70 dark:text-olive-dark/65">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Registration CTA Banner with Link ───────────────────────────── */}
        <div
          ref={ctaRef}
          className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-kraft-dark via-olive-dark to-kraft-dark p-8 text-center shadow-paper md:p-12"
        >
          <div className="mx-auto max-w-2xl">
            <span className="inline-block rounded-full border border-ivory/20 bg-ivory/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-sage">
              {t("workshop_date_value")}
            </span>
            <h3 className="mt-4 font-display text-3xl text-ivory md:text-4xl">
              {lang === "vi"
                ? "Sẵn sàng tự tay làm nên tác phẩm từ sợi thực vật?"
                : "Ready to craft your own botanical paper artwork?"}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ivory/75">{t("workshop_cta_note")}</p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WORKSHOP_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="workshop-register-btn"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-moc-green px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-0.5 hover:bg-moc-green-dark glow-green sm:w-auto"
              >
                <span>{t("workshop_cta_primary")}</span>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href={FANPAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="workshop-fanpage-btn"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ivory/30 bg-ivory/10 px-7 py-4 text-sm font-medium text-ivory transition-all duration-500 hover:border-ivory/60 hover:bg-ivory/20 sm:w-auto"
              >
                <span>{t("workshop_cta_secondary")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
