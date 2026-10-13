import type { Certification, Education, Job } from "@/types";

// Keep every line here true and modest. Software roles first, then earlier work.
export const experience: Job[] = [
  {
    // PLACEHOLDER: replace with your exact job title if it differs.
    role: "TikTok Creator Support",
    org: "Concentrix · ByteDance (TikTok) account",
    start: "Jan 2026",
    end: "Present",
    points: [
      "Help TikTok Shop creators resolve their questions and in-app problems.",
      "Built Creator Support Navigator, a side project based on the questions creators ask most: an interactive map of the creator app with an assistant that answers from Academy articles.",
    ],
  },
  {
    role: "Full-Stack Developer (independent projects)",
    org: "Self-directed",
    start: "2025",
    end: "Present",
    points: [
      "Built and deployed an accounting web app with Next.js and Supabase: authentication, a live dashboard, a searchable ledger and Excel export.",
      "Built an AI-assisted support tool with Next.js, full-text search and the Claude API.",
      "Built a browser RPG in React that teaches Java concepts through quests and quizzes.",
    ],
  },
  {
    role: "Plant Engineer / Facilities Engineer",
    org: "GSI / CBTL / EDI",
    start: "Oct 2023",
    end: "Aug 2024",
    points: ["Diagnosed and resolved equipment and building-system issues under time pressure."],
  },
  {
    role: "Property Manager",
    org: "First Oceanic Property Management",
    start: "Aug 2018",
    end: "Mar 2023",
    points: [
      "Supported the team in using the company's property management software.",
      "Handled day-to-day property operations and reports.",
    ],
  },
  {
    role: "Shift Engineer",
    org: "The Medical City",
    start: "Aug 2016",
    end: "Sep 2017",
    points: [
      "Assisted the engineering team and monitored building systems and maintenance tasks in a CMMS (maintenance software).",
    ],
  },
];

export const education: Education[] = [
  {
    program: "Programming (Java) NC III",
    school: "CIICC · TESDA",
    start: "2026",
    end: "Present",
  },
  {
    program: "BS Mechanical Engineering",
    school: "Polytechnic University of the Philippines",
    start: "2010",
    end: "2015",
  },
  {
    program: "Secondary education",
    school: "Rizal National Science High School",
    start: "2006",
    end: "2010",
  },
];

export const certifications: Certification[] = [
  { name: "Responsive Web Design", issuer: "freeCodeCamp" },
  { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp" },
];
