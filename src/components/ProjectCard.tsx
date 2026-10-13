import Link from "next/link";
import type { Project } from "@/types";
import Icon from "./Icon";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.thumb}>
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={`${project.title} screenshot`} />
        ) : (
          <span className="muted">Screenshot PLACEHOLDER</span>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.head}>
          <h3>{project.title}</h3>
          <Icon name="arrow" />
        </div>
        <p className="muted">{project.summary}</p>
        <div className={styles.tags}>
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
