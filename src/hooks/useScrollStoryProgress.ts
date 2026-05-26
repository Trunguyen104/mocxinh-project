"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollStoryProgressOptions {
  /** Chiều cao vùng scroll tính bằng vh */
  scrollHeightVh?: number;
  scrub?: number;
}

/**
 * Gắn ScrollTrigger vào container cao, pin canvas/sticky layer,
 * trả về progress 0–1 để điều khiển timeline 3D.
 */
export function useScrollStoryProgress(
  triggerRef: React.RefObject<HTMLElement | null>,
  pinRef: React.RefObject<HTMLElement | null>,
  options: UseScrollStoryProgressOptions = {},
) {
  const { scrollHeightVh = 500, scrub = 0.8 } = options;
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    const trigger = triggerRef.current;
    const pin = pinRef.current;
    if (!trigger || !pin) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger,
        start: "top top",
        end: `+=${scrollHeightVh}%`,
        pin,
        scrub,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          progressRef.current = self.progress;
          setProgress(self.progress);
        },
      });
    }, trigger);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [triggerRef, pinRef, scrollHeightVh, scrub]);

  return { progress, progressRef };
}
