import styles from "./Background.module.css";

// TODO: replace this with a Three.js shader canvas (client component).
// For now it's a cheap CSS gradient so the layout is complete.
export default function Background() {
  return <div className={styles.bg} aria-hidden="true" />;
}
