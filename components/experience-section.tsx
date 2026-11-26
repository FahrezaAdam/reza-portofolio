"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { experiences } from "@/lib/content";

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 78%", "end 68%"],
  });
  const lineScaleY = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section
      className="experience-section site-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="experience-layout editorial-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="projects-eyebrow mb-2">05 · Journey</p>
          <h2 className="section-title" id="experience-title">
            Experience
          </h2>
        </motion.div>

        <div className="experience-timeline relative" ref={timelineRef}>
          {!reduceMotion && (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute top-3 bottom-3 left-[5.5px] w-[1.5px] origin-top bg-on-surface"
              style={{ scaleY: lineScaleY }}
            />
          )}

          {experiences.map((experience, index) => (
            <motion.article
              className="experience-entry"
              key={experience.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                delay: index * 0.08,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span aria-hidden className="experience-marker-track">
                <span className="experience-marker" />
              </span>
              <div className="experience-copy border-b border-outline-variant/60 pb-8 last:border-b-0">
                <span className="font-code-sm text-xs text-on-surface-variant">
                  0{index + 1}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold leading-snug tracking-tight text-on-surface md:text-2xl">
                  {experience.title}
                </h3>
                <p className="mb-3 mt-1.5 font-label-md text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
                  {experience.org}
                </p>
                <p>{experience.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
