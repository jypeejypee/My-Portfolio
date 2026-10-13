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
  return {
    title: project?.title ?? "Project",
    description: project?.summary,
    ...(project?.images[0] && { openGraph: { images: [project.images[0].src] } }),
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const [cover, ...gallery] = project.images;

  return (
    <article>
      <Link href="/projects" className={styles.back}>
        <Icon name="arrowLeft" size={16} weight="bold" /> All projects
      </Link>

      <header className="page-head" style={{ marginTop: "var(--space-6)" }}>
        <span className="eyebrow">
          {project.kind} · {project.year}
          {project.status && ` · ${project.status}`}
        </span>
        <h1 className="page-title">{project.title}</h1>
        <p className="page-intro">{project.summary}</p>
        <div className={`btn-row ${styles.heroActions}`}>
          {project.liveUrl && (
            <a href={project.liveUrl} className="btn btn-accent" target="_blank" rel="noreferrer">
              Open live demo <Icon name="arrow" weight="bold" />
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} className="btn" target="_blank" rel="noreferrer">
              <Icon name="github" weight="bold" /> Source code
            </a>
          )}
        </div>
        {project.liveNote && (
          <p className={styles.note}>
            <Icon name={project.liveNote.startsWith("Password") ? "lock" : "sparkle"} size={16} />
            {project.liveNote}
          </p>
        )}
      </header>

      {cover && (
        <ProjectCover
          image={cover}
          url={project.hideUrl ? undefined : project.liveUrl}
          priority
          sizes="(max-width: 1100px) 100vw, 1120px"
        />
      )}
      {gallery.length > 0 && (
        <div className={styles.gallery}>
          {gallery.map((img) => (
            <ProjectCover
              key={img.src}
              image={img}
              url={project.hideUrl ? undefined : project.liveUrl}
              sizes="(max-width: 1100px) 100vw, 560px"
            />
          ))}
        </div>
      )}

      <div className={styles.detail}>
        <div className={styles.prose}>
          <h2>Overview</h2>
          <p className="muted">{project.description}</p>
          <h2>What I built</h2>
          <ul className={styles.highlights}>
            {project.highlights.map((h) => (
              <li key={h}>
                <Icon name="check" size={18} weight="bold" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className={`card ${styles.facts}`}>
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
              <dd>{project.kind}</dd>
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
                View live <Icon name="arrow" weight="bold" />
              </a>
            )}
            <Link href="/contact" className="btn">
              <Icon name="envelope" weight="bold" /> Ask me about it
            </Link>
          </div>
        </aside>
      </div>

      {next !== project && (
        <Link href={`/projects/${next.slug}`} className={`card ${styles.nextLink}`}>
          <span>
            <span className="eyebrow">Next project</span>
            <strong>{next.title}</strong>
          </span>
          <Icon name="arrowRight" size={24} weight="bold" />
        </Link>
      )}
    </article>
  );
}
