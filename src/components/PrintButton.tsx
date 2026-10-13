"use client";

import Icon from "./Icon";

// Opens the browser's print dialog, where "Save as PDF" gives a clean, ATS-readable resume.
export default function PrintButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" className={`btn btn-primary ${className}`} onClick={() => window.print()}>
      <Icon name="download" /> Save as PDF
    </button>
  );
}
