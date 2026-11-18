import type { CSSProperties } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { RevealInit } from "@/components/reveal";
import { coursework, experiences, skillGroups } from "@/lib/content";

const revealDelay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export default function Home() {
  return (
    <>
      <RevealInit />
      <Navbar />

      <main className="pt-24 pb-xl lg:pt-28">
        {/* Hero Section */}
        <section
          className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-xl md:py-[120px] flex flex-col md:flex-row items-center gap-lg"
          id="hero"
        >
          <div id="hero-left" className="anim-left flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
              <span className="font-label-md text-label-md text-on-surface-variant">
                Available for Opportunities
              </span>
            </div>
            <h1 className="font-display text-display-mobile md:text-display text-on-background">
              Hi, I&apos;m{" "}
              <span className="text-primary">Fahreza Adam Nuardiansyah</span>
              <br />
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Information Technology student at Universitas Jember. Passionate
              about building robust web and mobile applications with modern tech
              stacks.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                className="bg-primary hover:bg-primary-container dark:bg-primary-container dark:hover:brightness-110 text-on-primary dark:text-on-primary-container font-label-md text-label-md px-6 py-3 rounded-lg transition-all hover:scale-105 flex items-center gap-2"
                href="#projects"
              >
                View Projects
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
              <a
                className="bg-transparent border border-outline dark:border-outline-variant text-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-surface-container-low dark:hover:bg-surface-container transition-colors flex items-center gap-2"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div
            id="hero-right"
            className="anim-right flex-1 relative w-full aspect-square max-w-[400px]"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
            <Image
              src="/images/profile.webp"
              alt="Fahreza Adam Workspace"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="relative z-10 object-cover rounded-2xl shadow-sm border border-outline-variant/30 ambient-shadow"
            />
          </div>
        </section>

        {/* Profile Section */}
        <section
          className="bg-surface-container-lowest border-y border-outline-variant/20 py-xl content-visibility-auto"
          id="profile"
        >
          <div
            className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-8"
            data-reveal="fade-up"
          >
            <div className="md:col-span-4">
              <h2 className="font-display text-headline-lg text-on-surface flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  person
                </span>
                Profile
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                I am an enthusiastic Information Technology student with a
                strong focus on full-stack development. I enjoy building
                comprehensive projects that solve real-world problems.
                Throughout my academic journey and practical experiences, I have
                cultivated a deep understanding of teamwork, effective
                problem-solving, and the software development lifecycle. I am
                always eager to learn new technologies and apply them to create
                efficient, user-centric applications.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          className="max-w-container-max mx-auto px-gutter py-xl content-visibility-auto"
          id="education"
        >
          <h2
            className="font-display text-headline-lg text-on-surface mb-12 text-center"
            data-reveal="fade-up"
          >
            Education &amp; Academics
          </h2>
          <div
            className="bg-surface border border-outline-variant/30 rounded-xl p-8 max-w-3xl mx-auto card-hover ambient-shadow relative overflow-hidden"
            data-reveal="zoom-in"
            style={revealDelay(100)}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed-dim/20 rounded-bl-full -z-10"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Universitas Jember
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Undergraduate Student of Information Technology
                </p>
              </div>
              <div className="bg-primary/10 text-primary font-label-md text-label-md px-4 py-2 rounded-lg border border-primary/20 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  school
                </span>
                GPA: 3.96 / 4.00
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/30">
              <h4 className="font-label-md text-label-md text-on-surface mb-4 uppercase tracking-wider">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="bg-surface-container px-3 py-1.5 rounded text-sm text-on-surface-variant font-code-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          className="bg-surface-container-low py-xl content-visibility-auto"
          id="skills"
        >
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <h2
              className="font-display text-headline-lg text-on-surface mb-12 text-center"
              data-reveal="fade-up"
            >
              Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillGroups.map((group, index) => (
                <div
                  key={group.title}
                  className="bg-surface border border-outline-variant/30 rounded-xl p-6 hover:border-primary/50 transition-colors"
                  data-reveal="fade-up"
                  style={revealDelay((index + 1) * 100)}
                >
                  <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-on-primary-fixed">
                      {group.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-[20px] font-bold text-on-surface mb-4">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-md px-2.5 py-1 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section (Bento Grid Style) */}
        <section
          className="max-w-container-max mx-auto px-gutter py-xl content-visibility-auto"
          id="projects"
        >
          <div
            className="flex justify-between items-end mb-12"
            data-reveal="fade-up"
          >
            <div>
              <h2 className="font-display text-headline-lg text-on-surface mb-2">
                Featured Projects
              </h2>
              <p className="font-body-md text-on-surface-variant">
                A selection of my recent full-stack and IoT work.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Project 1 (Large) */}
            <div
              className="lg:col-span-8 bg-surface rounded-xl border border-outline-variant/30 overflow-hidden card-hover ambient-shadow flex flex-col md:flex-row"
              data-reveal="fade-up"
              style={revealDelay(100)}
            >
              <div className="md:w-1/2 h-64 md:h-auto bg-surface-container-low relative">
                <Image
                  src="/images/EarthCare.webp"
                  alt="EarthCare App"
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary/10 text-primary font-label-md px-2 py-0.5 rounded text-xs">
                    Mobile
                  </span>
                  <span className="bg-primary/10 text-primary font-label-md px-2 py-0.5 rounded text-xs">
                    Cloud
                  </span>
                </div>
                <h3 className="font-display text-headline-md text-on-surface mb-3">
                  EarthCare
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6">
                  Mobile application for environmental damage reporting.
                  Architected the database, developed the backend utilizing
                  modern cloud services, and implemented a robust real-time
                  notification system.
                </p>
              </div>
            </div>

            {/* Project 2 (Small) */}
            <div
              className="lg:col-span-4 bg-surface rounded-xl border border-outline-variant/30 overflow-hidden card-hover ambient-shadow flex flex-col"
              data-reveal="fade-up"
              style={revealDelay(200)}
            >
              <div className="h-48 bg-surface-container-low relative">
                <Image
                  src="/images/AquaSync.webp"
                  alt="AquaSync Dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-secondary/10 text-secondary font-label-md px-2 py-0.5 rounded text-xs">
                    IoT
                  </span>
                  <span className="bg-secondary/10 text-secondary font-label-md px-2 py-0.5 rounded text-xs">
                    Web
                  </span>
                </div>
                <h3 className="font-display text-headline-md text-[20px] text-on-surface mb-2">
                  AquaSync
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant mb-4">
                  IoT &amp; Web-based automated catfish pond monitoring system.
                  Developed real-time data communications and water quality
                  monitoring algorithms.
                </p>
              </div>
            </div>

            {/* Project 3 (Berbagi - Full Width) */}
            <div
              className="lg:col-span-8 bg-surface rounded-xl border border-outline-variant/30 overflow-hidden card-hover ambient-shadow flex flex-col"
              data-reveal="fade-up"
              style={revealDelay(300)}
            >
              <div className="h-64 md:h-72 bg-surface-container-low relative">
                <Image
                  src="/images/berbagi.webp"
                  alt="Berbagi Platform UI"
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-md px-2 py-0.5 rounded text-xs">
                    Web
                  </span>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-md px-2 py-0.5 rounded text-xs">
                    Laravel Blade
                  </span>
                </div>
                <h3 className="font-display text-headline-md text-[20px] text-on-surface mb-3">
                  Berbagi
                </h3>
                <p className="font-body-md text-on-surface-variant max-w-3xl mb-6">
                  A comprehensive web system for the donation and distribution
                  of used goods. Served as Frontend Developer utilizing Laravel
                  Blade to create an accessible, responsive, and intuitive user
                  interface for donors and administrators.
                </p>
              </div>
            </div>

            {/* Project 4 (SiPakan) */}
            <div
              className="lg:col-span-4 bg-surface rounded-xl border border-outline-variant/30 overflow-hidden card-hover ambient-shadow flex flex-col"
              data-reveal="fade-up"
              style={revealDelay(400)}
            >
              <div className="h-64 md:h-72 bg-surface-container-low/50 relative">
                <Image
                  src="/images/sipakan.webp"
                  alt="SiPakan Mobile App"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-contain p-6 drop-shadow-lg transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary/10 text-primary font-label-md px-2 py-0.5 rounded text-xs">
                    Mobile
                  </span>
                  <span className="bg-primary/10 text-primary font-label-md px-2 py-0.5 rounded text-xs">
                    IoT
                  </span>
                </div>
                <h3 className="font-display text-headline-md text-[20px] text-on-surface mb-2">
                  SiPakan
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant mb-4">
                  Optimalisasi Sistem Distribusi Pakan dan Monitoring Kesehatan
                  Ternak Ayam Berbasis Digital. Developed a comprehensive mobile
                  dashboard to streamline automated feed distribution and provide
                  real-time digital monitoring for poultry livestock health,
                  including temperature and humidity tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          className="bg-surface-container-lowest border-y border-outline-variant/20 py-xl"
          id="experience"
        >
          <div className="max-w-container-max mx-auto px-gutter">
            <h2
              className="font-display text-headline-lg text-on-surface mb-10 text-center flex justify-center items-center gap-3"
              data-reveal="fade-up"
            >
              <span className="material-symbols-outlined text-primary">
                work
              </span>
              Experience
            </h2>
            <div
              className="max-w-3xl mx-auto"
              data-reveal="fade-up"
              style={revealDelay(100)}
            >
              {experiences.map((experience, index) => (
                <div
                  key={experience.title}
                  className={`relative pl-8 border-l-2 ${
                    index === experiences.length - 1
                      ? "border-transparent"
                      : "border-primary/20 pb-10"
                  }`}
                >
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 ring-4 ring-surface-container-lowest"></div>
                  <h3 className="font-headline-md text-[20px] text-on-surface font-bold">
                    {experience.title}
                  </h3>
                  <p className="font-label-md text-primary mb-3">
                    {experience.org}
                  </p>
                  <p className="font-body-md text-on-surface-variant bg-surface p-4 rounded-lg border border-outline-variant/20">
                    {experience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="bg-surface-container transition-opacity duration-200 full-width"
        id="contact"
      >
        <div className="flex flex-col md:flex-row justify-between items-center py-lg px-gutter max-w-container-max mx-auto w-full gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-display text-headline-md font-bold text-primary mb-2">
              Let&apos;s Connect
            </h2>
            <p className="text-on-surface-variant font-body-md text-sm">
              Fahreza Adam Nuardiansyah. Built with precision.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <a
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
              href="mailto:fahrezaadam1784@gmail.com"
            >
              <span className="material-symbols-outlined text-[20px]">
                mail
              </span>
              <span className="font-label-md text-sm">Email</span>
            </a>
            <a
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
              href="https://www.linkedin.com/in/fahreza-adam-nuardiansyah/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[20px]">
                link
              </span>
              <span className="font-label-md text-sm">LinkedIn</span>
            </a>
            <a
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
              href="https://github.com/FahrezaAdam"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[20px]">
                code
              </span>
              <span className="font-label-md text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
