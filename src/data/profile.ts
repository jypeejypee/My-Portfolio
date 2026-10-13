import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Jaypee C. Vilador",
  firstName: "Jaypee",
  handle: "@jypeejypee",
  role: "Full-Stack Developer",
  headline: "Mechanical engineer turned full‑stack developer.",
  subhead:
    "I build complete, working web apps, from an accounting system to an AI support assistant, with React, Next.js, Supabase and Node.js.",
  bio: "Full-stack developer with 7+ years of engineering experience. I build and ship web apps with React, Next.js and Supabase.",
  summary:
    "Full-stack developer with hands-on experience building and deploying web applications with JavaScript, TypeScript, React and Next.js, backed by Supabase (PostgreSQL) and Node.js. Brings 7+ years of engineering experience in structured problem-solving and system operations, with a strong focus on clean, maintainable code and real-world solutions.",
  story: [
    "I studied Mechanical Engineering at the Polytechnic University of the Philippines and spent 7+ years keeping plants, buildings and hospital systems running as a shift engineer, property manager and plant engineer.",
    "That work was all about diagnosing problems under pressure and building reliable processes. Software turned out to be the same job with better tools, so I made the switch.",
    "Since then I've built and deployed full-stack apps: an accounting system with a live dashboard and Excel reports, an AI-assisted support tool, and a browser RPG that teaches Java. I'm now deepening my Java and database skills at CIICC.",
  ],
  location: "Rizal, Philippines",
  timezone: "GMT+8",
  email: "Jaypee.Vilador@gmail.com",
  avatarSrc: "/avatar.jpg",
  resumeHref: "/resume",
  available: true,
  availabilityText: "Open to work",
  lookingFor: "Open to full-stack, front-end and React / Next.js developer roles.",
  stats: [
    { value: "7+ yrs", label: "Engineering experience", icon: "briefcase" },
    { value: "3", label: "Live apps shipped", icon: "rocket" },
    { value: "GMT+8", label: "Philippines time", icon: "clock" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/jypeejypee", icon: "github" },
    // PLACEHOLDER: add your LinkedIn, e.g.
    // { label: "LinkedIn", href: "https://linkedin.com/in/your-name", icon: "linkedin" },
  ],
};
