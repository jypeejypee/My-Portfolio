import Image from "next/image";
import type { Screenshot } from "@/types";
import styles from "./ProjectCover.module.css";

// A screenshot shown inside a small browser window frame.
export default function ProjectCover({
  image,
  url,
  sizes = "(max-width: 1100px) 100vw, 640px",
  priority = false,
  className = "",
}: {
  image: Screenshot;
  url?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`${styles.frame} ${className}`}>
      <div className={styles.bar} aria-hidden="true">
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        {url && (
          <span className={styles.url}>{url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
        )}
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className={styles.img}
      />
    </figure>
  );
}
