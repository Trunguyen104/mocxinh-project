"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type TranslationKey } from "@/i18n/translations";

// ─── Types ────────────────────────────────────────────────────────────────────
type Theme = "light" | "dark";

interface AppContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

// ─── Context ──────────────────────────────────────────────────────────────────
const AppContext = createContext<AppContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────
export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLangState] = useState<Lang>("vi");

  // Restore from localStorage on mount
  useEffect(() => {
    const savedTheme = (localStorage.getItem("mx-theme") as Theme) ?? "light";
    const savedLang = (localStorage.getItem("mx-lang") as Lang) ?? "vi";
    setTheme(savedTheme);
    setLangState(savedLang);
    // Apply immediately to <html>
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Sync theme to <html> class + localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("mx-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("mx-lang", l);
    // Update html lang attribute
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[lang][key] ?? translations["vi"][key] ?? key;
    },
    [lang],
  );

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, isDark: theme === "dark", lang, setLang, t }}
    >
      {children}
    </AppContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
