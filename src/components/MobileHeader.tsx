import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";
import styles from "./MobileHeader.module.css";

// Compact top header shown only on phones/tablets (≤1100px).
export default function MobileHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.who}>
        <Image
          src={profile.avatarSrc}
          alt=""
          width={88}
          height={88}
          className={styles.avatar}
          priority
        />
        <span className={styles.text}>
          <strong>{profile.name}</strong>
          <span>{profile.role}</span>
        </span>
      </Link>
      <ThemeToggle className={styles.toggle} />
    </header>
  );
}
