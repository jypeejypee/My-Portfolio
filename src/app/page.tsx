import Link from "next/link";
import { profile } from "@/data/profile";
import { featuredProject } from "@/data/projects";
import { skills, learningNow } from "@/data/skills";
import BentoCard, { BentoGrid } from "@/components/BentoCard";
import Icon from "@/components/Icon";
import styles from "./home.module.css";

// Home = bento grid.
export default function HomePage() {
  const topSkills = skills.flatMap((g) => g.items).slice(0, 10);

  return (
    <BentoGrid>
      <BentoCard span="lg" tall>
        <span className={styles.label}>Hello, I&apos;m {profile.name.split(" ")[0]}</span>
        <h2 className={styles.headline}>{profile.headline}</h2>
        <p className="muted">{profile.location}</p>
        <div className={styles.actions}>
          <Link href="/projects" className="btn btn-primary">
            See my work <Icon name="arrow" />
          </Link>
          <Link href="/contact" className="btn">
            Get in touch
          </Link>
        </div>
      </BentoCard>

      <BentoCard span="sm">
        <span className={styles.label}>Currently learning</span>
        <p>{learningNow}</p>
      </BentoCard>

      <BentoCard span="sm">
        <span className={styles.label}>Status</span>
        <p>{profile.availabilityText}</p>
      </BentoCard>

      <BentoCard span="md">
        <span className={styles.label}>Featured project</span>
        <h3>{featuredProject.title}</h3>
        <p className="muted">{featuredProject.summary}</p>
        <Link href={`/projects/${featuredProject.slug}`} className="btn" style={{ alignSelf: "flex-start" }}>
          View project <Icon name="arrow" />
        </Link>
      </BentoCard>

      <BentoCard span="md">
        <span className={styles.label}>Tech I use</span>
        <div className={styles.chips}>
          {topSkills.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </BentoCard>
    </BentoGrid>
  );
}
