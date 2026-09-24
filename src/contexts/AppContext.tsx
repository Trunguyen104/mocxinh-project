"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type TranslationKey } from "@/i18n/translations";

type Theme = "light" | "dark";

const THEME_KEY = "mx-theme";
const LANG_KEY = "mx-lang";

interface AppContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [lang, setLangState] = useState<Lang>("vi");

  // Hydrate persisted preferences once on mount to avoid SSR/client hydration mismatch
  useEffect(() => {
    queueMicrotask(() => {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === "light" || savedTheme === "dark") {
        setThemeState(savedTheme);
      }
      const savedLang = localStorage.getItem(LANG_KEY);
      if (savedLang === "vi" || savedLang === "en") {
        setLangState(savedLang);
      }
    });
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.lang = lang;
  }, [theme, lang]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      localStorage.setItem(THEME_KEY, next);
      return next;
    });
  }, []);

  const setLang = useCallback((l: Lang) => {
    localStorage.setItem(LANG_KEY, l);
    setLangState(l);
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[lang][key] ?? translations["vi"][key] ?? key;
    },
    [lang],
  );

  const contextValue = useMemo<AppContextValue>(
    () => ({
      theme,
      toggleTheme,
      isDark: theme === "dark",
      lang,
      setLang,
      t,
    }),
    [theme, toggleTheme, lang, setLang, t],
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
