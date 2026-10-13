import Image from "next/image";
import { profile } from "@/data/profile";
import Icon from "./Icon";
import NavLinks from "./NavLinks";
import StatusDot from "./StatusDot";
import ThemeToggle from "./ThemeToggle";
import styles from "./ProfileRail.module.css";

// Fixed left sidebar on desktop. Hidden at ≤1100px (MobileHeader + MobileTabBar take over).
export default function ProfileRail() {
  return (
    <aside className={styles.rail}>
      <div className={styles.top}>
        <div className={styles.avatarWrap}>
          <Image
            src={profile.avatarSrc}
            alt={profile.name}
            width={264}
            height={264}
            className={styles.avatar}
            priority
          />
        </div>
        <p className={styles.name}>{profile.name}</p>
        <p className={styles.role}>
          {profile.role} · {profile.handle}
        </p>
        <StatusDot available={profile.available} text={profile.availabilityText} />

        <div className={styles.circles}>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className={styles.circle}
            >
              <Icon name={s.icon} size={20} weight="bold" />
            </a>
          ))}
          <a href={`mailto:${profile.email}`} aria-label="Email" className={styles.circle}>
            <Icon name="envelope" size={20} weight="bold" />
          </a>
          <ThemeToggle className={styles.circle} />
        </div>
      </div>

      <nav className={styles.nav} aria-label="Main">
        <NavLinks className={styles.link} activeClass={styles.active} />
      </nav>

      <div className={styles.bottom}>
        <p className={styles.meta}>
          <Icon name="pin" size={16} /> {profile.location} · {profile.timezone}
        </p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </aside>
  );
}
