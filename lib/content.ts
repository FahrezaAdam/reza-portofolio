export const navItems = [
  { id: "hero", label: "Home" },
  { id: "profile", label: "Profile" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const coursework = [
  "Web & Mobile Programming",
  "API Interface",
  "Database Systems",
  "SQL",
  "Software Analysis & Design",
];

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Dart", icon: "dart" },
      { name: "C#", icon: "csharp" },
      { name: "PHP", icon: "php" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "Flutter", icon: "flutter" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "Laravel", icon: "laravel" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
    ],
  },
  {
    title: "Databases & Cloud",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Firebase", icon: "firebase" },
      { name: "Supabase", icon: "supabase" },
      { name: "NeonDB", icon: "neon" },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "Git", icon: "git" },
      { name: "REST API", icon: "api" },
      { name: "MQTT", icon: "mqtt" },
      { name: "ESP32/IoT", icon: "espressif" },
      { name: "Figma", icon: "figma" },
      { name: "Postman", icon: "postman" },
    ],
  },
];

export type ExperienceItem = {
  title: string;
  org: string;
  period?: string;
  description?: string;
  highlights?: string[];
};

export const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer (Internship)",
    org: "PT Sieto Utama (ERA KITA)",
    period: "Aug 2026 – Present · Surabaya, East Java (On-site)",
    highlights: [
      "Developed and maintained end-to-end web application features, building responsive front-end interfaces and scalable back-end services.",
      "Designed and integrated RESTful APIs, managed relational database operations, and optimized overall application performance.",
      "Collaborated with cross-functional teams to translate business requirements into clean, maintainable code and ensure reliable deployments.",
    ],
  },
  {
    title: "Teaching Assistant - Software Engineering Laboratory (Part-time)",
    org: "Universitas Jember",
    period: "Jul 2026 – Present · Jember, East Java (Hybrid)",
    highlights: [
      "Facilitated weekly laboratory sessions and provided hands-on technical mentoring for undergraduate students across core Software Engineering courses.",
      "Evaluated practicum assignments, software project deliverables, and lab reports, offering structured feedback to reinforce engineering best practices.",
      "Collaborated with fellow teaching assistants to standardize grading rubrics, coordinate lab schedules, and streamline final report verification.",
    ],
  },
  {
    title: "Technology Division – PPK ORMAWA BEM FKM UNEJ (Contract)",
    org: "Universitas Jember",
    period: "Feb 2026 – Present · Jember, East Java (Hybrid)",
    description:
      "Served in the Technology Division for the PPK ORMAWA (Program Penguatan Kapasitas Organisasi Kemahasiswaan) initiative by BEM FKM Universitas Jember, developing digital solutions for the Desa Tangguh Bencana (Destana) program in Desa Nogosari.",
    highlights: [
      "Designed intuitive user interfaces in Figma and built the responsive web platform to support village-level disaster preparedness.",
      "Integrated the web platform with an IoT-based flood monitoring system to track water conditions and support real-time early warning visibility.",
      "Developed a web-based data management feature to record and organize information on flood-affected residents and areas for faster emergency response.",
      "Collaborated with cross-functional student teams and local village stakeholders to align technical features with community disaster mitigation workflows.",
    ],
  },
];

export const CV_URL = "/CV_Fahreza_Adam_Nuardiansyah.pdf";
