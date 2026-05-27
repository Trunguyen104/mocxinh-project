"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { translations, type Lang, type TranslationKey } from "@/i18n/translations";

type Theme = "light" | "dark";

const THEME_KEY = "mx-theme";
const LANG_KEY = "mx-lang";

const themeListeners = new Set<() => void>();
const langListeners = new Set<() => void>();

function subscribeTheme(onStoreChange: () => void) {
  themeListeners.add(onStoreChange);
  return () => {
    themeListeners.delete(onStoreChange);
  };
}

function subscribeLang(onStoreChange: () => void) {
  langListeners.add(onStoreChange);
  return () => {
    langListeners.delete(onStoreChange);
  };
}

function emitTheme() {
  themeListeners.forEach((listener) => listener());
}

function emitLang() {
  langListeners.forEach((listener) => listener());
}

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") return "light";
  return (localStorage.getItem(THEME_KEY) as Theme) ?? "light";
}

function getLangSnapshot(): Lang {
  if (typeof window === "undefined") return "vi";
  return (localStorage.getItem(LANG_KEY) as Lang) ?? "vi";
}

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
  const theme = useSyncExternalStore<Theme>(subscribeTheme, getThemeSnapshot, () => "light");
  const lang = useSyncExternalStore<Lang>(subscribeLang, getLangSnapshot, () => "vi");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.lang = lang;
  }, [theme, lang]);

  const toggleTheme = useCallback(() => {
    const next: Theme = getThemeSnapshot() === "light" ? "dark" : "light";
    localStorage.setItem(THEME_KEY, next);
    emitTheme();
  }, []);

  const setLang = useCallback((l: Lang) => {
    localStorage.setItem(LANG_KEY, l);
    emitLang();
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[lang][key] ?? translations["vi"][key] ?? key;
    },
    [lang],
  );

  return (
    <AppContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark", lang, setLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
