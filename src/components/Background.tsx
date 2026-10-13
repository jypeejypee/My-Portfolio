import styles from "./Background.module.css";

// Subtle grid with a soft glow. Pure CSS, so it costs nothing at runtime.
export default function Background() {
  return <div className={styles.bg} aria-hidden="true" />;
}
