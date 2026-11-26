"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

export function ScrollProgressBar() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-on-surface"
      style={{ scaleX }}
    />
  );
}

export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 320, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 320, damping: 22, mass: 0.4 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * strength);
    y.set(offsetY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);
  const [hovered, setHovered] = useState(false);

  const background = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, color-mix(in srgb, var(--color-primary) 13%, transparent), transparent 72%)`;

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  return (
    <div
      className={`group/spotlight relative overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-px z-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            background,
            opacity: hovered ? 1 : 0,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function Tilt3DCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const [hovered, setHovered] = useState(false);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 240,
    damping: 26,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 240,
    damping: 26,
  });
  const glareX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [0, 1], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgb(255 255 255 / 0.22), transparent 58%)`;

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    setHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={
        reduceMotion
          ? undefined
          : {
              perspective: 1100,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }
      }
    >
      {children}
      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
          style={{
            background: glareBg,
            opacity: hovered ? 1 : 0,
          }}
        />
      )}
    </motion.div>
  );
}

export function AnimatedRoleText({
  roles,
  className = "",
}: {
  roles: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || roles.length <= 1) return;
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 3200);
    return () => window.clearInterval(interval);
  }, [reduceMotion, roles.length]);

  if (reduceMotion) {
    return <p className={className}>{roles[0]}</p>;
  }

  return (
    <div
      className={`relative overflow-hidden py-1 leading-snug ${className}`}
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={roles[index]}
          className="leading-snug"
          initial={{ y: "65%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-65%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function ScrubWord({
  word,
  index,
  total,
  progress,
  reduceMotion,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const start = (index / total) * 0.78;
  const end = Math.min(1, start + 0.22);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  if (reduceMotion) {
    return <span>{word}</span>;
  }

  return (
    <motion.span aria-hidden="true" style={{ opacity }}>
      {word}
    </motion.span>
  );
}

export function ScrollRevealWords({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 86%", "end 52%"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className} aria-label={text}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <ScrubWord
            word={word}
            index={index}
            total={words.length}
            progress={scrollYProgress}
            reduceMotion={reduceMotion}
          />
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </p>
  );
}

export function AnimatedCounter({
  value,
  decimals = 2,
}: {
  value: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(
    reduceMotion ? value.toFixed(decimals) : (0).toFixed(decimals),
  );

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(value.toFixed(decimals));
      return;
    }
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 1.25,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    });

    return () => controls.stop();
  }, [decimals, inView, reduceMotion, value]);

  return <span ref={ref}>{display}</span>;
}
