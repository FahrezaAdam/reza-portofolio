"use client";

import { motion, useReducedMotion } from "motion/react";
import { IconAcademic } from "@/components/icons";
import { AnimatedCounter } from "@/components/motion-primitives";
import { coursework } from "@/lib/content";

export function EducationSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="site-section"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="editorial-container">
        <motion.div
          className="mb-10"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="projects-eyebrow mb-2">02 · Academics</p>
          <h2 className="section-title" id="education-title">
            Education &amp; Academics
          </h2>
        </motion.div>

        <motion.div
          className="education-panel"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="education-top">
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
                Universitas Jember
              </h3>
              <p className="mt-2 text-base leading-relaxed text-on-surface-variant">
                Undergraduate Student of Information Technology
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 md:items-end">
              <div className="gpa-mark">
                <IconAcademic className="h-4 w-4" />
                <span>
                  GPA: <AnimatedCounter value={3.96} decimals={2} /> / 4.00
                </span>
              </div>
              <div className="h-[2px] w-full overflow-hidden bg-outline-variant md:w-44">
                <motion.div
                  className="h-full bg-on-surface"
                  initial={reduceMotion ? { width: "99%" } : { width: "0%" }}
                  whileInView={{ width: "99%" }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-outline-variant pt-6">
            <h4 className="mb-4 font-label-md text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
              Relevant Coursework
            </h4>
            <div className="coursework-list">
              {coursework.map((course, index) => (
                <motion.span
                  key={course}
                  className="transition-colors hover:border-on-surface hover:text-on-surface"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    delay: index * 0.045,
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
