export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "facebook" | "instagram" | "website";
};

export type Profile = {
  name: string;
  handle: string;
  role: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  avatarSrc: string;
  resumeHref: string;
  available: boolean;
  availabilityText: string;
  socials: Social[];
};

export type Tech = "React" | "Next.js" | "Node.js" | "Java" | "TypeScript" | "Spring Boot" | "SQL" | "Other";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: Tech[];
  year: number;
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export type SkillGroup = {
  area: string;
  items: string[];
};

export type Experience = {
  role: string;
  org: string;
  start: string;
  end: string;
  points: string[];
};
