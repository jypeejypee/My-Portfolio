import Link from "next/link";
import { profile } from "@/data/profile";
import { featuredProject, projects } from "@/data/projects";
import { coreStack, learningNow } from "@/data/skills";
import { education } from "@/data/experience";
import BentoCard, { BentoGrid } from "@/components/BentoCard";
import ProjectCover from "@/components/ProjectCover";
import StatusDot from "@/components/StatusDot";
import Icon from "@/components/Icon";
import styles from "./home.module.css";

// Home = bento grid.
export default function HomePage() {
  const moreProjects = projects.filter((p) => p !== featuredProject).slice(0, 4);
  const school = education[0];

  return (
    <BentoGrid>
      <BentoCard span="lg" tall className={styles.hero}>
        <span className="eyebrow">
          Hi, I&apos;m {profile.firstName} · {profile.role}
        </span>
        <h1 className={styles.headline}>{profile.headline}</h1>
        <p className={styles.lead}>
          Based in the {profile.location} ({profile.timezone}). I work across the stack with React,
          Next.js, Node.js, Express, Java and PostgreSQL.
        </p>
        <div className={`btn-row ${styles.actions}`}>
          <Link href="/projects" className="btn btn-primary">
            View my work <Icon name="arrowRight" />
          </Link>
          <Link href={profile.resumeHref} className="btn">
            <Icon name="file" /> Resume
          </Link>
          <a href={`mailto:${profile.email}`} className="btn">
            <Icon name="envelope" /> Email
          </a>
        </div>
      </BentoCard>

      <BentoCard span="sm">
        <StatusDot available={profile.available} text={profile.availabilityText} />
        <p className={styles.big}>{profile.lookingFor}</p>
        <Link href="/contact" className={styles.more}>
          Get in touch <Icon name="arrowRight" size={16} />
        </Link>
      </BentoCard>

      <BentoCard span="sm">
        <span className="eyebrow">Currently learning</span>
        <p className={styles.big}>{learningNow}</p>
      </BentoCard>

      <BentoCard span="md">
        <span className="eyebrow">Featured project</span>
        <ProjectCover project={featuredProject} />
        <div className={styles.stackText}>
          <h2 className={styles.cardTitle}>{featuredProject.title}</h2>
          <p className="muted">{featuredProject.summary}</p>
        </div>
        <div className={`btn-row ${styles.actions}`}>
          {featuredProject.liveUrl && (
            <a
              href={featuredProject.liveUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Play it live <Icon name="arrow" />
            </a>
          )}
          <Link href={`/projects/${featuredProject.slug}`} className="btn">
            Case study
          </Link>
        </div>
      </BentoCard>

      <BentoCard span="md">
        <span className="eyebrow">More projects</span>
        <ul className={styles.list}>
          {moreProjects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`} className={styles.listItem}>
                <span>
                  <strong>{p.title}</strong>
                  <span className={styles.listMeta}>{p.tech.slice(0, 3).join(" · ")}</span>
                </span>
                <Icon name="arrowRight" size={16} />
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/projects" className={styles.more}>
          All {projects.length} projects <Icon name="arrowRight" size={16} />
        </Link>
      </BentoCard>

      <BentoCard span="md">
        <span className="eyebrow">Core stack</span>
        <ul className="chips">
          {coreStack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
        <Link href="/about" className={styles.more}>
          Full skill list <Icon name="arrowRight" size={16} />
        </Link>
      </BentoCard>

      {school && (
        <BentoCard span="md">
          <span className="eyebrow">Education</span>
          <div className={styles.edu}>
            <span className={styles.eduIcon}>
              <Icon name="graduation" size={22} />
            </span>
            <div>
              <h2 className={styles.cardTitle}>{school.program}</h2>
              <p className="muted">
                {school.school} · {school.start} – {school.end}
              </p>
            </div>
          </div>
        </BentoCard>
      )}
    </BentoGrid>
  );
}
