import styles from "./BentoCard.module.css";

type Span = "sm" | "md" | "lg" | "full";

// One tile in the bento grid. span controls width on desktop (sm=4, md=6, lg=8, full=12 of 12 columns).
export default function BentoCard({
  span = "sm",
  tall = false,
  className = "",
  children,
}: {
  span?: Span;
  tall?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.card} ${styles[span]} ${tall ? styles.tall : ""} ${className}`}>
      {children}
    </div>
  );
}

export function BentoGrid({ children }: { children: React.ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}
