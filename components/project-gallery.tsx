"use client";

import Image from "next/image";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowRightLine,
  IconExpand,
} from "@/components/icons";

type Project = {
  id: string;
  title: string;
  image: string;
  alt: string;
  tags: string[];
  description: string;
  sizes: string;
  contain?: boolean;
};

const projects: Project[] = [
  {
    id: "earthcare",
    title: "EarthCare",
    image: "/images/EarthCare.webp",
    alt: "EarthCare App",
    tags: ["Mobile", "Cloud"],
    description:
      "Mobile application for environmental damage reporting. Architected the database, developed the backend utilizing modern cloud services, and implemented a robust real-time notification system.",
    sizes: "(max-width: 767px) 86vw, (max-width: 1240px) 50vw, 620px",
  },
  {
    id: "aquasync",
    title: "AquaSync",
    image: "/images/AquaSync.webp",
    alt: "AquaSync Dashboard",
    tags: ["IoT", "Web"],
    description:
      "IoT & Web-based automated catfish pond monitoring system. Developed real-time data communications and water quality monitoring algorithms.",
    sizes: "(max-width: 767px) 86vw, (max-width: 1240px) 50vw, 620px",
  },
  {
    id: "berbagi",
    title: "Berbagi",
    image: "/images/berbagi.webp",
    alt: "Berbagi Platform UI",
    tags: ["Web", "Laravel Blade"],
    description:
      "A comprehensive web system for the donation and distribution of used goods. Served as Frontend Developer utilizing Laravel Blade to create an accessible, responsive, and intuitive user interface for donors and administrators.",
    sizes: "(max-width: 767px) 86vw, (max-width: 1240px) 50vw, 620px",
  },
  {
    id: "sipakan",
    title: "SiPakan",
    image: "/images/sipakan.webp",
    alt: "SiPakan Mobile App",
    tags: ["Mobile", "IoT"],
    description:
      "Optimalisasi Sistem Distribusi Pakan dan Monitoring Kesehatan Ternak Ayam Berbasis Digital. Developed a comprehensive mobile dashboard to streamline automated feed distribution and provide real-time digital monitoring for poultry livestock health, including temperature and humidity tracking.",
    sizes: "(max-width: 767px) 86vw, (max-width: 1240px) 50vw, 620px",
  },
];

const layoutId = (project: Project) => `project-image-${project.id}`;

export function ProjectGallery() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const lastWheelTimeRef = useRef(0);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    moved: boolean;
  } | null>(null);
  const suppressClickRef = useRef(false);
  const lenis = useLenis();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!openProject) return;

    lenis?.stop();
    const closeFrame = requestAnimationFrame(() =>
      closeButtonRef.current?.focus(),
    );

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenProject(null);
      } else if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(closeFrame);
      requestAnimationFrame(() => triggerRef.current?.focus());
    };
  }, [lenis, openProject]);

  useEffect(() => {
    function handleHorizontalWheel(event: WheelEvent) {
      if (
        event.deltaX === 0 ||
        Math.abs(event.deltaX) <= Math.abs(event.deltaY)
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;
      const gallery = target.closest<HTMLElement>(".project-gallery");
      if (!gallery) return;

      event.preventDefault();
      event.stopPropagation();
      const now = performance.now();
      if (now - lastWheelTimeRef.current < 420) return;
      lastWheelTimeRef.current = now;
      const direction = event.deltaX > 0 ? 1 : -1;
      setActiveIndex((current) => wrapProjectIndex(current + direction));
    }

    window.addEventListener("wheel", handleHorizontalWheel, {
      capture: true,
      passive: false,
    });
    return () =>
      window.removeEventListener("wheel", handleHorizontalWheel, true);
  }, []);

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      const drag = dragRef.current;
      if (!drag || event.pointerId !== drag.pointerId) return;

      const distance = event.clientX - drag.startX;
      if (
        !drag.moved &&
        Math.abs(distance) > 8 &&
        Math.abs(distance) > Math.abs(event.clientY - drag.startY)
      ) {
        drag.moved = true;
        galleryRef.current?.classList.add("is-dragging");
      }

      if (drag.moved) event.preventDefault();
    }

    function handlePointerEnd(event: PointerEvent) {
      const drag = dragRef.current;
      if (!drag || event.pointerId !== drag.pointerId) return;

      if (drag.moved) {
        galleryRef.current?.classList.remove("is-dragging");
        suppressClickRef.current = true;
        setActiveIndex((current) =>
          wrapProjectIndex(current + (event.clientX < drag.startX ? 1 : -1)),
        );
        window.setTimeout(() => {
          suppressClickRef.current = false;
        }, 0);
      }

      dragRef.current = null;
    }

    window.addEventListener("pointermove", handlePointerMove, {
      passive: false,
    });
    window.addEventListener("pointerup", handlePointerEnd);
    window.addEventListener("pointercancel", handlePointerEnd);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerEnd);
      window.removeEventListener("pointercancel", handlePointerEnd);
    };
  }, []);

  function selectProject(index: number) {
    setActiveIndex(index);
  }

  function wrapProjectIndex(index: number) {
    return (index + projects.length) % projects.length;
  }

  const activeProject = projects[activeIndex];
  const layoutTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 260, damping: 30 };

  return (
    <LayoutGroup id="portfolio-projects">
      <motion.div
        className="projects-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="projects-eyebrow">04 · Selected Work</p>
          <h2 className="section-title" id="projects-title">
            Work Gallery
          </h2>
          <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
            A collection of systems, digital projects, and technical work
            I&apos;ve built.
          </p>
        </div>
        <motion.button
          aria-label="Next project"
          className="projects-more-button"
          onClick={() => selectProject(wrapProjectIndex(activeIndex + 1))}
          type="button"
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          whileTap={reduceMotion ? undefined : { scale: 0.96 }}
        >
          View More Projects
          <IconArrowRightLine className="h-4 w-4" />
        </motion.button>
      </motion.div>

      <div
        aria-label="Project coverflow carousel. Choose a project or use the arrow keys to browse."
        className="project-gallery"
        ref={galleryRef}
        role="region"
        tabIndex={0}
        onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0) return;
          dragRef.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            moved: false,
          };
        }}
        onClickCapture={(event) => {
          if (!suppressClickRef.current) return;
          event.preventDefault();
          event.stopPropagation();
          suppressClickRef.current = false;
        }}
        onKeyDown={(event) => {
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          selectProject(
            wrapProjectIndex(
              activeIndex + (event.key === "ArrowRight" ? 1 : -1),
            ),
          );
        }}
      >
        {projects.map((project, index) => {
          const relativePosition =
            (index - activeIndex + projects.length) % projects.length;
          const offset =
            relativePosition <= projects.length / 2
              ? relativePosition
              : relativePosition - projects.length;
          const distance = Math.abs(offset);
          const isActive = offset === 0;
          const isRear = distance > 1;

          return (
            <motion.article
              animate={
                reduceMotion
                  ? {
                      opacity: isActive ? 1 : isRear ? 0.3 : 0.64,
                      x: isRear ? "0%" : `${offset * 72}%`,
                      rotateY: 0,
                      scale: isActive ? 1 : isRear ? 0.58 : 0.82,
                      z: isActive ? 50 : isRear ? -180 : -70,
                    }
                  : {
                      opacity: isActive ? 1 : isRear ? 0.34 : 0.74,
                      x: isRear ? "0%" : `${offset * 72}%`,
                      rotateY: isRear ? 0 : offset * -22,
                      scale: isActive ? 1 : isRear ? 0.58 : 0.82,
                      z: isActive ? 50 : isRear ? -180 : -70,
                    }
              }
              aria-hidden={isRear ? true : undefined}
              aria-current={isActive ? "true" : undefined}
              className={`project-card group${isActive ? " is-active" : ""}${isRear ? " is-rear" : ""}`}
              key={project.id}
              style={{ transformStyle: "preserve-3d" }}
              transition={layoutTransition}
            >
              <div className="project-media">
                <motion.div
                  className={`project-image-frame${project.contain ? " is-contained" : ""}`}
                  layoutId={layoutId(project)}
                  transition={layoutTransition}
                >
                  <Image
                    alt={project.alt}
                    className={
                      project.id === "berbagi" ? "object-top" : undefined
                    }
                    draggable={false}
                    fill
                    sizes={project.sizes}
                    src={project.image}
                  />
                </motion.div>
                {isActive && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-3 bottom-3 z-10 flex items-center justify-between gap-2 rounded-xl border border-white/15 bg-[#0c1422]/80 px-3 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:opacity-100 md:translate-y-1"
                  >
                    <span className="truncate font-mono text-[11px] text-white/80">
                      {project.tags.join(" · ")}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                      Inspect
                      <IconExpand className="h-3.5 w-3.5" />
                    </span>
                  </div>
                )}
              </div>
              <button
                aria-label={
                  isActive
                    ? `Open ${project.title} project details`
                    : `Select ${project.title} project`
                }
                className="project-card-action"
                tabIndex={isRear ? -1 : undefined}
                onClick={(event) => {
                  if (!isActive) {
                    selectProject(index);
                    return;
                  }
                  triggerRef.current = event.currentTarget;
                  setOpenProject(project);
                }}
                type="button"
              />
            </motion.article>
          );
        })}
      </div>

      {/* Carousel controls & pagination dots */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <motion.button
          type="button"
          aria-label="Previous project"
          onClick={() => selectProject(wrapProjectIndex(activeIndex - 1))}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-outline-variant bg-surface text-on-surface transition-colors hover:border-primary hover:text-primary"
          whileHover={reduceMotion ? undefined : { scale: 1.08 }}
          whileTap={reduceMotion ? undefined : { scale: 0.92 }}
        >
          <IconArrowLeft className="h-4 w-4" />
        </motion.button>

        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Select project"
        >
          {projects.map((project, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`Show ${project.title}`}
                onClick={() => selectProject(index)}
                className="relative h-2.5 cursor-pointer rounded-full p-1 focus-visible:outline-offset-2"
              >
                <motion.span
                  className={`block h-2 rounded-full transition-colors ${
                    isSelected
                      ? "bg-primary"
                      : "bg-outline-variant hover:bg-outline"
                  }`}
                  animate={{ width: isSelected ? 24 : 8 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 360, damping: 28 }
                  }
                />
              </button>
            );
          })}
        </div>

        <motion.button
          type="button"
          aria-label="Next project"
          onClick={() => selectProject(wrapProjectIndex(activeIndex + 1))}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-outline-variant bg-surface text-on-surface transition-colors hover:border-primary hover:text-primary"
          whileHover={reduceMotion ? undefined : { scale: 1.08 }}
          whileTap={reduceMotion ? undefined : { scale: 0.92 }}
        >
          <IconArrowRight className="h-4 w-4" />
        </motion.button>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          aria-live="polite"
          aria-atomic="true"
          className="project-selected-copy"
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: -10, filter: "blur(4px)" }
          }
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 10, filter: "blur(4px)" }
          }
          key={activeProject.id}
          transition={
            reduceMotion
              ? { duration: 0.12 }
              : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <div className="flex flex-wrap justify-center gap-2">
            {activeProject.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-outline-variant bg-surface px-2.5 py-0.5 font-mono text-[11px] font-medium text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-display font-bold tracking-tight text-on-surface">
            {activeProject.title}
          </h3>
          <p>{activeProject.description}</p>
          <motion.button
            className="project-view-link group"
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setOpenProject(activeProject);
            }}
            type="button"
            whileHover={reduceMotion ? undefined : { x: 2 }}
          >
            View Project
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </motion.button>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence onExitComplete={() => lenis?.start()}>
        {openProject && (
          <motion.div
            animate={{ opacity: 1 }}
            aria-labelledby="project-detail-title"
            aria-modal="true"
            className="project-detail-overlay"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            key={openProject.id}
            onClick={(event) => {
              if (event.target === event.currentTarget) setOpenProject(null);
            }}
            role="dialog"
            transition={reduceMotion ? { duration: 0 } : { duration: 0.22 }}
          >
            <motion.div
              animate={
                reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
              }
              className="project-detail-panel"
              exit={
                reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.98 }
              }
              initial={
                reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.98 }
              }
              transition={layoutTransition}
            >
              <motion.div
                className={`project-detail-image${openProject.contain ? " is-contained" : ""}`}
                layoutId={layoutId(openProject)}
                transition={layoutTransition}
              >
                <Image
                  alt={openProject.alt}
                  className={openProject.id === "berbagi" ? "object-top" : undefined}
                  draggable={false}
                  fill
                  priority
                  sizes="(max-width: 767px) 92vw, 1100px"
                  src={openProject.image}
                />
              </motion.div>

              <motion.div
                className="project-detail-copy"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  <div className="project-tags">
                    {openProject.tags.map((tag) => (
                      <span key={tag} className="rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2
                    className="font-display text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
                    id="project-detail-title"
                  >
                    {openProject.title}
                  </h2>
                  <p className="project-detail-description">
                    {openProject.description}
                  </p>
                </div>

                <button
                  aria-label="Close project details"
                  className="project-detail-close"
                  onClick={() => setOpenProject(null)}
                  ref={closeButtonRef}
                  type="button"
                >
                  ← Close
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
