"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "motion/react";
import { useLenis } from "lenis/react";
import { CV_URL, navItems } from "@/lib/content";
import {
  BrandMonogram,
  IconClose,
  IconDownload,
  IconMenu,
} from "./icons";
import { ScrollProgressBar } from "./motion-primitives";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollFrameRef = useRef<number | null>(null);
  const lenis = useLenis();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id], footer[id]"),
    ).filter((section) => navItems.some(({ id }) => id === section.id));

    function updateActiveSection() {
      scrollFrameRef.current = null;

      const scrollY = lenis?.actualScroll ?? window.scrollY;
      const scrollBottom = scrollY + window.innerHeight;
      const documentBottom = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      );
      const contactSection = sections.find(
        (section) => section.id === "contact",
      );
      const contactRect = contactSection?.getBoundingClientRect();
      const contactInActivationZone =
        contactRect !== undefined &&
        contactRect.top <= window.innerHeight * 0.82 &&
        contactRect.bottom > 0;
      const nearPageBottom =
        documentBottom - scrollBottom <= Math.max(48, window.innerHeight * 0.04);

      if (contactInActivationZone || nearPageBottom) {
        setActive("contact");
      } else {
        const activationLine = window.innerHeight * 0.38;
        const current = sections
          .filter((section) => section.getBoundingClientRect().top <= activationLine)
          .at(-1);

        if (current) setActive(current.id);
        else setActive(navItems[0].id);
      }

      const hero = document.querySelector<HTMLElement>("#hero");
      setScrolled(hero ? hero.getBoundingClientRect().bottom <= 88 : scrollY > 24);
    }

    function scheduleUpdate() {
      if (scrollFrameRef.current !== null) return;
      scrollFrameRef.current = requestAnimationFrame(updateActiveSection);
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    const unsubscribe = lenis?.on("scroll", scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      unsubscribe?.();
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current);
        scrollFrameRef.current = null;
      }
    };
  }, [lenis]);

  const desktopLinks = navItems.filter((item) => item.id !== "contact");

  return (
    <>
      <ScrollProgressBar />
      <header
        id="hero-navbar"
        className="pointer-events-none fixed inset-x-0 top-0 z-50"
      >
        <motion.nav
          initial={reduceMotion ? false : { y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className={`editorial-nav pointer-events-auto mx-auto mt-4 flex h-14 w-[calc(100%-1.5rem)] max-w-5xl items-center justify-between rounded-full pl-3 pr-2.5 lg:mt-5 lg:h-[60px] lg:pl-4 lg:pr-3 ${
            scrolled ? "is-scrolled" : ""
          }`}
        >
          {/* Left: Monogram + Brand */}
          <a
            className="inline-flex items-center gap-2.5 text-on-surface transition-opacity hover:opacity-80"
            href="#"
            onClick={() => setActive(navItems[0].id)}
          >
            <BrandMonogram className="h-8 w-8" />
            <span className="font-label-md text-xs font-semibold uppercase tracking-[0.2em]">
              Fahreza
            </span>
          </a>

          {/* Center: Uppercase tracked editorial links */}
          <LayoutGroup id="navbar-editorial">
            <div className="relative hidden items-center gap-5 lg:flex">
              {desktopLinks.map(({ id, label }) => {
                const isActive = active === id;
                return (
                  <a
                    key={id}
                    data-nav={id}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative py-1.5 font-label-md text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 ${
                      isActive
                        ? "text-on-surface"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                    href={`#${id}`}
                    onClick={() => setActive(id)}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-editorial-underline"
                        aria-hidden
                        className="absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-on-surface"
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 400, damping: 32 }
                        }
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </LayoutGroup>

          {/* Right: Theme toggle + Outlined CTA */}
          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-on-surface/5 hover:text-on-surface" />

            <a
              className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant px-3.5 py-1.5 text-xs font-medium text-on-surface-variant transition-colors hover:border-on-surface hover:text-on-surface"
              href={CV_URL}
              download
            >
              <IconDownload className="h-3.5 w-3.5" />
              CV
            </a>

            <motion.a
              className="inline-flex items-center justify-center rounded-full border border-on-surface px-4 py-1.5 text-xs font-semibold text-on-surface transition-colors hover:bg-on-surface hover:text-background"
              href="#contact"
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              className="inline-flex items-center gap-1 rounded-full border border-on-surface px-3 py-1.5 text-[11px] font-semibold text-on-surface transition-colors hover:bg-on-surface hover:text-background"
              href={CV_URL}
              download
            >
              CV
            </a>
            <ThemeToggle className="flex h-9 w-9 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-on-surface/5" />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-on-surface/5 focus:outline-none"
              title="Toggle Menu"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <IconClose className="h-5 w-5" />
              ) : (
                <IconMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="editorial-nav pointer-events-auto mx-auto mt-2 w-[calc(100%-1.5rem)] max-w-5xl rounded-2xl p-2 lg:hidden"
            >
              <div className="flex flex-col">
                {navItems.map(({ id, label }) => (
                  <a
                    key={id}
                    aria-current={active === id ? "true" : undefined}
                    className={`rounded-xl px-4 py-3 font-label-md text-xs font-medium uppercase tracking-[0.16em] transition-colors ${
                      active === id
                        ? "bg-on-surface/8 text-on-surface"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                    href={`#${id}`}
                    onClick={() => {
                      setActive(id);
                      setMenuOpen(false);
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
