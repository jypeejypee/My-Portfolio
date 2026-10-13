import styles from "./Background.module.css";

// Soft glow + slowly drifting contour lines. Pure SVG/CSS, so it costs almost nothing
// and stops moving when the visitor prefers reduced motion.
const lines = [
  "M-100 220 C 200 120, 420 360, 720 240 S 1180 80, 1600 220",
  "M-100 320 C 220 220, 460 470, 760 340 S 1200 180, 1600 330",
  "M-100 430 C 240 330, 500 580, 800 450 S 1220 290, 1600 440",
  "M-100 560 C 260 460, 540 700, 840 570 S 1240 410, 1600 560",
  "M-100 700 C 280 600, 580 830, 880 700 S 1260 540, 1600 690",
  "M-100 850 C 300 750, 620 970, 920 840 S 1280 680, 1600 830",
];

export default function Background() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <span className={styles.glow} />
      <svg className={styles.contours} viewBox="0 0 1500 1000" preserveAspectRatio="xMidYMid slice">
        {lines.map((d, i) => (
          <path key={d} d={d} className={styles.line} style={{ animationDelay: `${i * -3}s` }} />
        ))}
      </svg>
    </div>
  );
}
