import { profile } from "@/data/profile";
import Icon from "./Icon";
import styles from "./StatsStrip.module.css";

// "At a glance" numbers — all from profile.stats.
export default function StatsStrip() {
  return (
    <dl className={`card ${styles.stats}`}>
      {profile.stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <span className={styles.icon}>
            <Icon name={s.icon} size={22} weight="duotone" />
          </span>
          <dt className={styles.label}>{s.label}</dt>
          <dd className={styles.value}>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
