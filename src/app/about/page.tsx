import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { skills, learningNow } from "@/data/skills";
import { certifications, education, experience } from "@/data/experience";
import StatsStrip from "@/components/StatsStrip";
import Icon from "@/components/Icon";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name}: mechanical engineer turned full-stack developer. Experience, education, certifications and skills.`,
};

export default function AboutPage() {
  return (
    <>
      <section className={`card ${styles.intro}`}>
        <div className={styles.photoWrap}>
          <Image
            src={profile.avatarSrc}
            alt={profile.name}
            width={390}
            height={309}
            sizes="(max-width: 900px) 60vw, 300px"
            className={styles.photo}
            priority
          />
        </div>
        <div className={styles.story}>
          <span className="eyebrow">About me</span>
          <h1 className={styles.title}>
            Hi, I&apos;m {profile.firstName}. I fix problems, now with code.
          </h1>
          {profile.story.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className={styles.looking}>
            <Icon name="sparkle" size={18} weight="fill" /> {profile.lookingFor}
          </p>
        </div>
      </section>

      <div className={styles.stats}>
        <StatsStrip />
      </div>

      <section className={styles.section} aria-labelledby="experience-title" id="experience">
        <h2 id="experience-title" className="section-title">
          Experience
        </h2>
        <ol className={styles.timeline}>
          {experience.map((job) => (
            <li key={`${job.org}-${job.start}`} className={styles.item}>
              <span className={styles.date}>
                {job.start} – {job.end}
              </span>
              <div className={`card ${styles.jobCard}`}>
                <h3>{job.role || job.org}</h3>
                {job.role && <p className={styles.org}>{job.org}</p>}
                {job.points.length > 0 && (
                  <ul>
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className={styles.twoCol}>
        <section className={styles.section} aria-labelledby="education">
          <h2 id="education" className="section-title">
            Education
          </h2>
          <ul className={styles.list}>
            {education.map((e) => (
              <li key={e.school} className={`card ${styles.listItem}`}>
                <span className="icon-tile">
                  <Icon name="graduation" size={20} weight="fill" />
                </span>
                <div>
                  <h3>{e.program}</h3>
                  <p className="muted">
                    {e.school} · {e.start}–{e.end}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="certs">
          <h2 id="certs" className="section-title">
            Certifications
          </h2>
          <ul className={styles.list}>
            {certifications.map((c) => (
              <li key={c.name} className={`card ${styles.listItem}`}>
                <span className="icon-tile">
                  <Icon name="certificate" size={20} weight="fill" />
                </span>
                <div>
                  <h3>{c.name}</h3>
                  <p className="muted">{c.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className={styles.section} aria-labelledby="skills">
        <h2 id="skills" className="section-title">
          Skills
        </h2>
        <div className={styles.skills}>
          {skills.map((g) => (
            <div key={g.area} className={`card ${styles.group}`}>
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
          <Icon name="sparkle" size={16} weight="fill" /> <span>{learningNow}</span>
        </p>
      </section>

      <section className={`card ${styles.cta}`}>
        <h2>Let&apos;s build something useful.</h2>
        <p className="muted">
          My resume has everything in one place, in a format hiring tools can read.
        </p>
        <div className="btn-row">
          <Link href={profile.resumeHref} className="btn btn-primary">
            <Icon name="file" weight="bold" /> View resume
          </Link>
          <Link href="/contact" className="btn">
            Contact me
          </Link>
        </div>
      </section>
    </>
  );
}
