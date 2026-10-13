import type { Metadata } from "next";
import "@/styles/globals.css";
import styles from "./layout.module.css";
import { profile } from "@/data/profile";
import Background from "@/components/Background";
import ProfileRail from "@/components/ProfileRail";
import MobileHeader from "@/components/MobileHeader";
import MobileTabBar from "@/components/MobileTabBar";

// TODO: load your font with next/font/google and set the --font-main variable, e.g.
// import { Poppins } from "next/font/google";
// const font = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-main" });
// then add className={font.variable} to <html>.

export const metadata: Metadata = {
  title: { default: `${profile.name} — ${profile.role}`, template: `%s · ${profile.name}` },
  description: profile.headline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Background />
        <ProfileRail />
        <MobileHeader />
        <main className={styles.main}>
          <div className={styles.inner}>{children}</div>
        </main>
        <MobileTabBar />
      </body>
    </html>
  );
}
