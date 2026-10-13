"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

// Posts to /api/contact. TODO: add real email sending + validation messages.
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") return <p>Thanks! I&apos;ll get back to you soon.</p>;

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label>
        Name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" rows={6} required />
      </label>
      {/* Honeypot: real users never see or fill this */}
      <input name="company" tabIndex={-1} autoComplete="off" className={styles.hp} aria-hidden="true" />
      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && <p role="alert">Something went wrong. Please email me directly.</p>}
    </form>
  );
}
