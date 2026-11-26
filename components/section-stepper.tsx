"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { IconArrowDown, IconArrowUp } from "@/components/icons";

const sectionIds = [
  "hero",
  "profile",
  "education",
  "skills",
  "projects",
  "experience",
  "contact",
];

export function SectionStepper() {
  const lenis = useLenis();
  const reduceMotion = useReducedMotion();

  function stepSection(direction: -1 | 1) {
    const scrollY = lenis?.actualScroll ?? window.scrollY;
    const midViewport = scrollY + window.innerHeight * 0.4;

    const positions = sectionIds
      .map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        return { id, top: el.offsetTop };
      })
      .filter((item): item is { id: string; top: number } => item !== null);

    if (positions.length === 0) return;

    let currentIndex = 0;
    for (let i = 0; i < positions.length; i++) {
      if (positions[i].top <= midViewport) {
        currentIndex = i;
      }
    }

    const targetIndex = Math.max(
      0,
      Math.min(positions.length - 1, currentIndex + direction),
    );
    const targetId = positions[targetIndex].id;

    if (targetId === "hero") {
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;
    if (lenis) lenis.scrollTo(targetEl);
    else targetEl.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      aria-label="Section navigation"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 md:right-6 md:flex"
    >
      <motion.button
        type="button"
        aria-label="Previous section"
        onClick={() => stepSection(-1)}
        whileHover={reduceMotion ? undefined : { scale: 1.08 }}
        whileTap={reduceMotion ? undefined : { scale: 0.92 }}
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-outline-variant bg-surface/85 text-on-surface-variant backdrop-blur-sm transition-colors hover:border-on-surface hover:text-on-surface"
      >
        <IconArrowUp className="h-4 w-4" />
      </motion.button>
      <motion.button
        type="button"
        aria-label="Next section"
        onClick={() => stepSection(1)}
        whileHover={reduceMotion ? undefined : { scale: 1.08 }}
        whileTap={reduceMotion ? undefined : { scale: 0.92 }}
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-outline-variant bg-surface/85 text-on-surface-variant backdrop-blur-sm transition-colors hover:border-on-surface hover:text-on-surface"
      >
        <IconArrowDown className="h-4 w-4" />
      </motion.button>
    </div>
  );
}
