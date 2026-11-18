import type { Metadata } from "next";
import { Geist, Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ParticlesBackground } from "@/components/particles";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fahreza Adam Nuardiansyah | Portfolio",
  description:
    "Portfolio of Fahreza Adam Nuardiansyah, Information Technology Student & Full Stack Developer at Universitas Jember.",
  openGraph: {
    title: "Fahreza Adam Nuardiansyah | Portfolio",
    description:
      "Portfolio of Fahreza Adam Nuardiansyah, Information Technology Student & Full Stack Developer at Universitas Jember.",
    type: "website",
    locale: "en_US",
  },
};

const themeScript = `(function () {
  try {
    if (localStorage.getItem("color-theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      if (!localStorage.getItem("color-theme")) {
        localStorage.setItem("color-theme", "light");
      }
    }
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${inter.variable} ${geist.variable} bg-background text-on-background font-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative`}
      >
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          precedence="default"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <ParticlesBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
