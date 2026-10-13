import type { Metadata } from "next";
import { flagshipProjects, otherProjects } from "@/data/projects";
import ProjectCard, { FlagshipCard } from "@/components/ProjectCard";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Live full-stack projects: an accounting web app, an AI-assisted support tool and an educational game.",
};

export default function ProjectsPage() {
  return (
    <>
      <header className="page-head">
        <span className="eyebrow">Selected work</span>
        <h1 className="page-title">Projects</h1>
        <p className="page-intro">
          Complete, deployed apps with live demos or a video walkthrough, plus smaller builds where
          I practiced real-time servers, third-party APIs and Java back ends.
        </p>
      </header>

      <div className={styles.flagships}>
        {flagshipProjects.map((p, i) => (
          <FlagshipCard key={p.slug} project={p} index={i} priority={i === 0} />
        ))}
      </div>

      <section className={styles.more} aria-labelledby="more-title">
        <h2 id="more-title" className="section-title">
          More builds
        </h2>
        <div className={styles.grid}>
          {otherProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
