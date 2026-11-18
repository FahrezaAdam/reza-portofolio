"use client";

import { useEffect, useRef, useState } from "react";
import { CV_URL, navItems } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [active, setActive] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ready, setReady] = useState(false);
  const [pill, setPill] = useState<{ x: number; w: number } | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Enable the sliding transition only after the first paint.
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id], footer[id]"),
    ).filter((section) => navItems.some(({ id }) => id === section.id));

    function updateActiveNav() {
      const y = window.scrollY;
      let current = "profile";

      if (y + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        current = "contact";
      } else {
        for (const section of sections) {
          if (y >= section.offsetTop - 200) current = section.id;
        }
      }

      setActive(current);
      setScrolled(y > 8);
    }

    updateActiveNav();
    window.addEventListener("scroll", updateActiveNav, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveNav);
  }, []);

  // Keep the glass pill under the active link, re-measuring on resize/font load.
  useEffect(() => {
    let alive = true;

    function measure() {
      const list = listRef.current;
      const link = list?.querySelector<HTMLElement>(`[data-nav="${active}"]`);
      if (!alive) return;
      if (!list || !link || !link.offsetWidth) {
        setPill(null);
        return;
      }
      const a = link.getBoundingClientRect();
      const b = list.getBoundingClientRect();
      setPill({ x: a.left - b.left, w: a.width });
    }

    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => {
      alive = false;
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  const desktopLink = (id: string) =>
    `relative z-10 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
      active === id
        ? "text-primary"
        : "text-on-surface-variant hover:text-primary"
    }`;

  return (
    <header
      id="hero-navbar"
      className="anim-top pointer-events-none fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`glass-nav pointer-events-auto mx-auto mt-3 flex h-14 w-[calc(100%-1.5rem)] max-w-5xl items-center justify-between rounded-full pl-4 pr-2 lg:mt-4 lg:h-16 lg:pl-5 ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <a
          className="font-display text-lg font-bold text-primary transition-colors hover:text-primary-container lg:text-[22px]"
          href="#"
        >
          Fahreza Adam
        </a>

        <div ref={listRef} className="relative hidden items-center gap-1 lg:flex">
          <span
            aria-hidden
            className={`nav-indicator ${ready ? "is-ready" : ""}`}
            style={
              pill
                ? {
                    transform: `translate3d(${pill.x}px, -50%, 0)`,
                    width: pill.w,
                  }
                : { opacity: 0 }
            }
          />
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              data-nav={id}
              aria-current={active === id ? "true" : undefined}
              className={desktopLink(id)}
              href={`#${id}`}
            >
              {label}
            </a>
          ))}

          <ThemeToggle className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-on-surface/5 hover:text-primary" />

          <a
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-transform hover:scale-105 hover:bg-primary-container active:scale-95 dark:bg-primary-container dark:text-on-primary-container dark:hover:brightness-110"
            href={CV_URL}
            download
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-on-primary transition-transform active:scale-95"
            href={CV_URL}
            download
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            CV
          </a>
          <ThemeToggle className="flex h-9 w-9 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-on-surface/5 hover:text-primary" />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-on-surface/5 hover:text-primary focus:outline-none"
            title="Toggle Menu"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {menuOpen ? "close" : "more_vert"}
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${menuOpen ? "" : "hidden"} glass-nav nav-sheet pointer-events-auto mx-auto mt-2 w-[calc(100%-1.5rem)] max-w-5xl rounded-3xl p-2 lg:hidden`}
      >
        <div className="flex flex-col">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              onClick={() => setMenuOpen(false)}
              className="rounded-full px-4 py-3 font-medium text-on-surface transition-colors hover:bg-on-surface/5 hover:text-primary"
              href={`#${id}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
