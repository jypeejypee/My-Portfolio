# Portfolio

My personal portfolio website, built with **Next.js 16, React 19 and TypeScript**.

## Tech stack

- Next.js (App Router) + React Server Components
- TypeScript
- CSS Modules with design tokens (CSS variables)
- Phosphor Icons

## Running locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `npm run dev`    | Start the development server |
| `npm run build`  | Create a production build    |
| `npm run start`  | Run the production build     |
| `npm run format` | Format code with Prettier    |

## Project structure

```
src/
  app/          Routes and API handlers
  components/   UI components and their CSS Modules
  data/         Site content (profile, projects, skills, experience)
  lib/          Helpers
  styles/       Design tokens and global styles
public/         Static assets
```
