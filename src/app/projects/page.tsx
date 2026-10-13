import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import styles from "./projects.module.css";

export const metadata: Metadata = { title: "Projects" };

// TODO: add filter chips by tech.
export default function ProjectsPage() {
  return (
    <>
      <h1 className="page-title">Projects</h1>
      <p className="page-intro">PLACEHOLDER — one sentence about the kind of things you build.</p>
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
