"use client";

import { motion, useReducedMotion } from "motion/react";
import { IconMoon, IconSun } from "@/components/icons";

export function ThemeToggle({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  function toggleTheme() {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("color-theme", next);
  }

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className={className}
      title="Toggle Theme"
      aria-label="Toggle theme"
      whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: 12 }}
      whileTap={reduceMotion ? undefined : { scale: 0.9, rotate: -18 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <IconMoon className="theme-icon-moon h-[18px] w-[18px]" />
      <IconSun className="theme-icon-sun h-[18px] w-[18px]" />
    </motion.button>
  );
}
