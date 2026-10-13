import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { flagshipProjects } from "@/data/projects";
import { certifications, education, experience } from "@/data/experience";
import BentoCard, { BentoGrid } from "@/components/BentoCard";
import ToolsMarquee from "@/components/ToolsMarquee";
import StatsStrip from "@/components/StatsStrip";
import StatusDot from "@/components/StatusDot";
import Icon from "@/components/Icon";
import styles from "./home.module.css";

export default function HomePage() {
  const [main, second, third] = flagshipProjects;
  const recentJobs = experience.filter((j) => j.org !== "Self-directed").slice(0, 3);
  const demos = flagshipProjects.filter((p) => p.liveUrl || p.video);

  return (
    <>
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <StatusDot available={profile.available} text={profile.availabilityText} />
          <h1 className={styles.headline}>{profile.headline}</h1>
          <p className={styles.sub}>{profile.subhead}</p>
        </div>
        <div className={styles.heroActions}>
          <Link href="/contact" className="btn btn-primary">
            Get in touch <Icon name="arrow" weight="bold" />
          </Link>
          <Link href={profile.resumeHref} className="btn">
            <Icon name="file" weight="bold" /> Resume
          </Link>
        </div>
      </header>

      <StatsStrip />
      <ToolsMarquee />

      <BentoGrid>
        <BentoCard
          span={7}
          rows={2}
          icon="folder"
          title="Projects"
          description="Three shipped apps: an accounting system, an AI-assisted support tool and a game that teaches Java."
          href="/projects"
          className={styles.projectsTile}
        >
          <div className={styles.stack}>
            {third && (
              <Image
                src={third.images[0].src}
                alt=""
                width={third.images[0].width}
                height={third.images[0].height}
                sizes="320px"
                className={`${styles.shot} ${styles.shotBack2}`}
              />
            )}
            {second && (
              <Image
                src={second.images[0].src}
                alt=""
                width={second.images[0].width}
                height={second.images[0].height}
                sizes="400px"
                className={`${styles.shot} ${styles.shotBack1}`}
              />
            )}
            <Image
              src={main.images[0].src}
              alt={main.images[0].alt}
              width={main.images[0].width}
              height={main.images[0].height}
              sizes="(max-width: 1100px) 90vw, 520px"
              className={`${styles.shot} ${styles.shotFront}`}
              priority
            />
          </div>
        </BentoCard>

        <BentoCard
          span={5}
          icon="user"
          title="About"
          description="A developer who ships, with a support and engineering background."
          href="/about"
        >
          <div className={styles.about}>
            <Image
              src={profile.avatarSrc}
              alt=""
              width={180}
              height={180}
              className={styles.aboutPhoto}
            />
            <p className={styles.aboutText}>
              I support TikTok creators at Concentrix and build software for the problems I see.
              Engineering graduate, PUP.
            </p>
          </div>
        </BentoCard>

        <BentoCard span={5} icon="briefcase" title="Experience" href="/about#experience">
          <ul className={styles.jobs}>
            {recentJobs.map((j) => (
              <li key={j.org}>
                <strong>
                  {j.role}
                  {j.end === "Present" && <span className={styles.now}>Now</span>}
                </strong>
                <span>{j.org}</span>
              </li>
            ))}
          </ul>
        </BentoCard>

        <BentoCard
          span={4}
          icon="rocket"
          title="Try them"
          description="Live demos, plus a video walkthrough."
        >
          <ul className={styles.live}>
            {demos.map((p) => (
              <li key={p.slug}>
                {p.liveUrl ? (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" className={styles.liveLink}>
                    <span className={styles.liveDot} aria-hidden="true" />
                    {p.title}
                    <Icon name="arrow" size={14} weight="bold" />
                  </a>
                ) : (
                  <Link href={`/projects/${p.slug}#demo`} className={styles.liveLink}>
                    <Icon name="play" size={14} weight="fill" />
                    {p.title}
                    <span className={styles.liveTag}>Video</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </BentoCard>

        <BentoCard span={4} icon="certificate" title="Credentials">
          <ul className={styles.creds}>
            {certifications.map((c) => (
              <li key={c.name}>
                <span className={styles.badge} aria-hidden="true">
                  <Icon name="certificate" size={22} weight="duotone" />
                </span>
                <span>
                  <strong>{c.name}</strong>
                  <span>{c.issuer}</span>
                </span>
              </li>
            ))}
          </ul>
        </BentoCard>

        <BentoCard span={4} icon="graduation" title="Education">
          <ul className={styles.creds}>
            {education.slice(0, 2).map((e) => (
              <li key={e.school}>
                <span className={styles.badge} aria-hidden="true">
                  <Icon name="graduation" size={22} weight="duotone" />
                </span>
                <span>
                  <strong>{e.program}</strong>
                  <span>
                    {e.school} · {e.start}–{e.end}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </BentoCard>
      </BentoGrid>
    </>
  );
}
