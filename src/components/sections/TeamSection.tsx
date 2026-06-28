"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "@/contexts/AppContext";

gsap.registerPlugin(ScrollTrigger);

// ─── Card colour palette ─────────────────────────────────────────────────────
const CARD_STYLES = [
  {
    accent: "#4a7c59",
    gradient: "from-[#4a7c59]/18 via-[#4a7c59]/6 to-transparent",
    border: "border-[#4a7c59]/28",
    titleBg: "bg-[#4a7c59]",
    glowColor: "rgba(74,124,89,0.4)",
    fallbackFrom: "#4a7c59",
    fallbackTo: "#2d5a3d",
    initials: "🌿",
  },
  {
    accent: "#8b6914",
    gradient: "from-[#8b6914]/14 via-[#8b6914]/5 to-transparent",
    border: "border-[#8b6914]/22",
    titleBg: "bg-[#8b6914]",
    glowColor: "rgba(139,105,20,0.38)",
    fallbackFrom: "#8b6914",
    fallbackTo: "#5c4510",
    initials: "⚙️",
  },
  {
    accent: "#6b7c3e",
    gradient: "from-[#6b7c3e]/14 via-[#6b7c3e]/5 to-transparent",
    border: "border-[#6b7c3e]/22",
    titleBg: "bg-[#6b7c3e]",
    glowColor: "rgba(107,124,62,0.38)",
    fallbackFrom: "#6b7c3e",
    fallbackTo: "#3d4a22",
    initials: "📣",
  },
  {
    accent: "#3d7a6e",
    gradient: "from-[#3d7a6e]/14 via-[#3d7a6e]/5 to-transparent",
    border: "border-[#3d7a6e]/22",
    titleBg: "bg-[#3d7a6e]",
    glowColor: "rgba(61,122,110,0.38)",
    fallbackFrom: "#3d7a6e",
    fallbackTo: "#1f4b44",
    initials: "💻",
  },
  {
    accent: "#7a5c2e",
    gradient: "from-[#7a5c2e]/14 via-[#7a5c2e]/5 to-transparent",
    border: "border-[#7a5c2e]/22",
    titleBg: "bg-[#7a5c2e]",
    glowColor: "rgba(122,92,46,0.38)",
    fallbackFrom: "#7a5c2e",
    fallbackTo: "#4a3518",
    initials: "📊",
  },
  {
    accent: "#5c7a3e",
    gradient: "from-[#5c7a3e]/14 via-[#5c7a3e]/5 to-transparent",
    border: "border-[#5c7a3e]/22",
    titleBg: "bg-[#5c7a3e]",
    glowColor: "rgba(92,122,62,0.38)",
    fallbackFrom: "#5c7a3e",
    fallbackTo: "#344a22",
    initials: "🎨",
  },
];

// ─── MemberCard ──────────────────────────────────────────────────────────────
function MemberCard({
  member,
  style,
  index,
}: {
  member: {
    name: string;
    title: string;
    role: string;
    roleVi: string;
    desc: string;
    photo: string;
  };
  style: (typeof CARD_STYLES)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  // 3D tilt on mouse move
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(card, {
        rotateY: x * 8,
        rotateX: -y * 8,
        transformPerspective: 800,
        duration: 0.35,
        ease: "power2.out",
      });
      if (glowRef.current)
        gsap.to(glowRef.current, { x: x * 22, y: y * 22, duration: 0.35, ease: "power2.out" });
    };
    const handleLeave = () => {
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.7, ease: "elastic.out(1,0.5)" });
      if (glowRef.current)
        gsap.to(glowRef.current, { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
    };
    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);
    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Pulse glow
  useEffect(() => {
    if (!glowRef.current) return;
    gsap.to(glowRef.current, {
      scale: 1.2,
      opacity: 0.7,
      duration: 2.5 + index * 0.3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, [index]);

  return (
    <article
      ref={cardRef}
      className={`team-card group relative overflow-hidden rounded-2xl border bg-gradient-to-b ${style.gradient} ${style.border} shadow-soft transition-shadow duration-500 hover:shadow-paper`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-[55px]"
        style={{ background: style.glowColor }}
        aria-hidden
      />

      {/* ── Photo ─────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
        {!imgError ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            style={{
              background: `linear-gradient(155deg, ${style.fallbackFrom}, ${style.fallbackTo})`,
            }}
          >
            <span className="text-5xl" aria-hidden>
              {style.initials}
            </span>
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/60">
              {member.title}
            </span>
          </div>
        )}

        {/* Shimmer sweep */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />

        {/* C-suite badge */}
        <div
          className={`absolute bottom-2.5 left-3 inline-flex items-center rounded-full ${style.titleBg} px-3 py-1 shadow-md`}
        >
          <span className="font-display text-xs font-extrabold tracking-[0.2em] text-white">
            {member.title}
          </span>
        </div>
      </div>

      {/* ── Info ──────────────────────────────────────────────────────── */}
      <div className="relative p-4">
        <h3 className="font-display text-[14px] font-semibold text-kraft-dark dark:text-kraft-dark leading-snug line-clamp-2">
          {member.name}
        </h3>
        <p
          className="mt-0.5 text-[10px] font-bold uppercase tracking-wider leading-tight"
          style={{ color: style.accent }}
        >
          {member.role}
        </p>
        <p className="text-[9px] text-olive/50 mb-3 leading-tight">{member.roleVi}</p>

        {/* Expanding divider */}
        <div
          className="mb-2.5 h-px w-5 transition-all duration-500 group-hover:w-full"
          style={{ background: `linear-gradient(to right, ${style.accent}, transparent)` }}
        />

        <p className="text-[11px] leading-relaxed text-olive-dark/68 dark:text-olive-dark/60 line-clamp-4">
          {member.desc}
        </p>
      </div>
    </article>
  );
}

// ─── TeamSection ─────────────────────────────────────────────────────────────
export function TeamSection() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  const MEMBERS = [
    {
      name: t("team_member1_name"),
      title: t("team_member1_title"),
      role: t("team_member1_role"),
      roleVi: t("team_member1_role_vi"),
      desc: t("team_member1_desc"),
      photo: "/images/team/member-1.jpg",
    },
    {
      name: t("team_member2_name"),
      title: t("team_member2_title"),
      role: t("team_member2_role"),
      roleVi: t("team_member2_role_vi"),
      desc: t("team_member2_desc"),
      photo: "/images/team/member-2.jpg",
    },
    {
      name: t("team_member3_name"),
      title: t("team_member3_title"),
      role: t("team_member3_role"),
      roleVi: t("team_member3_role_vi"),
      desc: t("team_member3_desc"),
      photo: "/images/team/member-3.jpg",
    },
    {
      name: t("team_member4_name"),
      title: t("team_member4_title"),
      role: t("team_member4_role"),
      roleVi: t("team_member4_role_vi"),
      desc: t("team_member4_desc"),
      photo: "/images/team/member-4.jpg",
    },
    {
      name: t("team_member5_name"),
      title: t("team_member5_title"),
      role: t("team_member5_role"),
      roleVi: t("team_member5_role_vi"),
      desc: t("team_member5_desc"),
      photo: "/images/team/member-5.jpg",
    },
    {
      name: t("team_member6_name"),
      title: t("team_member6_title"),
      role: t("team_member6_role"),
      roleVi: t("team_member6_role_vi"),
      desc: t("team_member6_desc"),
      photo: "/images/team/member-6.jpg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.from(headRef.current, {
        y: 36,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%" },
      });

      // Cards: stagger fan-in from bottom
      gsap.from(".team-card", {
        y: 60,
        opacity: 0,
        scale: 0.93,
        duration: 0.85,
        stagger: { amount: 0.7, from: "start" },
        ease: "power3.out",
        scrollTrigger: { trigger: ".team-grid", start: "top 78%" },
      });

      // Gentle float, alternating direction
      document.querySelectorAll(".team-card").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -5 : 5,
          duration: 3 + i * 0.3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: i * 0.22,
        });
      });

      // Parallax blobs
      gsap.to(".team-blob-1", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(".team-blob-2", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative overflow-hidden bg-ivory-warm py-24 dark:bg-[var(--ivory-warm)] md:py-32"
    >
      {/* Backgrounds */}
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-40" aria-hidden />
      <div
        className="team-blob-1 pointer-events-none absolute -right-32 top-10 h-[600px] w-[600px] rounded-full bg-moc-green/5 blur-[120px]"
        aria-hidden
      />
      <div
        className="team-blob-2 pointer-events-none absolute -left-24 bottom-10 h-[500px] w-[500px] rounded-full bg-kraft/5 blur-[100px]"
        aria-hidden
      />

      {/* Leaf particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="leaf-particle absolute"
            style={{
              top: `${8 + i * 11}%`,
              left: `${4 + (i % 4) * 24}%`,
              width: "7px",
              height: "13px",
              opacity: 0,
              animationDelay: `${i * 0.9}s`,
              animationDuration: `${7 + i * 0.45}s`,
            }}
          />
        ))}
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-[1400px] px-4 lg:px-8 xl:px-10">
        {/* Heading */}
        <div ref={headRef} className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-olive/40" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-olive">
              {t("team_badge")}
            </p>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-olive/40" />
          </div>
          <h2 className="font-display text-4xl text-kraft-dark dark:text-kraft-dark md:text-5xl">
            {t("team_title_1")} <span className="italic text-olive">{t("team_title_italic")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-olive-dark/70">
            {t("team_subtitle")}
          </p>
        </div>

        {/* 6-column grid — no scroll */}
        <div className="team-grid grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {MEMBERS.map((member, i) => (
            <MemberCard key={member.name} member={member} style={CARD_STYLES[i]} index={i} />
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-kraft/20" />
          <span className="text-lg" aria-hidden>
            🌿
          </span>
          <p className="text-xs uppercase tracking-[0.25em] text-olive/50">
            FPT University Cần Thơ · EXE101 · 2026
          </p>
          <span className="text-lg" aria-hidden>
            🌿
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-kraft/20" />
        </div>
      </div>
    </section>
  );
}
