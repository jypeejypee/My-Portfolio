import styles from "./StatusDot.module.css";

export default function StatusDot({ available, text }: { available: boolean; text: string }) {
  return (
    <span className={styles.status}>
      <span className={`${styles.dot} ${available ? styles.on : ""}`} aria-hidden="true" />
      {text}
    </span>
  );
}
