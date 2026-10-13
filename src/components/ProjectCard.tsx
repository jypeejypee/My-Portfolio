import Link from "next/link";
import type { Project } from "@/types";
import Icon from "./Icon";
import ProjectCover from "./ProjectCover";
import styles from "./ProjectCard.module.css";

// Big showcase card for a flagship project: text on one side, framed screenshot on the other.
export function FlagshipCard({
  project,
  index,
  priority = false,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  const image = project.images[0];
  return (
    <article className={`card ${styles.flagship} ${index % 2 ? styles.flip : ""}`}>
      <div className={styles.text}>
        <p className="eyebrow">
          {String(index + 1).padStart(2, "0")} · {project.kind}
        </p>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.summary}>{project.summary}</p>
        <ul className={styles.points}>
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h}>
              <Icon name="check" size={16} weight="bold" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <ul className="chips">
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
        <div className="btn-row">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-accent">
              Live demo <Icon name="arrow" weight="bold" />
            </a>
          )}
          <Link href={`/projects/${project.slug}`} className="btn">
            Case study
          </Link>
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn">
              <Icon name="github" weight="bold" /> Code
            </a>
          )}
        </div>
        {project.liveNote && (
          <p className={styles.note}>
            <Icon name={project.liveNote.startsWith("Password") ? "lock" : "sparkle"} size={14} />
            {project.liveNote}
          </p>
        )}
      </div>
      {image && (
        <Link
          href={`/projects/${project.slug}`}
          className={styles.media}
          tabIndex={-1}
          aria-hidden="true"
        >
          <ProjectCover
            image={image}
            url={project.hideUrl ? undefined : project.liveUrl}
            priority={priority}
          />
        </Link>
      )}
    </article>
  );
}

// Compact card for smaller builds.
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`card ${styles.small}`}>
      <p className={styles.smallMeta}>
        <span className="eyebrow">{project.kind}</span>
        {project.status && <span className={styles.badge}>{project.status}</span>}
      </p>
      <h3 className={styles.smallTitle}>
        <Link href={`/projects/${project.slug}`} className={styles.stretch}>
          {project.title}
        </Link>
        <Icon name="arrowRight" weight="bold" />
      </h3>
      <p className="muted">{project.summary}</p>
      <ul className={`chips ${styles.tags}`}>
        {project.tech.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
