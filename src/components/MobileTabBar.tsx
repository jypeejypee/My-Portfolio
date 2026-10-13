"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActive } from "@/lib/nav";
import Icon, { type IconName } from "./Icon";
import styles from "./MobileTabBar.module.css";

const left = [
  { href: "/", label: "Home", icon: "house" },
  { href: "/projects", label: "Work", icon: "folder" },
] as const;
const right = [
  { href: "/about", label: "About", icon: "user" },
  { href: "/resume", label: "Resume", icon: "file" },
] as const;

// App-style floating tab bar with a raised Contact button, phones/tablets only (≤1100px).
export default function MobileTabBar() {
  const pathname = usePathname();

  const tab = (item: { href: string; label: string; icon: IconName }) => {
    const active = isActive(item.href, pathname);
    return (
      <Link
        key={item.href}
        href={item.href}
        className={`${styles.tab} ${active ? styles.active : ""}`}
        aria-current={active ? "page" : undefined}
      >
        <Icon name={item.icon} size={22} weight={active ? "fill" : "regular"} />
        <span>{item.label}</span>
      </Link>
    );
  };

  const contactActive = isActive("/contact", pathname);
  return (
    <nav className={styles.bar} aria-label="Main">
      {left.map(tab)}
      <Link
        href="/contact"
        className={styles.center}
        aria-label="Contact"
        aria-current={contactActive ? "page" : undefined}
      >
        <Icon name="envelope" size={26} weight="bold" />
      </Link>
      {right.map(tab)}
    </nav>
  );
}
