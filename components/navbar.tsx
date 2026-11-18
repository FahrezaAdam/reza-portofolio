"use client";

import { useEffect, useState } from "react";
import { CV_URL, navItems } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [active, setActive] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id], footer[id]"),
    );

    function updateActiveNav() {
      let current = "";
      const y = window.scrollY;

      if (y + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        current = "contact";
      } else {
        for (const section of sections) {
          if (y >= section.offsetTop - 200) current = section.id;
        }
      }

      setActive(current);
    }

    updateActiveNav();
    window.addEventListener("scroll", updateActiveNav, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveNav);
  }, []);

  const desktopLink = (id: string) =>
    active === id
      ? "text-primary font-bold border-b-2 border-primary py-1 transition-all duration-300 ease-in-out"
      : "text-on-surface-variant hover:text-primary transition-colors py-1";

  return (
    <header
      id="hero-navbar"
      className="anim-top bg-surface/80 backdrop-blur-md shadow-sm fixed top-0 w-full z-50 transition-shadow duration-300 ease-in-out"
    >
      <nav className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto w-full z-50">
        <a
          className="font-display text-headline-md font-bold text-primary hover:text-primary-container transition-colors"
          href="#"
        >
          Fahreza Adam
        </a>

        <div className="hidden md:flex items-center space-x-md">
          {navItems.map(({ id, label }) => (
            <a key={id} className={desktopLink(id)} href={`#${id}`}>
              {label}
            </a>
          ))}

          <ThemeToggle className="text-on-surface-variant hover:text-primary transition-colors py-1 ml-2 flex items-center" />

          <a
            className="bg-primary hover:bg-primary-container dark:bg-primary-container dark:hover:brightness-110 text-on-primary dark:text-on-primary-container font-label-md px-4 py-2 rounded-lg transition-transform hover:scale-105 active:scale-95 ml-4 inline-flex items-center gap-2"
            href={CV_URL}
            download
          >
            <span className="material-symbols-outlined text-[18px]">download</span>{" "}
            Download CV
          </a>
        </div>

        <div className="flex items-center md:hidden gap-1">
          <a
            className="bg-primary text-on-primary font-label-md px-3 py-1.5 rounded-lg active:scale-95 transition-transform inline-flex items-center gap-1 text-xs"
            href={CV_URL}
            download
          >
            <span className="material-symbols-outlined text-[16px]">download</span>{" "}
            CV
          </a>
          <ThemeToggle className="text-on-surface hover:text-primary p-2 flex items-center" />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="text-on-surface hover:text-primary p-2 flex items-center justify-center focus:outline-none"
            title="Toggle Menu"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-[24px]">
              {menuOpen ? "close" : "more_vert"}
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${menuOpen ? "" : "hidden"} md:hidden bg-surface/95 backdrop-blur-lg border-t border-outline-variant/20 px-gutter py-4 shadow-lg transition-all duration-300`}
      >
        <div className="flex flex-col space-y-3">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              onClick={() => setMenuOpen(false)}
              className="text-on-surface hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-surface-container-low dark:hover:bg-surface-container font-medium"
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
