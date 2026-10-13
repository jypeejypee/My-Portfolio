import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "Web apps, tools and a game built with React, Next.js, Node.js and Java.",
};

export default function ProjectsPage() {
  return (
    <>
      <header className="page-head">
        <span className="eyebrow">Work</span>
        <h1 className="page-title">Projects</h1>
        <p className="page-intro">
          Complete, working projects across the stack: a game, real-time and file-sharing web apps,
          automation tools and a Java back end. Every one has its source code on GitHub.
        </p>
      </header>
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
