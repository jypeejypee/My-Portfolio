import type { Project } from "@/types";

// Screenshots go in public/projects/ and are referenced with `image: "/projects/<file>.png"`.
export const projects: Project[] = [
  {
    slug: "rune-of-logic",
    title: "Rune of Logic",
    summary:
      "A top-down RPG that teaches Java methods and encapsulation through quests and battles.",
    description:
      "A browser RPG where Java is magic. You play an apprentice coder, and every quest is a Java idea: method anatomy, parameters, encapsulation, static vs. instance. Characters teach a concept with real code, give you a hands-on quest, then test you with a short quiz. Battles are turn-based, and every attack is a Java question.",
    highlights: [
      "About 6,700 lines across a custom game engine, map and quest system, battle system, music and in-browser save data.",
      "Engine and story kept in separate modules, so new maps, characters and lessons can be added without touching the engine.",
      "A live Hero.java panel shows the player as a Java object, and a console logs each action as Java code.",
      "Runs entirely in the browser with no backend. Progress saves locally and it works on desktop and mobile.",
    ],
    tech: ["React", "Vite", "JavaScript"],
    category: "Game",
    year: 2026,
    liveUrl: "https://rune-of-logic.vercel.app",
    repoUrl: "https://github.com/jypeejypee/Rune-of-Logic",
    featured: true,
  },
  {
    slug: "file-drop",
    title: "File-Drop",
    summary: "Upload a file through a web page and get back a shareable Google Drive link.",
    description:
      "A small web app for sharing files through Google Drive. You upload from the browser and a server-side route sends the file to Drive and returns a link you can share.",
    highlights: [
      "Server-side API route handles the upload so credentials never reach the browser.",
      "Authenticates with Google using OAuth 2.0 and the Google Drive API.",
    ],
    tech: ["Next.js", "Node.js", "Google Drive API", "OAuth 2.0"],
    category: "Web app",
    year: 2025,
    repoUrl: "https://github.com/jypeejypee/File-Drop",
  },
  {
    slug: "hangout-chat",
    title: "Hangout Chat",
    summary:
      "Real-time chat where every message is broadcast instantly to every connected browser.",
    description:
      "A real-time chat app with a Next.js front end and a Node.js WebSocket server. Messages are pushed to all connected clients the moment they are sent, with no page refresh or polling.",
    highlights: [
      "Node.js and Express server with WebSockets that broadcasts each message to every connected client.",
      "Next.js front end that updates live as messages arrive.",
    ],
    tech: ["Next.js", "Express", "WebSockets", "Node.js"],
    category: "Web app",
    year: 2026,
    repoUrl: "https://github.com/jypeejypee/hangout-app",
  },
  {
    slug: "drive-ownership-transfer",
    title: "Drive Ownership Transfer",
    summary: "A command-line tool that transfers Google Drive file ownership between accounts.",
    description:
      "Moving ownership of a Google Drive file by hand takes several manual steps. This Node.js tool automates them: it grants editor access, sends the ownership transfer request, and helps the recipient accept it.",
    highlights: [
      "Uses the Google Drive API to grant access and transfer ownership between Google accounts.",
      "Saves OAuth tokens so you don't have to sign in again on every run.",
    ],
    tech: ["Node.js", "Google Drive API", "OAuth 2.0"],
    category: "Tool",
    year: 2025,
    repoUrl: "https://github.com/jypeejypee/drive-ownership-transfer",
  },
  {
    slug: "ai-seo-landing-page",
    title: "AI SEO Landing Page",
    summary: "A responsive product landing page built with plain HTML, CSS and JavaScript.",
    description:
      "A marketing landing page for an AI SEO product, built without frameworks to practice layout, responsive design and clean, semantic HTML.",
    highlights: [
      "Features, testimonial, pricing and sign-up sections.",
      "Fully responsive from phone to desktop, with no frameworks or UI libraries.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Website",
    year: 2026,
    liveUrl: "https://jypeejypee.github.io/landing-page-v1/",
    repoUrl: "https://github.com/jypeejypee/landing-page-v1",
  },
  {
    slug: "bankcash-app",
    title: "BankCash App",
    summary: "A console mobile-wallet app in Java backed by a PostgreSQL database.",
    description:
      "A mobile-wallet style application run from the console: check your balance, cash in and out, send money and view your transaction history. The data lives in PostgreSQL, accessed through JDBC.",
    highlights: [
      "Balance, cash in/out, send money and transaction history.",
      "PostgreSQL schema that enforces non-negative balances and unique accounts at the database level.",
    ],
    tech: ["Java", "JDBC", "PostgreSQL"],
    category: "Backend",
    year: 2026,
    status: "In progress",
    repoUrl: "https://github.com/jypeejypee/bankcashapp-rebuild",
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
