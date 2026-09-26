"use client";

import { useEffect, useRef, useState } from "react";
import { Mascot } from "page-mascot";
import { useApp } from "@/contexts/AppContext";
import { WORKSHOP_REGISTRATION_URL } from "@/lib/constants";

export function WorkshopMascotGuide() {
  const {
    t,
    isTourActive,
    tourStep,
    isTourMinimized,
    setTourStep,
    toggleTourMinimized,
    closeTour,
    startWorkshopTour,
  } = useApp();

  const [isInWorkshopViewport, setIsInWorkshopViewport] = useState(false);
  const userManuallyNavigatedRef = useRef(false);

  // Monitor scroll to auto-sync tour step with user reading position
  useEffect(() => {
    const handleScroll = () => {
      const workshopEl = document.getElementById("workshop");
      if (!workshopEl) return;

      const rect = workshopEl.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > 150;
      setIsInWorkshopViewport(inView);

      // Only auto-update step if user is scrolling naturally and tour is active
      if (!isTourActive || userManuallyNavigatedRef.current) return;

      const activitiesEl = document.getElementById("workshop-activities");
      const timelineEl = document.getElementById("workshop-timeline");
      const ctaEl = document.getElementById("workshop-cta");

      if (ctaEl && ctaEl.getBoundingClientRect().top < window.innerHeight * 0.65) {
        setTourStep(3);
      } else if (timelineEl && timelineEl.getBoundingClientRect().top < window.innerHeight * 0.65) {
        setTourStep(2);
      } else if (
        activitiesEl &&
        activitiesEl.getBoundingClientRect().top < window.innerHeight * 0.65
      ) {
        setTourStep(1);
      } else if (rect.top < window.innerHeight * 0.65) {
        setTourStep(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTourActive, setTourStep]);

  // Highlight the register button when reaching step 3
  useEffect(() => {
    if (!isTourActive || tourStep !== 3) return;

    const btn = document.getElementById("workshop-register-btn");
    if (!btn) return;

    btn.classList.add("ring-4", "ring-moc-green-light", "ring-offset-2", "scale-105");
    const timer = setTimeout(() => {
      btn.classList.remove("scale-105");
    }, 800);

    return () => {
      clearTimeout(timer);
      btn.classList.remove("ring-4", "ring-moc-green-light", "ring-offset-2", "scale-105");
    };
  }, [isTourActive, tourStep]);

  const handleNextStep = (nextStep: number, targetId: string) => {
    userManuallyNavigatedRef.current = true;
    setTourStep(nextStep);

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    setTimeout(() => {
      userManuallyNavigatedRef.current = false;
    }, 1000);
  };

  const handleRegisterNow = () => {
    window.open(WORKSHOP_REGISTRATION_URL, "_blank", "noopener,noreferrer");
  };

  // If tour is not active and user isn't in workshop, show nothing
  if (!isTourActive && !isInWorkshopViewport) {
    return null;
  }

  // If tour is not yet explicitly active but user scrolled to workshop, show a cute mini prompt
  if (!isTourActive && isInWorkshopViewport) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-fade-in">
        <button
          onClick={() => startWorkshopTour(0)}
          className="group flex items-center gap-2.5 rounded-full border border-kraft/20 bg-ivory/95 px-4 py-2.5 text-xs font-medium text-kraft-dark shadow-paper backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-moc-green hover:shadow-card dark:border-kraft/15 dark:text-kraft-dark"
          title={t("tour_mascot_hint")}
        >
          <span className="flex h-2 w-2 rounded-full bg-moc-green animate-ping" />
          <span>{t("tour_expand")}</span>
          <span className="text-base">🌿</span>
        </button>
        <div
          onClick={() => startWorkshopTour(0)}
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
        >
          <Mascot
            directions="/mascots/mocxinh-directions.webp"
            reactions="/mascots/mocxinh-reactions.webp"
            size={76}
            label="Linh vật Mộc Xinh"
          />
        </div>
      </div>
    );
  }

  // Active tour: Minimized state
  if (isTourMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-fade-in">
        <button
          onClick={toggleTourMinimized}
          className="group flex items-center gap-2 rounded-full border border-moc-green/40 bg-moc-green/15 px-4 py-2 text-xs font-semibold text-moc-green-dark shadow-paper backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-moc-green hover:text-white dark:text-moc-green-light dark:hover:text-white"
        >
          <span>{t("tour_expand")}</span>
          <span className="font-mono">({tourStep + 1}/4)</span>
        </button>
        <div
          onClick={toggleTourMinimized}
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
        >
          <Mascot
            directions="/mascots/mocxinh-directions.webp"
            reactions="/mascots/mocxinh-reactions.webp"
            size={84}
            label="Linh vật Mộc Xinh"
          />
        </div>
      </div>
    );
  }

  // Active tour: Full speech bubble & Mascot companion
  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-2.5 sm:bottom-6 sm:right-6 sm:max-w-md animate-fade-in">
      {/* Speech Bubble */}
      <div className="relative w-full rounded-3xl border-2 border-moc-green/30 bg-ivory/95 p-5 shadow-2xl backdrop-blur-xl dark:border-moc-green/20 sm:p-6">
        {/* Top Header */}
        <div className="mb-3 flex items-center justify-between border-b border-kraft/15 pb-2.5 dark:border-kraft/10">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-moc-green/15 text-xs">
              🌿
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-moc-green-dark dark:text-moc-green-light">
              {t("tour_badge")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Step progress dots */}
            <div className="flex items-center gap-1.5 px-2">
              {[0, 1, 2, 3].map((stepIdx) => (
                <button
                  key={stepIdx}
                  onClick={() => {
                    const ids = [
                      "workshop",
                      "workshop-activities",
                      "workshop-timeline",
                      "workshop-cta",
                    ];
                    handleNextStep(stepIdx, ids[stepIdx]);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    tourStep === stepIdx
                      ? "w-5 bg-moc-green"
                      : "w-2 bg-kraft/30 hover:bg-kraft/50 dark:bg-kraft/20"
                  }`}
                  aria-label={`${t("tour_step_counter")} ${stepIdx + 1}`}
                />
              ))}
            </div>

            {/* Minimize button */}
            <button
              onClick={toggleTourMinimized}
              className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-olive/60 transition-colors hover:bg-olive/10 hover:text-kraft-dark dark:text-olive/50 dark:hover:text-white"
              title={t("tour_minimize")}
              aria-label={t("tour_minimize")}
            >
              _
            </button>

            {/* Close button */}
            <button
              onClick={closeTour}
              className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-olive/60 transition-colors hover:bg-red-500/10 hover:text-red-500 dark:text-olive/50"
              title={t("tour_close")}
              aria-label={t("tour_close")}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content based on step */}
        <div className="space-y-2">
          {tourStep === 0 && (
            <>
              <h4 className="font-display text-base font-semibold text-kraft-dark dark:text-kraft-dark">
                {t("tour_step1_title")}
              </h4>
              <p className="text-xs leading-relaxed text-olive-dark/80 dark:text-olive-dark/75">
                {t("tour_step1_desc")}
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-medium text-moc-green-dark dark:text-moc-green-light">
                  {t("tour_step_counter")} 1/4
                </span>
                <button
                  onClick={() => handleNextStep(1, "workshop-activities")}
                  className="inline-flex items-center gap-1.5 rounded-full bg-moc-green px-4 py-2 text-xs font-semibold text-white shadow-soft transition-all duration-300 hover:bg-moc-green-dark hover:shadow-card glow-green"
                >
                  <span>{t("tour_step1_btn")}</span>
                </button>
              </div>
            </>
          )}

          {tourStep === 1 && (
            <>
              <h4 className="font-display text-base font-semibold text-kraft-dark dark:text-kraft-dark">
                {t("tour_step2_title")}
              </h4>
              <p className="text-xs leading-relaxed text-olive-dark/80 dark:text-olive-dark/75">
                {t("tour_step2_desc")}
              </p>
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => handleNextStep(0, "workshop")}
                  className="text-xs text-olive/70 hover:text-kraft-dark"
                >
                  ← Trước
                </button>
                <button
                  onClick={() => handleNextStep(2, "workshop-timeline")}
                  className="inline-flex items-center gap-1.5 rounded-full bg-moc-green px-4 py-2 text-xs font-semibold text-white shadow-soft transition-all duration-300 hover:bg-moc-green-dark hover:shadow-card glow-green"
                >
                  <span>{t("tour_step2_btn")}</span>
                </button>
              </div>
            </>
          )}

          {tourStep === 2 && (
            <>
              <h4 className="font-display text-base font-semibold text-kraft-dark dark:text-kraft-dark">
                {t("tour_step3_title")}
              </h4>
              <p className="text-xs leading-relaxed text-olive-dark/80 dark:text-olive-dark/75">
                {t("tour_step3_desc")}
              </p>
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => handleNextStep(1, "workshop-activities")}
                  className="text-xs text-olive/70 hover:text-kraft-dark"
                >
                  ← Trước
                </button>
                <button
                  onClick={() => handleNextStep(3, "workshop-cta")}
                  className="inline-flex items-center gap-1.5 rounded-full bg-moc-green px-4 py-2 text-xs font-semibold text-white shadow-soft transition-all duration-300 hover:bg-moc-green-dark hover:shadow-card glow-green"
                >
                  <span>{t("tour_step3_btn")}</span>
                </button>
              </div>
            </>
          )}

          {tourStep === 3 && (
            <>
              <h4 className="font-display text-base font-semibold text-kraft-dark dark:text-kraft-dark flex items-center gap-2">
                <span>{t("tour_step4_title")}</span>
                <span className="text-base">✨</span>
              </h4>
              <p className="text-xs leading-relaxed text-olive-dark/80 dark:text-olive-dark/75">
                {t("tour_step4_desc")}
              </p>
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => handleNextStep(2, "workshop-timeline")}
                  className="text-xs text-olive/70 hover:text-kraft-dark"
                >
                  ← Trước
                </button>
                <button
                  onClick={handleRegisterNow}
                  className="inline-flex items-center gap-1.5 rounded-full bg-moc-green px-5 py-2.5 text-xs font-bold text-white shadow-card transition-all duration-300 hover:bg-moc-green-dark hover:scale-105 glow-green animate-pulse"
                >
                  <span>{t("tour_step4_btn")}</span>
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Pointer Triangle toward Mascot */}
        <div className="absolute -bottom-2.5 right-12 h-5 w-5 rotate-45 border-b-2 border-r-2 border-moc-green/30 bg-ivory dark:border-moc-green/20" />
      </div>

      {/* Floating Mascot Companion */}
      <div className="flex items-center gap-2 pr-6">
        <div className="rounded-full bg-ivory/90 p-1 shadow-card ring-2 ring-moc-green/40 backdrop-blur-sm transition-transform duration-300 hover:scale-105 dark:ring-moc-green/30">
          <Mascot
            directions="/mascots/mocxinh-directions.webp"
            reactions="/mascots/mocxinh-reactions.webp"
            size={90}
            label="Linh vật Mộc Xinh"
          />
        </div>
      </div>
    </div>
  );
}
