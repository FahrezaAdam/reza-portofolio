"use client";

import { useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "motion/react";
import { TechIcon } from "@/components/tech-icon";
import { skillGroups } from "@/lib/content";

const categories = ["All", ...skillGroups.map((group) => group.title)];

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const reduceMotion = useReducedMotion();

  const visibleGroups =
    selectedCategory === "All"
      ? skillGroups
      : skillGroups.filter((group) => group.title === selectedCategory);

  return (
    <section
      className="skills-section site-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="editorial-container">
        <motion.div
          className="mb-10 flex flex-col justify-between gap-6 border-b border-outline-variant pb-8 md:flex-row md:items-end"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="projects-eyebrow mb-2">03 · Capabilities</p>
            <h2 className="section-title" id="skills-title">
              Tech Stack
            </h2>
          </div>

          <LayoutGroup id="skills-filter">
            <div
              role="tablist"
              aria-label="Filter tech stack by category"
              className="flex flex-wrap gap-4"
            >
              {categories.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    role="tab"
                    type="button"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategory(category)}
                    className={`relative cursor-pointer pb-1.5 font-label-md text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
                      isSelected
                        ? "text-on-surface"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {category}
                    {isSelected && (
                      <motion.span
                        layoutId="skills-filter-underline"
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-[1.5px] bg-on-surface"
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 380, damping: 30 }
                        }
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </motion.div>

        <div className="skills-inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {visibleGroups.map((group) => (
                <div className="skill-category" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul className="tech-grid">
                    {group.items.map(({ name, icon }, index) => (
                      <motion.li
                        className="tech-tile"
                        key={name}
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                          delay: Math.min(index * 0.035, 0.22),
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        whileHover={reduceMotion ? undefined : { y: -3 }}
                      >
                        <TechIcon icon={icon} className="tech-icon" />
                        <span className="px-1 text-[0.82rem] font-medium leading-tight">
                          {name}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
