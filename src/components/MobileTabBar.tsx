import NavLinks from "./NavLinks";
import styles from "./MobileTabBar.module.css";

// App-style bottom tab bar, phones/tablets only (≤1100px).
export default function MobileTabBar() {
  return (
    <nav className={styles.bar} aria-label="Main">
      <NavLinks className={styles.tab} activeClass={styles.active} />
    </nav>
  );
}
