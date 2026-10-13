import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Jaypee C. Vilador",
  firstName: "Jaypee",
  handle: "@jypeejypee",
  role: "Full-Stack Developer",
  headline: "I turn everyday problems into working software.",
  subhead:
    "Full-stack developer building with React, Next.js and Supabase: an accounting system, an AI-assisted support tool and a game that teaches Java.",
  bio: "Full-stack developer building practical web apps with React, Next.js and Supabase. Currently in TikTok creator support at Concentrix.",
  summary:
    "Full-stack developer who builds and deploys web applications with JavaScript, TypeScript, React, Next.js, Node.js and Supabase (PostgreSQL), including AI features with the Claude API. Currently in TikTok creator support at Concentrix, where the questions creators ask every day inspired a support tool I built. Background in engineering and operations: troubleshooting systems, working under time pressure and learning new software quickly. Seeking a software engineer or full-stack developer role.",
  story: [
    "I build web apps that solve problems I run into, and I ship them: an accounting system with a live dashboard and Excel reports, a support tool with an AI assistant, and a browser RPG that teaches Java.",
    "Right now I support TikTok creators at Concentrix. The questions creators ask every day inspired Creator Support Navigator, which maps the creator app screen by screen and answers from the team's own help articles.",
    "Before tech I studied Mechanical Engineering at PUP and worked in engineering and property operations. That taught me to troubleshoot calmly and pick up new systems fast. I'm now taking TESDA Programming (Java) NC III at CIICC.",
  ],
  location: "Rizal, Philippines",
  timezone: "GMT+8",
  email: "Jaypee.Vilador@gmail.com",
  avatarSrc: "/avatar.jpg",
  resumeHref: "/resume",
  available: true,
  availabilityText: "Open to work",
  lookingFor: "Open to software engineer, full-stack and front-end (React / Next.js) roles.",
  stats: [
    { value: "3", label: "Apps shipped", icon: "rocket" },
    { value: "Java NC III", label: "TESDA, in progress", icon: "certificate" },
    { value: "GMT+8", label: "Philippines time", icon: "clock" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/jypeejypee", icon: "github" },
    // PLACEHOLDER: add your LinkedIn, e.g.
    // { label: "LinkedIn", href: "https://linkedin.com/in/your-name", icon: "linkedin" },
  ],
};
