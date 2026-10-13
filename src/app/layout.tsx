import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import styles from "./layout.module.css";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import Background from "@/components/Background";
import ProfileRail from "@/components/ProfileRail";
import MobileHeader from "@/components/MobileHeader";
import MobileTabBar from "@/components/MobileTabBar";

const sans = Geist({ subsets: ["latin"], variable: "--font-main" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-code" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  title: { default: title, template: `%s · ${profile.name}` },
  description: profile.summary,
  authors: [{ name: profile.name }],
  keywords: [profile.role, ...skills.flatMap((g) => g.items)],
  openGraph: { type: "profile", title, description: profile.headline, siteName: profile.name },
  twitter: { card: "summary", title, description: profile.headline },
};

// Structured data so search engines and recruiting tools can read who you are.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressCountry: profile.location },
  sameAs: profile.socials.map((s) => s.href),
  knowsAbout: skills.flatMap((g) => g.items),
  ...(siteUrl && { url: siteUrl }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
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
