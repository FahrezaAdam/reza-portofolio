"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import {
  IconArrowUpLine,
  IconCheck,
  IconCode,
  IconCopy,
  IconExternal,
  IconMail,
} from "@/components/icons";
import { Magnetic } from "@/components/motion-primitives";

const EMAIL = "fahrezaadam1784@gmail.com";

export function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const lenis = useLenis();
  const reduceMotion = useReducedMotion();

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API may be blocked in some contexts; ignore gracefully.
    }
  }

  function handleScrollTop() {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer className="contact-footer" id="contact">
      <motion.div
        className="contact-inner editorial-container"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="projects-eyebrow mb-2">06 · Contact</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 text-sm text-on-surface-variant">
            Fahreza Adam Nuardiansyah. Built with precision.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <nav aria-label="Contact links" className="contact-links">
            <Magnetic strength={0.25}>
              <a href={`mailto:${EMAIL}`}>
                <IconMail className="h-4 w-4" />
                Email
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="https://www.linkedin.com/in/fahreza-adam-nuardiansyah/"
                target="_blank"
                rel="noreferrer"
              >
                <IconExternal className="h-4 w-4" />
                LinkedIn
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="https://github.com/FahrezaAdam"
                target="_blank"
                rel="noreferrer"
              >
                <IconCode className="h-4 w-4" />
                GitHub
              </a>
            </Magnetic>
          </nav>

          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              onClick={handleCopyEmail}
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-outline-variant bg-surface px-3.5 py-2 text-xs font-semibold text-on-surface transition-colors hover:border-primary hover:text-primary"
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.16 }}
                    className="inline-flex items-center gap-1.5 text-primary"
                  >
                    <IconCheck className="h-3.5 w-3.5" />
                    Copied!
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.16 }}
                    className="inline-flex items-center gap-1.5"
                  >
                    <IconCopy className="h-3.5 w-3.5" />
                    Copy Email
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <Magnetic strength={0.25}>
              <motion.button
                type="button"
                aria-label="Back to top"
                title="Back to top"
                onClick={handleScrollTop}
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.06 }}
                whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-outline-variant bg-surface text-on-surface transition-colors hover:border-primary hover:text-primary"
              >
                <IconArrowUpLine className="h-4 w-4" />
              </motion.button>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
