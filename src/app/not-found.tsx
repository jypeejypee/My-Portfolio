import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", paddingTop: "var(--space-12)" }}>
      <h1 className="page-title">404</h1>
      <p className="page-intro" style={{ margin: "0 auto var(--space-6)" }}>
        This page doesn&apos;t exist.
      </p>
      <Link href="/" className="btn btn-primary">
        Back home
      </Link>
    </div>
  );
}
