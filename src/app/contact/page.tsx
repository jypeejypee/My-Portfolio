import type { Metadata } from "next";
import { profile } from "@/data/profile";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <h1 className="page-title">Contact</h1>
      <p className="page-intro">
        PLACEHOLDER — what you&apos;re open to. Or email me at{" "}
        <a href={`mailto:${profile.email}`} style={{ color: "var(--color-accent)" }}>
          {profile.email}
        </a>
        .
      </p>
      <ContactForm />
    </>
  );
}
