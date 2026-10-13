import type { Project } from "@/types";

// PLACEHOLDER projects — replace with your own. Put screenshots in public/projects/.
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "PLACEHOLDER Project One",
    summary: "A Next.js web app that solves a real problem.",
    description: "PLACEHOLDER — the problem, what you built, your role, and the result.",
    tech: ["Next.js", "TypeScript", "Node.js"],
    year: 2026,
    featured: true,
  },
  {
    slug: "project-two",
    title: "PLACEHOLDER Project Two",
    summary: "A REST API built with Spring Boot.",
    description: "PLACEHOLDER — describe the API, endpoints, database, and deployment.",
    tech: ["Java", "Spring Boot", "SQL"],
    year: 2025,
  },
  {
    slug: "project-three",
    title: "PLACEHOLDER Project Three",
    summary: "A React dashboard with charts and filters.",
    description: "PLACEHOLDER — describe the features and what you learned.",
    tech: ["React", "TypeScript"],
    year: 2025,
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
