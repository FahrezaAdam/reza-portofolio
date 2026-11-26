import { ContactFooter } from "@/components/contact-footer";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProfileSection } from "@/components/profile-section";
import { ProjectGallery } from "@/components/project-gallery";
import { RevealInit } from "@/components/reveal";
import { SectionStepper } from "@/components/section-stepper";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <>
      <RevealInit />
      <Navbar />
      <SectionStepper />

      <main>
        <HeroSection />
        <ProfileSection />
        <EducationSection />
        <SkillsSection />

        <section
          className="projects-section site-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="editorial-container">
            <ProjectGallery />
          </div>
        </section>

        <ExperienceSection />
      </main>

      <ContactFooter />
    </>
  );
}
