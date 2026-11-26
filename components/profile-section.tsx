"use client";

import { motion, useReducedMotion } from "motion/react";
import { ScrollRevealWords } from "@/components/motion-primitives";

const profileText =
  "I am an enthusiastic Information Technology student with a strong focus on full-stack development. I enjoy building comprehensive projects that solve real-world problems. Throughout my academic journey and practical experiences, I have cultivated a deep understanding of teamwork, effective problem-solving, and the software development lifecycle. I am always eager to learn new technologies and apply them to create efficient, user-centric applications.";

export function ProfileSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="profile-section site-section"
      id="profile"
      aria-labelledby="profile-title"
    >
      <div className="profile-layout editorial-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="projects-eyebrow mb-2">01 · About</p>
          <h2 className="section-title" id="profile-title">
            Profile
          </h2>
        </motion.div>

        <ScrollRevealWords text={profileText} className="profile-copy" />
      </div>
    </section>
  );
}
