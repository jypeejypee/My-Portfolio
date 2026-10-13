import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import ContactForm from "@/components/ContactForm";
import CopyEmail from "@/components/CopyEmail";
import StatusDot from "@/components/StatusDot";
import Icon from "@/components/Icon";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}, ${profile.role}.`,
};

export default function ContactPage() {
  return (
    <>
      <header className="page-head">
        <StatusDot available={profile.available} text={profile.availabilityText} />
        <h1 className="page-title">Let&apos;s work together</h1>
        <p className="page-intro">
          {profile.lookingFor} The fastest way to reach me is email. I&apos;m based in the{" "}
          {profile.location} ({profile.timezone}).
        </p>
      </header>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className="eyebrow">Email</span>
          <CopyEmail email={profile.email} />
          <div className={styles.links}>
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="btn">
                <Icon name={s.icon} /> {s.label}
              </a>
            ))}
            <Link href={profile.resumeHref} className="btn">
              <Icon name="file" /> Resume
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <span className="eyebrow">Or write a quick message</span>
          <ContactForm email={profile.email} />
        </div>
      </div>
    </>
  );
}
