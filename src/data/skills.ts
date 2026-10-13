import type { SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  { area: "Languages", items: ["JavaScript (ES6+)", "Java", "SQL", "HTML5", "CSS3", "TypeScript"] },
  { area: "Front end", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Responsive design"] },
  { area: "Back end", items: ["Node.js", "Express", "REST APIs", "WebSockets"] },
  { area: "Data & APIs", items: ["PostgreSQL", "JDBC", "Google Drive API", "OAuth 2.0"] },
  { area: "Tools", items: ["Git", "GitHub", "VS Code", "npm", "Vercel", "GitHub Pages"] },
];

// Short list shown on the home page.
export const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Java",
  "PostgreSQL",
  "WebSockets",
];

export const learningNow =
  "Going deeper on Java and databases: JDBC, PostgreSQL schema design and Spring Boot.";
