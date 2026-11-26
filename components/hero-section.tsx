"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { AnimatedRoleText } from "@/components/motion-primitives";

const roles = [
  "Full-Stack Developer",
  "Web & Mobile Builder",
  "IoT & Cloud Integrator",
];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={heroRef}
      className="hero-editorial"
      id="hero"
      aria-labelledby="hero-title"
    >
      {/* Giant outlined kinetic typography behind the portrait */}
      <div aria-hidden className="hero-outline-band">
        <motion.div
          className="flex w-max items-center"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="flex w-max shrink-0 items-center"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{
              duration: 32,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <p className="hero-outline-text shrink-0 px-8">
              FAHREZA ADAM · FAHREZA ADAM ·
            </p>
            <p className="hero-outline-text shrink-0 px-8" aria-hidden="true">
              FAHREZA ADAM · FAHREZA ADAM ·
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Centered studio portrait overlapping the giant outline text */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-end px-6 pt-16 md:px-10">
        <motion.figure
          className="relative mx-auto w-[min(82vw,390px)] md:w-[min(42vw,440px)]"
          style={reduceMotion ? undefined : { y: portraitY }}
          initial={
            reduceMotion
              ? false
              : { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.4 }
          }
          animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-[3/3.75] w-full overflow-hidden rounded-t-[14rem] border border-b-0 border-outline-variant/60 bg-[#272729] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/profile.webp?v=2"
              alt="Portrait of Fahreza Adam Nuardiansyah"
              fill
              priority
              className="object-cover object-[center_18%]"
              sizes="(max-width: 767px) 82vw, 440px"
            />
          </div>
        </motion.figure>

        {/* Bottom editorial metadata bar (left: role & links, right: vertical scroll down) */}
        <motion.div
          className="pointer-events-none relative z-20 flex items-end justify-between pb-8 pt-6 md:absolute md:inset-x-10 md:bottom-8 md:pb-0 md:pt-0"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pointer-events-auto max-w-[340px]">
            <h1 id="hero-title" className="sr-only">
              Fahreza Adam Nuardiansyah — Full-Stack Developer
            </h1>
            <p className="font-label-md text-[10px] font-semibold uppercase tracking-[0.22em] text-on-surface-variant">
              Universitas Jember · IT
            </p>
            <AnimatedRoleText
              roles={roles}
              className="mt-1 font-display text-2xl font-bold tracking-tight text-on-surface md:text-3xl"
            />
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-medium text-on-surface-variant">
              <a
                href="#projects"
                className="inline-flex items-center gap-1 whitespace-nowrap border-b border-on-surface pb-0.5 text-on-surface transition-opacity hover:opacity-70"
              >
                Selected Work
                <span aria-hidden className="text-[13px]">
                  ↗
                </span>
              </a>
              <a
                href="https://github.com/FahrezaAdam"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-on-surface"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/fahreza-adam-nuardiansyah/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-on-surface"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <a
            href="#profile"
            aria-label="Scroll down to Profile"
            className="pointer-events-auto hidden flex-col items-center gap-3 text-on-surface-variant transition-colors hover:text-on-surface md:flex"
          >
            <span className="hero-vertical-scroll font-label-md text-[10px] font-medium uppercase">
              Scroll Down
            </span>
            <span className="relative h-10 w-px overflow-hidden bg-outline-variant">
              {!reduceMotion && (
                <motion.span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1/2 bg-on-surface"
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
