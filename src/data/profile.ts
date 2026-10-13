import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Jaypee C. Vilador",
  firstName: "Jaypee",
  handle: "@jypeejypee",
  role: "Junior Full-Stack Developer",
  headline:
    "I build complete, working web apps, from React front ends to Node.js and Java back ends.",
  bio: "Full-stack developer in the Philippines building with React, Next.js, Node.js and Java.",
  summary:
    "Junior full-stack developer who builds complete, working projects: a React game that teaches Java, real-time chat with WebSockets, and tools that automate Google Drive. Comfortable on the front end (React, Next.js, responsive HTML/CSS) and the back end (Node.js, Express, Java, PostgreSQL). Currently deepening my Java and database skills.",
  location: "Philippines",
  timezone: "GMT+8",
  email: "Jaypee.Vilador@gmail.com",
  // PLACEHOLDER: put a real photo at public/avatar.jpg and change this path.
  avatarSrc: "/avatar.svg",
  resumeHref: "/resume",
  available: true,
  availabilityText: "Open to work",
  lookingFor: "Open to junior full-stack, front-end and Java developer roles.",
  socials: [
    { label: "GitHub", href: "https://github.com/jypeejypee", icon: "github" },
    // PLACEHOLDER: add your LinkedIn, e.g.
    // { label: "LinkedIn", href: "https://linkedin.com/in/your-name", icon: "linkedin" },
  ],
};
