"use client";

import { useState } from "react";
import Icon from "./Icon";
import styles from "./CopyEmail.module.css";

// Shows the email address with a one-click copy button.
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className={styles.wrap}>
      <a href={`mailto:${email}`} className={styles.email}>
        {email}
      </a>
      <button type="button" onClick={copy} className={styles.copy}>
        <Icon name={copied ? "check" : "copy"} />
        <span aria-live="polite">{copied ? "Copied!" : "Copy email"}</span>
      </button>
    </div>
  );
}
