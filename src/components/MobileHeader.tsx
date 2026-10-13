import { profile } from "@/data/profile";
import StatusDot from "./StatusDot";
import styles from "./MobileHeader.module.css";

// Compact top header shown only on phones/tablets (≤1100px).
export default function MobileHeader() {
  return (
    <header className={styles.header}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={profile.avatarSrc} alt="" width={36} height={36} className={styles.avatar} />
      <div className={styles.text}>
        <strong>{profile.name}</strong>
        <span>{profile.role}</span>
      </div>
      <StatusDot available={profile.available} text={profile.availabilityText} />
    </header>
  );
}
