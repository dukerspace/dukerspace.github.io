# dukerspace.com

Personal portfolio for [Montol Saklor](https://dukerspace.com) — software engineer profile, projects, and contact.

Live site: [https://dukerspace.com](https://dukerspace.com)

## Stack

- [Gatsby](https://www.gatsbyjs.com/) 5 + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) 4
- Deployed to GitHub Pages (`gh-pages` branch)

## Prerequisites

- Node.js `>=18 <26` (see `package.json` engines)

## Getting started

```bash
npm install
npm start
```

Dev server runs at [http://localhost:8000](http://localhost:8000).

## Scripts

| Command | Description |
| --- | --- |
| `npm start` / `npm run develop` | Local development server |
| `npm run build` | Production build → `public/` |
| `npm run serve` | Serve the production build locally |
| `npm run clean` | Clear Gatsby cache and `public/` |
| `npm run deploy` | Clean, build, copy CNAME, push to `gh-pages` |
| `npm run format` | Format with Prettier |

## Locales

Thai is the default locale (`/`). English uses the `/en/…` prefix.

User-facing copy lives in:

- [`src/i18n/messages/th.ts`](./src/i18n/messages/th.ts)
- [`src/i18n/messages/en.ts`](./src/i18n/messages/en.ts)

Keep both message files and `/` ↔ `/en/…` routes in sync when changing copy.

## Design & agents

- Visual system: [DESIGN.md](./DESIGN.md) (“Midnight Signal”)
- Agent / contributor notes: [AGENTS.md](./AGENTS.md)

## Deploy

```bash
npm run deploy
```

Builds the site, copies [`src/CNAME`](./src/CNAME) into `public/`, and publishes to the `gh-pages` branch.

## License

[MIT](./LICENSE)
