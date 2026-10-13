import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import styles from "./BentoCard.module.css";

type Span = 4 | 5 | 6 | 7 | 8 | 12;

// One tile in the bento grid: orange icon, title, one line of text, then any content.
// With `href`, the whole tile becomes a link (the title link is stretched over the card).
export default function BentoCard({
  span = 4,
  rows = 1,
  icon,
  title,
  description,
  href,
  className = "",
  children,
}: {
  span?: Span;
  rows?: 1 | 2;
  icon: IconName;
  title: string;
  description?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <article
      className={`${styles.card} ${span <= 5 ? styles.half : ""} ${href ? styles.linked : ""} ${className}`}
      style={{ "--span": span, "--rows": rows } as React.CSSProperties}
    >
      <header className={styles.head}>
        <span className="icon-tile">
          <Icon name={icon} size={20} weight="fill" />
        </span>
        <h2 className={styles.title}>
          {href ? (
            <Link href={href} className={styles.stretch}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {href && (
          <span className={styles.arrow} aria-hidden="true">
            <Icon name="arrow" size={18} weight="bold" />
          </span>
        )}
      </header>
      {description && <p className={styles.desc}>{description}</p>}
      {children}
    </article>
  );
}

export function BentoGrid({ children }: { children: React.ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}
