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
  isTourActive: boolean;
  tourStep: number;
  isTourMinimized: boolean;
  startWorkshopTour: (step?: number) => void;
  setTourStep: (step: number) => void;
  toggleTourMinimized: () => void;
  closeTour: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [lang, setLangState] = useState<Lang>("vi");
  const [isTourActive, setIsTourActive] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [isTourMinimized, setIsTourMinimized] = useState(false);

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

  const startWorkshopTour = useCallback((step = 0) => {
    setIsTourActive(true);
    setIsTourMinimized(false);
    setTourStep(step);

    const targetId =
      step === 1
        ? "workshop-activities"
        : step === 2
          ? "workshop-timeline"
          : step === 3
            ? "workshop-cta"
            : "workshop";

    const target = document.getElementById(targetId) || document.getElementById("workshop");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const closeTour = useCallback(() => {
    setIsTourActive(false);
  }, []);

  const toggleTourMinimized = useCallback(() => {
    setIsTourMinimized((prev) => !prev);
  }, []);

  const contextValue = useMemo<AppContextValue>(
    () => ({
      theme,
      toggleTheme,
      isDark: theme === "dark",
      lang,
      setLang,
      t,
      isTourActive,
      tourStep,
      isTourMinimized,
      startWorkshopTour,
      setTourStep,
      toggleTourMinimized,
      closeTour,
    }),
    [
      theme,
      toggleTheme,
      lang,
      setLang,
      t,
      isTourActive,
      tourStep,
      isTourMinimized,
      startWorkshopTour,
      setTourStep,
      toggleTourMinimized,
      closeTour,
    ],
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
