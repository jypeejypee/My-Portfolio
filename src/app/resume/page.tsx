import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { education } from "@/data/experience";
import PrintButton from "@/components/PrintButton";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name}, ${profile.role}.`,
};

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

// Deliberately plain, single-column layout with standard section names so
// applicant tracking systems (ATS) can parse it, on screen and as a PDF.
export default function ResumePage() {
  return (
    <>
      <div className={styles.toolbar}>
        <div>
          <span className="eyebrow">Resume</span>
          <p className="muted">
            Plain, single-column format that both people and hiring software (ATS) can read.
          </p>
        </div>
        <PrintButton />
      </div>

      <article className={styles.paper}>
        <header className={styles.head}>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.contact}>
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href}>
                {stripProtocol(s.href)}
              </a>
            ))}
          </p>
        </header>

        <section className={styles.section}>
          <h2>Summary</h2>
          <p>{profile.summary}</p>
        </section>

        <section className={styles.section}>
          <h2>Technical Skills</h2>
          <ul className={styles.skills}>
            {skills.map((g) => (
              <li key={g.area}>
                <strong>{g.area}:</strong> {g.items.join(", ")}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Projects</h2>
          {projects.map((p) => (
            <div key={p.slug} className={styles.entry}>
              <h3>
                {p.title}
                {p.status && <span className={styles.status}> ({p.status})</span>}
                <span className={styles.tech}> | {p.tech.join(", ")}</span>
              </h3>
              {(p.liveUrl || p.repoUrl) && (
                <p className={styles.links}>
                  {p.liveUrl && <a href={p.liveUrl}>{stripProtocol(p.liveUrl)}</a>}
                  {p.repoUrl && <a href={p.repoUrl}>{stripProtocol(p.repoUrl)}</a>}
                </p>
              )}
              <ul>
                <li>{p.summary}</li>
                {p.highlights.slice(0, 1).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Education</h2>
          {education.map((e) => (
            <div key={`${e.school}-${e.program}`} className={styles.entry}>
              <h3>
                {e.program}, {e.school}
                <span className={styles.date}>
                  {e.start} – {e.end}
                </span>
              </h3>
              {e.points.length > 0 && (
                <ul>
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      </article>
    </>
  );
}
