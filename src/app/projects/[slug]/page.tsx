import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import Icon from "@/components/Icon";
import ProjectCover from "@/components/ProjectCover";
import styles from "../projects.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Project", description: project?.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <Link href="/projects" className={styles.back}>
        <Icon name="arrowLeft" size={16} /> All projects
      </Link>

      <header className="page-head" style={{ marginTop: "var(--space-6)" }}>
        <span className="eyebrow">
          {project.category} · {project.year}
          {project.status && ` · ${project.status}`}
        </span>
        <h1 className="page-title">{project.title}</h1>
        <p className="page-intro">{project.summary}</p>
      </header>

      <ProjectCover project={project} large />

      <div className={styles.detail}>
        <div className={styles.prose}>
          <h2>Overview</h2>
          <p className="muted">{project.description}</p>
          <h2>Highlights</h2>
          <ul className={styles.highlights}>
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <aside className={styles.facts}>
          <dl>
            <div>
              <dt className="eyebrow">Built with</dt>
              <dd>
                <ul className="chips">
                  {project.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Type</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt className="eyebrow">Year</dt>
              <dd>{project.year}</dd>
            </div>
          </dl>
          <div className={styles.factButtons}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                View live <Icon name="arrow" />
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} className="btn" target="_blank" rel="noreferrer">
                <Icon name="github" /> Source code
              </a>
            )}
          </div>
        </aside>
      </div>

      {next !== project && (
        <Link href={`/projects/${next.slug}`} className={styles.nextLink}>
          <span>
            <span className="eyebrow">Next project</span>
            <strong>{next.title}</strong>
          </span>
          <Icon name="arrowRight" size={20} />
        </Link>
      )}
    </article>
  );
}
