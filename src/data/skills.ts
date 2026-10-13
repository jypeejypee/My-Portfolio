import type { SkillGroup, Tool } from "@/types";

export const skills: SkillGroup[] = [
  { area: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Java", "SQL", "HTML5", "CSS3"] },
  { area: "Front end", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Responsive design"] },
  { area: "Back end", items: ["Node.js", "Express", "REST APIs", "WebSockets", "Supabase"] },
  {
    area: "Data & APIs",
    items: ["PostgreSQL", "JDBC", "Supabase Auth", "Claude API", "Google Drive API", "OAuth 2.0"],
  },
  {
    area: "Tools",
    items: ["Git", "GitHub", "VS Code", "npm", "Vercel", "AI-assisted development (Claude Code)"],
  },
];

// Logos in public/icons, shown in the scrolling "tools" strip.
export const tools: Tool[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Supabase", icon: "supabase" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Java", icon: "openjdk" },
  { name: "Express", icon: "express" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Vite", icon: "vite" },
  { name: "Claude API", icon: "anthropic" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Vercel", icon: "vercel" },
];

export const learningNow =
  "Going deeper on Java and databases at CIICC: JDBC, PostgreSQL schema design and Spring Boot.";
