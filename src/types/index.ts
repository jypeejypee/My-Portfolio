export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "facebook" | "instagram" | "website";
};

export type Stat = {
  value: string;
  label: string;
  icon: "briefcase" | "rocket" | "clock" | "certificate";
};

export type Profile = {
  name: string;
  firstName: string;
  handle: string;
  role: string;
  headline: string;
  subhead: string;
  bio: string;
  summary: string;
  story: string[];
  location: string;
  timezone: string;
  email: string;
  avatarSrc: string;
  resumeHref: string;
  available: boolean;
  availabilityText: string;
  lookingFor: string;
  stats: Stat[];
  socials: Social[];
};

export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  description: string;
  highlights: string[];
  tech: string[];
  year: number;
  /** Flagship projects get the big treatment; the rest are listed as smaller builds. */
  flagship?: boolean;
  status?: "In progress";
  images: Screenshot[];
  liveUrl?: string;
  /** Hide the live URL text (the link still works), e.g. when the domain names a client. */
  hideUrl?: boolean;
  /** Short note shown next to the live link, e.g. how to get in. */
  liveNote?: string;
  repoUrl?: string;
};

export type SkillGroup = {
  area: string;
  items: string[];
};

export type Job = {
  role: string;
  org: string;
  start: string;
  end: string;
  points: string[];
};

export type Education = {
  program: string;
  school: string;
  start: string;
  end: string;
};

export type Certification = {
  name: string;
  issuer: string;
};

export type Tool = {
  name: string;
  /** File name in public/icons (without .svg). */
  icon: string;
};
