import type { Project } from "@/types";
import styles from "./ProjectCover.module.css";

// Demo recording inside the same browser-window frame as the screenshots.
// preload="none" keeps the page fast: the video only downloads when someone presses play.
export default function ProjectVideo({
  video,
  title,
  id,
}: {
  video: NonNullable<Project["video"]>;
  title: string;
  id?: string;
}) {
  return (
    <figure className={styles.frame} id={id}>
      <div className={styles.bar} aria-hidden="true">
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.url}>{title} · demo</span>
      </div>
      <video
        className={styles.img}
        src={video.src}
        poster={video.poster}
        controls
        preload="none"
        playsInline
        muted
        aria-label={`${title} demo video: ${video.caption}`}
      />
      <figcaption className={styles.caption}>{video.caption}</figcaption>
    </figure>
  );
}
