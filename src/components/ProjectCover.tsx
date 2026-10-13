import type { Project } from "@/types";
import Icon, { type IconName } from "./Icon";
import styles from "./ProjectCover.module.css";

const categoryIcon: Record<Project["category"], IconName> = {
  Game: "game",
  "Web app": "browser",
  Tool: "terminal",
  Website: "layout",
  Backend: "database",
};

// Shows the screenshot if there is one, otherwise a clean generated cover.
export default function ProjectCover({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  if (project.image) {
    return (
      <div className={`${styles.cover} ${large ? styles.large : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={`${project.title} screenshot`} className={styles.img} />
      </div>
    );
  }

  return (
    <div className={`${styles.cover} ${large ? styles.large : ""}`} aria-hidden="true">
      <span className={styles.icon}>
        <Icon name={categoryIcon[project.category]} size={large ? 32 : 26} />
      </span>
    </div>
  );
}
