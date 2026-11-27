import type { Metadata } from "next";
import { Barlow_Condensed, Geist, Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
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
  verification: {
    google: "nwtmBHj73lOjDQiUUustCbwkUG9Cw8EhRadJ7UuZMAM",
  },
  openGraph: {
    title: "Fahreza Adam Nuardiansyah | Portfolio",
    description:
      "Portfolio of Fahreza Adam Nuardiansyah, Information Technology Student & Full Stack Developer at Universitas Jember.",
    type: "website",
    locale: "en_US",
  },
};

const themeScript = `(function () {
  document.documentElement.classList.add("js");
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
        className={`${barlow.variable} ${inter.variable} ${geist.variable} bg-background text-on-background font-body-md antialiased selection:bg-primary selection:text-on-primary`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
