import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import Icon from "@/components/Icon";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Project" };
}

// TODO: expand into problem → role → stack → screenshots → result.
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article>
      <Link href="/projects" className="muted">
        ← All projects
      </Link>
      <h1 className="page-title" style={{ marginTop: "var(--space-4)" }}>
        {project.title}
      </h1>
      <p className="page-intro">{project.summary}</p>
      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginBottom: "var(--space-6)" }}>
        {project.tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
        <span className="chip">{project.year}</span>
      </div>
      <p style={{ maxWidth: "70ch" }}>{project.description}</p>
      <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-8)" }}>
        {project.liveUrl && (
          <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
            Live site <Icon name="arrow" />
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} className="btn" target="_blank" rel="noreferrer">
            <Icon name="github" /> Code
          </a>
        )}
      </div>
    </article>
  );
}
