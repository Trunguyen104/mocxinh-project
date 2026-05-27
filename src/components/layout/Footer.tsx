"use client";

import { useApp } from "@/contexts/AppContext";
import { BRAND, CONTACT } from "@/lib/constants";

const SOCIAL = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Zalo",
    href: "#",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
] as const;

export function Footer() {
  const { t } = useApp();

  const navLinks = [
    { href: "#story", label: t("nav_story") },
    { href: "#products", label: t("nav_products") },
    { href: "#values", label: t("nav_values") },
    { href: "#contact", label: t("nav_contact") },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-olive/10 bg-kraft-dark text-ivory/90 dark:border-kraft/6">
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-olive/5 blur-[60px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-kraft/10 blur-[40px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-olive/20 text-base">
                🌿
              </span>
              <p className="font-display text-2xl text-ivory">{BRAND.name}</p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
              {t("footer_tagline")}
            </p>

            <div className="mt-6 flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  id={`social-${s.label.toLowerCase()}`}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory/50 transition-all duration-300 hover:border-olive/50 hover:bg-olive/15 hover:text-olive-light"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-olive-light">
              {t("footer_contact_title")}
            </p>
            <address className="space-y-3 not-italic text-sm text-ivory/65">
              <p className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-none text-olive/50"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5c0-2.5-2-4.5-4.5-4.5Z" />
                  <circle cx="8" cy="6" r="1.5" />
                </svg>
                {CONTACT.address}
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 transition-colors hover:text-ivory"
              >
                <svg
                  className="h-4 w-4 flex-none text-olive/50"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" />
                  <path d="M1.5 5.5l6.5 4.5 6.5-4.5" />
                </svg>
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2 transition-colors hover:text-ivory"
              >
                <svg
                  className="h-4 w-4 flex-none text-olive/50"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06L5 9.5s1 3.5 1.5 4 4.5 1.5 4.5 1.5l1.17-1.34a1 1 0 0 1 1.06-.54l4.435.74A1 1 0 0 1 18.5 14v2a1 1 0 0 1-1 1C8.5 17 2 10.5 2 3z" />
                </svg>
                {CONTACT.phone}
              </a>
            </address>
          </div>

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-olive-light">
              {t("footer_nav_title")}
            </p>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-ivory/65 transition-colors hover:text-ivory"
                  >
                    <span className="h-px w-0 bg-olive-light transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory/35">
            © {new Date().getFullYear()} {BRAND.name}. {t("footer_copyright")}
          </p>
          <p className="text-xs text-ivory/25">{t("footer_made")}</p>
        </div>
      </div>
    </footer>
  );
}
