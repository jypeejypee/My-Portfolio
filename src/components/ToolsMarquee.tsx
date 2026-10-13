import { tools } from "@/data/skills";
import styles from "./ToolsMarquee.module.css";

// Endless scrolling strip of the tools I use. The list is rendered twice so the loop is seamless;
// the copy is hidden from screen readers.
export default function ToolsMarquee() {
  const row = (hidden: boolean) => (
    <ul className={styles.row} aria-hidden={hidden || undefined}>
      {tools.map((t) => (
        <li key={t.name} className={styles.tool}>
          {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVGs */}
          <img src={`/icons/${t.icon}.svg`} alt="" width={22} height={22} className={styles.logo} />
          <span>{t.name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className={`card ${styles.wrap}`} aria-labelledby="tools-title">
      <div className={styles.label}>
        <span className="eyebrow">Daily drivers</span>
        <h2 id="tools-title" className={styles.title}>
          Tools I build with
        </h2>
      </div>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
