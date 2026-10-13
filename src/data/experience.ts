import type { Certification, Education, Job } from "@/types";

export const experience: Job[] = [
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
    points: [
      "Diagnosed and resolved complex system issues using structured problem-solving.",
      "Maintained high-reliability systems under operational pressure.",
    ],
  },
  {
    role: "Property Manager",
    org: "First Oceanic Property Management",
    start: "Aug 2018",
    end: "Mar 2023",
    points: [
      "Managed operations, reporting and system workflows.",
      "Improved efficiency through structured tracking and process optimization.",
    ],
  },
  {
    role: "Shift Engineer",
    org: "The Medical City",
    start: "Aug 2016",
    end: "Sep 2017",
    points: ["Managed maintenance workflows using digital systems (CMMS)."],
  },
  {
    // PLACEHOLDER: add your job title at Eastkem.
    role: "",
    org: "Eastkem Industrial Inc.",
    start: "Jan 2016",
    end: "Aug 2016",
    points: [],
  },
];

export const education: Education[] = [
  {
    program: "Java Programming and Software Development",
    school: "CIICC",
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
