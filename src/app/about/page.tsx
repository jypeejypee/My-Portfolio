import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { skills, learningNow } from "@/data/skills";
import { education } from "@/data/experience";
import Icon from "@/components/Icon";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name}, ${profile.role}: skills, education and what I'm looking for.`,
};

export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <span className="eyebrow">About</span>
        <h1 className="page-title">Hi, I&apos;m {profile.firstName}.</h1>
        <p className="page-intro">{profile.summary}</p>
      </header>

      <div className={styles.facts}>
        <div className={styles.fact}>
          <span className="eyebrow">Role</span>
          <p>{profile.role}</p>
        </div>
        <div className={styles.fact}>
          <span className="eyebrow">Location</span>
          <p>
            {profile.location} · {profile.timezone}
          </p>
        </div>
        <div className={styles.fact}>
          <span className="eyebrow">Looking for</span>
          <p>{profile.lookingFor}</p>
        </div>
      </div>

      <section className={styles.section} aria-labelledby="skills">
        <h2 id="skills">Skills</h2>
        <div className={styles.skills}>
          {skills.map((g) => (
            <div key={g.area} className={styles.group}>
              <h3>{g.area}</h3>
              <ul className="chips">
                {g.items.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className={styles.learning}>
          <Icon name="sparkle" size={16} /> <span>{learningNow}</span>
        </p>
      </section>

      <section className={styles.section} aria-labelledby="education">
        <h2 id="education">Education</h2>
        <ol className={styles.timeline}>
          {education.map((e) => (
            <li key={`${e.school}-${e.program}`} className={styles.item}>
              <span className="eyebrow">
                {e.start} – {e.end}
              </span>
              <h3>{e.program}</h3>
              <p className="muted">{e.school}</p>
              {e.points.length > 0 && (
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className={`${styles.section} ${styles.cta}`}>
        <h2>Want the short version?</h2>
        <p className="muted">My resume has everything on one page.</p>
        <div className="btn-row">
          <Link href={profile.resumeHref} className="btn btn-primary">
            <Icon name="file" /> View resume
          </Link>
          <Link href="/contact" className="btn">
            Contact me
          </Link>
        </div>
      </section>
    </>
  );
}
