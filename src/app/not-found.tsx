import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", paddingTop: "var(--space-16)" }}>
      <span className="eyebrow">Error 404</span>
      <h1 className="page-title">Page not found</h1>
      <p className="page-intro" style={{ margin: "0 auto var(--space-8)" }}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="btn btn-primary">
        <Icon name="arrowLeft" /> Back home
      </Link>
    </div>
  );
}
