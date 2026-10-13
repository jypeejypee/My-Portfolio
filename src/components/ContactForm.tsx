"use client";

import styles from "./ContactForm.module.css";

// Opens the visitor's email app with the message pre-filled, so nothing gets lost
// without a mail service. To send from the server instead, post to an API route.
export default function ContactForm({ email }: { email: string }) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("org") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `Hello from ${name}${company ? ` (${company})` : ""}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.row}>
        <label>
          <span>Your name</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>
            Company <span className={styles.optional}>(optional)</span>
          </span>
          <input name="org" autoComplete="organization" />
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Tell me about the role or project…"
        />
      </label>
      <button type="submit" className="btn btn-primary">
        Open in my email app
      </button>
    </form>
  );
}
