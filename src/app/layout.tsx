import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import styles from "./layout.module.css";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import Background from "@/components/Background";
import ProfileRail from "@/components/ProfileRail";
import MobileHeader from "@/components/MobileHeader";
import MobileTabBar from "@/components/MobileTabBar";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-main" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  title: { default: title, template: `%s · ${profile.name}` },
  description: profile.summary,
  authors: [{ name: profile.name }],
  keywords: [profile.role, ...skills.flatMap((g) => g.items)],
  openGraph: {
    type: "profile",
    title,
    description: profile.subhead,
    siteName: profile.name,
    images: ["/projects/accounting.jpg"],
  },
  twitter: { card: "summary_large_image", title, description: profile.subhead },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1e" },
  ],
};

// Structured data so search engines and recruiting tools can read who you are.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressRegion: "Rizal", addressCountry: "PH" },
  alumniOf: "Polytechnic University of the Philippines",
  sameAs: profile.socials.map((s) => s.href),
  knowsAbout: skills.flatMap((g) => g.items),
  ...(siteUrl && { url: siteUrl }),
};

// Runs before paint so the saved theme never flashes.
const themeScript = `try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Background />
        <ProfileRail />
        <MobileHeader />
        <main id="content" className={styles.main}>
          <div className={`${styles.inner} fade-in`}>{children}</div>
        </main>
        <MobileTabBar />
      </body>
    </html>
  );
}
