export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "facebook" | "instagram" | "website";
};

export type Profile = {
  name: string;
  firstName: string;
  handle: string;
  role: string;
  headline: string;
  bio: string;
  summary: string;
  location: string;
  timezone: string;
  email: string;
  avatarSrc: string;
  resumeHref: string;
  available: boolean;
  availabilityText: string;
  lookingFor: string;
  socials: Social[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  tech: string[];
  category: "Game" | "Web app" | "Tool" | "Website" | "Backend";
  year: number;
  status?: "In progress";
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export type SkillGroup = {
  area: string;
  items: string[];
};

export type Education = {
  program: string;
  school: string;
  start: string;
  end: string;
  points: string[];
};
