"use client";

import { useApp } from "@/contexts/AppContext";
import type { Lang } from "@/i18n/translations";

export function LangToggle() {
  const { lang, setLang } = useApp();

  const toggle = () => setLang(lang === "vi" ? "en" : "vi");

  return (
    <button
      id="lang-toggle"
      onClick={toggle}
      aria-label={lang === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
      title={lang === "vi" ? "Switch to English" : "Tiếng Việt"}
      className="flex h-9 w-9 items-center justify-center text-xs font-bold"
    >
      {lang === "vi" ? "EN" : "VI"}
    </button>
  );
}
