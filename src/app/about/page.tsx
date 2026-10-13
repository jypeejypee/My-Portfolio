import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";
import styles from "./about.module.css";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <h1 className="page-title">About</h1>
      <p className="page-intro">{profile.bio}</p>

      <section className={styles.section}>
        <h2>Skills</h2>
        <div className={styles.skills}>
          {skills.map((g) => (
            <div key={g.area} className={styles.group}>
              <h3>{g.area}</h3>
              <div className={styles.chips}>
                {g.items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Experience</h2>
        <ol className={styles.timeline}>
          {experience.map((e) => (
            <li key={`${e.org}-${e.role}`} className={styles.item}>
              <strong>{e.role}</strong> · <span className="muted">{e.org}</span>
              <div className="muted" style={{ fontSize: "var(--text-sm)" }}>
                {e.start} – {e.end}
              </div>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
