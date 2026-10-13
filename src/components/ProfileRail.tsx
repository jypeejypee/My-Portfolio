import Link from "next/link";
import { profile } from "@/data/profile";
import Icon from "./Icon";
import NavLinks from "./NavLinks";
import StatusDot from "./StatusDot";
import styles from "./ProfileRail.module.css";

// Fixed left sidebar on desktop. Hidden at ≤1100px (MobileHeader + MobileTabBar take over).
export default function ProfileRail() {
  return (
    <aside className={styles.rail}>
      <div className={styles.top}>
        {/* eslint-disable-next-line @next/next/no-img-element -- swap to next/image when you add a real photo */}
        <img
          src={profile.avatarSrc}
          alt={profile.name}
          width={72}
          height={72}
          className={styles.avatar}
        />
        <div>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.role}>{profile.role}</p>
        </div>
        <StatusDot available={profile.available} text={profile.availabilityText} />
        <p className={styles.bio}>{profile.bio}</p>
        <p className={styles.meta}>
          <Icon name="pin" size={16} /> {profile.location} · {profile.timezone}
        </p>
      </div>

      <nav className={styles.nav} aria-label="Main">
        <NavLinks className={styles.link} activeClass={styles.active} />
      </nav>

      <div className={styles.bottom}>
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          <Icon name="envelope" /> Email me
        </a>
        <div className={styles.row}>
          <Link href={profile.resumeHref} className={`btn ${styles.grow}`}>
            <Icon name="file" /> Resume
          </Link>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className={styles.social}
            >
              <Icon name={s.icon} size={20} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
