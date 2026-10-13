import Link from "next/link";
import type { Project } from "@/types";
import Icon from "./Icon";
import ProjectCover from "./ProjectCover";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <ProjectCover project={project} />
      <div className={styles.body}>
        <p className={`eyebrow ${styles.meta}`}>
          {project.category} · {project.year}
          {project.status && <span className={styles.badge}>{project.status}</span>}
        </p>
        <h2 className={styles.title}>
          <Link href={`/projects/${project.slug}`} className={styles.link}>
            {project.title}
          </Link>
          <Icon name="arrowRight" />
        </h2>
        <p className="muted">{project.summary}</p>
        <ul className={`chips ${styles.tags}`}>
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
