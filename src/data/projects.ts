import type { Project } from "@/types";

// Screenshots live in public/projects/. width/height are the real pixel sizes.
export const projects: Project[] = [
  {
    slug: "accounting-web-app",
    title: "Accounting Web App",
    kind: "Full-stack web app",
    summary:
      "A bookkeeping system with a live dashboard, a searchable ledger and monthly reports that export to Excel.",
    description:
      "Built for a real organization's bookkeeping. Staff record every receipt and expense in one place, see where the money stands at a glance, and produce the monthly financial report with one click. A public demo account runs on separate sample data, so anyone can try it without touching real books.",
    highlights: [
      "Dashboard with the cash balance, month-over-month changes, a receipts-vs-expenses chart and top expenses.",
      "Ledger of every receipt and expense with search, filters by type and period, and inline editing.",
      "Monthly report and year overview with opening and closing balances, plus Print and Export to Excel.",
      "Bulk import from Excel files, so existing records move over without retyping.",
      "Supabase authentication and PostgreSQL, with an isolated demo account visitors can reset or reload.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Recharts", "ExcelJS"],
    year: 2026,
    flagship: true,
    images: [
      {
        src: "/projects/accounting.jpg",
        alt: "Accounting dashboard showing the cash balance, receipts vs expenses chart and top expenses",
        width: 2160,
        height: 1350,
      },
      {
        src: "/projects/accounting-reports.jpg",
        alt: "Monthly report with opening balance, cash receipts, expenses and closing balance",
        width: 2160,
        height: 900,
      },
    ],
    liveUrl: "https://tnlf-accounting.vercel.app/",
    hideUrl: true,
    liveNote: "Click “Try the demo account” to sign in.",
  },
  {
    slug: "creator-support-navigator",
    title: "Creator Support Navigator",
    kind: "AI-assisted support tool",
    summary:
      "A support-agent tool that walks TikTok Shop creators through the app on an interactive phone, with an assistant that answers from the team's help articles.",
    description:
      "I work in TikTok creator support at Concentrix, and I built this around the questions creators ask most. It puts the creator's app on screen as an interactive phone, shows the exact tap-by-tap route to read out, and answers questions only from the team's own Academy articles and SOPs. It never browses or guesses.",
    highlights: [
      "Interactive phone that recreates the creator-side screens, with a numbered route agents can read out or copy.",
      "Academy assistant: full-text search over saved articles with MiniSearch, and optional short answers written by the Claude API from those articles only.",
      "“Show on phone” jumps from an answer straight to the matching screen.",
      "Ctrl+K screen search, light and dark themes, and a layout that fits on one screen with no scrolling.",
      "Private, password-protected deployment. The API key stays on the server and never reaches the browser.",
    ],
    tech: ["Next.js", "TypeScript", "Claude API", "MiniSearch", "Vercel"],
    year: 2026,
    flagship: true,
    images: [
      {
        src: "/projects/navigator-assistant.jpg",
        alt: "Creator Support Navigator: phone mockup on the left, assistant answer with numbered steps on the right",
        width: 2160,
        height: 1350,
      },
      {
        src: "/projects/navigator-light.jpg",
        alt: "Creator Support Navigator in light theme",
        width: 2160,
        height: 1350,
      },
      {
        src: "/projects/navigator.jpg",
        alt: "Creator Support Navigator start screen with suggested questions",
        width: 2160,
        height: 1350,
      },
    ],
    video: {
      src: "/projects/navigator-demo.webm",
      poster: "/projects/navigator-assistant.jpg",
      caption: "2-minute walkthrough: screen search, the phone route and the AI assistant",
    },
    liveNote: "Private tool. Watch the 2-minute demo.",
  },
  {
    slug: "rune-of-logic",
    title: "Rune of Logic",
    kind: "Educational game",
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
    year: 2026,
    flagship: true,
    images: [
      {
        src: "/projects/rune-play.jpg",
        alt: "Rune of Logic gameplay: pixel-art village, quest bar, and the Hero.java panel",
        width: 1770,
        height: 1029,
      },
      {
        src: "/projects/rune-title.jpg",
        alt: "Rune of Logic title screen",
        width: 1194,
        height: 837,
      },
    ],
    liveUrl: "https://rune-of-logic.vercel.app",
    liveNote: "Free to play in the browser, no install.",
    repoUrl: "https://github.com/jypeejypee/Rune-of-Logic",
  },
  {
    slug: "hangout-chat",
    title: "Hangout Chat",
    kind: "Real-time web app",
    summary:
      "Real-time chat where every message is broadcast instantly to every connected browser.",
    description:
      "A real-time chat app with a Next.js front end and a Node.js WebSocket server. Messages are pushed to all connected clients the moment they are sent, with no page refresh or polling.",
    highlights: [
      "Node.js and Express server with WebSockets that broadcasts each message to every connected client.",
      "Next.js front end that updates live as messages arrive.",
    ],
    tech: ["Next.js", "Express", "WebSockets"],
    year: 2026,
    images: [],
    repoUrl: "https://github.com/jypeejypee/hangout-app",
  },
  {
    slug: "file-drop",
    title: "File-Drop",
    kind: "Web app",
    summary: "Upload a file through a web page and get back a shareable Google Drive link.",
    description:
      "A small web app for sharing files through Google Drive. You upload from the browser and a server-side route sends the file to Drive and returns a link you can share.",
    highlights: [
      "Server-side API route handles the upload so credentials never reach the browser.",
      "Authenticates with Google using OAuth 2.0 and the Google Drive API.",
    ],
    tech: ["Next.js", "Google Drive API", "OAuth 2.0"],
    year: 2025,
    images: [],
    repoUrl: "https://github.com/jypeejypee/File-Drop",
  },
  {
    slug: "drive-ownership-transfer",
    title: "Drive Ownership Transfer",
    kind: "CLI tool",
    summary: "A command-line tool that transfers Google Drive file ownership between accounts.",
    description:
      "Moving ownership of a Google Drive file by hand takes several manual steps. This Node.js tool automates them: it grants editor access, sends the ownership transfer request, and helps the recipient accept it.",
    highlights: [
      "Uses the Google Drive API to grant access and transfer ownership between Google accounts.",
      "Saves OAuth tokens so you don't have to sign in again on every run.",
    ],
    tech: ["Node.js", "Google Drive API", "OAuth 2.0"],
    year: 2025,
    images: [],
    repoUrl: "https://github.com/jypeejypee/drive-ownership-transfer",
  },
  {
    slug: "bankcash-app",
    title: "BankCash App",
    kind: "Java back end",
    summary: "A console mobile-wallet app in Java backed by a PostgreSQL database.",
    description:
      "A mobile-wallet style application run from the console: check your balance, cash in and out, send money and view your transaction history. The data lives in PostgreSQL, accessed through JDBC.",
    highlights: [
      "Balance, cash in/out, send money and transaction history.",
      "PostgreSQL schema that enforces non-negative balances and unique accounts at the database level.",
      "Next step: a full e-wallet app, in the style of GCash, built on this back end.",
    ],
    tech: ["Java", "JDBC", "PostgreSQL"],
    year: 2026,
    status: "In progress",
    images: [],
    // PLACEHOLDER: add repoUrl back once the repo is public:
    // repoUrl: "https://github.com/jypeejypee/bankcashapp-rebuild",
  },
];

export const flagshipProjects = projects.filter((p) => p.flagship);
export const otherProjects = projects.filter((p) => !p.flagship);
