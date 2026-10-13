import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { flagshipProjects, otherProjects } from "@/data/projects";
import { skills } from "@/data/skills";
import { certifications, education, experience } from "@/data/experience";
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
  // The independent-projects entry is covered by the Projects section on the resume.
  const jobs = experience.filter((j) => j.org !== "Self-directed");

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
          {flagshipProjects.map((p) => (
            <div key={p.slug} className={styles.entry}>
              <h3>
                {p.title}
                <span className={styles.tech}> | {p.tech.join(", ")}</span>
              </h3>
              {(p.liveUrl || p.repoUrl) && (
                <p className={styles.links}>
                  {p.liveUrl && (
                    <a href={p.liveUrl}>
                      {p.hideUrl
                        ? "Live demo (online, with a demo account)"
                        : `Live: ${stripProtocol(p.liveUrl)}`}
                    </a>
                  )}
                  {p.repoUrl && <a href={p.repoUrl}>Code: {stripProtocol(p.repoUrl)}</a>}
                </p>
              )}
              <ul>
                <li>{p.summary}</li>
                {p.highlights.slice(0, 2).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className={styles.entry}>
            <h3>Other projects</h3>
            <ul>
              {otherProjects.map((p) => (
                <li key={p.slug}>
                  <strong>{p.title}</strong>
                  {p.status && ` (${p.status})`} ({p.tech.join(", ")}): {p.summary}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Work Experience</h2>
          {jobs.map((j) => (
            <div key={`${j.org}-${j.start}`} className={styles.entry}>
              <h3>
                {j.role ? `${j.role}, ${j.org}` : j.org}
                <span className={styles.date}>
                  {j.start} – {j.end}
                </span>
              </h3>
              {j.points.length > 0 && (
                <ul>
                  {j.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Education</h2>
          {education.map((e) => (
            <div key={e.school} className={styles.entry}>
              <h3>
                {e.program}, {e.school}
                <span className={styles.date}>
                  {e.start} – {e.end}
                </span>
              </h3>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Certifications</h2>
          <ul>
            {certifications.map((c) => (
              <li key={c.name}>
                {c.name}, {c.issuer}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
