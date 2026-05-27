"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useApp } from "@/contexts/AppContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LangToggle } from "@/components/ui/LangToggle";
import { BRAND } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useApp();

  const NAV_LINKS = [
    { href: "#story", label: t("nav_story") },
    { href: "#products", label: t("nav_products") },
    { href: "#values", label: t("nav_values") },
    { href: "#contact", label: t("nav_contact") },
  ];

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 glass-nav py-3 shadow-soft`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-10">
        {/* ── Logo ───────────────────────────────────────────────────────── */}
        <div className="flex flex-1 justify-start">
          <a href="#" className="group flex items-center gap-2" aria-label="Mộc Xinh - Trang chủ">
            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-moc-green/20 transition-all duration-500 group-hover:ring-moc-green/50 group-hover:glow-green">
              <Image
                src="/images/mocxinh-logo.jpg"
                alt="Mộc Xinh Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <span className="font-display text-xl tracking-tight text-kraft-dark transition-all duration-300 group-hover:gradient-text-green dark:text-kraft-dark">
              {BRAND.name}
            </span>
          </a>
        </div>

        {/* ── Desktop nav ─────────────────────────────────────────────────── */}
        <nav
          className="hidden items-center justify-center gap-7 md:flex"
          aria-label="Điều hướng chính"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-olive-dark/80 transition-colors duration-300 hover:text-kraft-dark after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-kraft after:transition-all after:duration-300 hover:after:w-full dark:text-olive-dark/90 dark:hover:text-kraft-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Desktop controls ────────────────────────────────────────────── */}
        <div className="hidden flex-1 items-center justify-end gap-2.5 md:flex">
          <LangToggle />
          <ThemeToggle />
          <a
            href="#contact"
            className="ml-1 rounded-full border border-moc-green/40 bg-moc-green/8 px-5 py-2 text-xs font-medium uppercase tracking-[0.12em] text-moc-green-dark transition-all duration-500 hover:bg-moc-green hover:text-white hover:border-moc-green hover:shadow-soft dark:border-moc-green/30 dark:bg-moc-green/6 dark:text-moc-green-light dark:hover:bg-moc-green dark:hover:text-white whitespace-nowrap"
          >
            {t("nav_contact_btn")}
          </a>
        </div>

        {/* ── Mobile controls + Hamburger ─────────────────────────────────── */}
        <div className="flex flex-1 items-center justify-end gap-2 md:hidden">
          <ThemeToggle />
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 transition-colors hover:bg-beige/60 dark:hover:bg-stone-800/60"
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          >
            <span
              className={`block h-px w-6 bg-kraft-dark transition-all duration-300 dark:bg-kraft-dark ${
                mobileOpen ? "translate-y-2.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-kraft-dark transition-all duration-300 dark:bg-kraft-dark ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-kraft-dark transition-all duration-300 dark:bg-kraft-dark ${
                mobileOpen ? "-translate-y-2.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ─────────────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-kraft/10 bg-cream/96 backdrop-blur-xl transition-all duration-500 dark:border-kraft/8 dark:bg-stone-950/95 md:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Điều hướng di động">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-kraft/8 py-3.5 text-sm text-olive-dark transition-colors hover:text-kraft-dark dark:border-kraft/6 dark:text-olive-dark dark:hover:text-kraft-dark"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile bottom actions */}
          <div className="mt-3 flex items-center gap-3">
            <LangToggle />
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 rounded-full bg-olive/15 py-3 text-center text-sm font-medium text-olive-dark transition-colors hover:bg-olive/25 dark:bg-olive/10 dark:text-olive-dark"
            >
              {t("nav_contact_mobile")}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
