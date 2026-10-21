# dukerspace.com

Personal portfolio for [Montol Saklor](https://dukerspace.com) — software engineer profile, projects, blog, and contact.

Live site: [https://dukerspace.com](https://dukerspace.com)

## Stack

- [TanStack Start](https://tanstack.com/start) SPA mode + React 19 + TypeScript
- [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS](https://tailwindcss.com/) 4
- Deployed to GitHub Pages (`gh-pages` branch)

The production build is static. There is no request-time server. Known routes are prerendered to HTML, and unknown URLs fall back to the SPA shell.

## Prerequisites

- [Bun](https://bun.sh) 1.3+

## Getting started

```bash
bun install
bun start
```

Dev server runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `bun start` / `bun dev` | Local development server |
| `bun run build` | Production build → `dist/client/` |
| `bun run serve` | Serve the production build locally |
| `bun run clean` | Remove `dist/` |
| `bun run deploy` | Build, copy CNAME and `404.html`, push to `gh-pages` |
| `bun run format` | Format with Prettier |

## Locales

Thai is the default locale (`/`). English uses the `/en/…` prefix.

User-facing copy lives in:

- [`src/i18n/messages/th.ts`](./src/i18n/messages/th.ts)
- [`src/i18n/messages/en.ts`](./src/i18n/messages/en.ts)

Keep both message files and `/` ↔ `/en/…` routes in sync when changing copy.

## Blog

Posts are Markdown files with `title`, `description`, and `date` frontmatter:

- Thai: `content/blog/th/<slug>.md`
- English: `content/blog/en/<slug>.md`

The slug is the filename. Add the same slug in both folders when a post has both languages.

## Design & agents

- Visual system: [DESIGN.md](./DESIGN.md) (“Midnight Signal”)
- Agent / contributor notes: [AGENTS.md](./AGENTS.md)

## Deploy

```bash
bun run deploy
```

Builds the site, copies [`src/CNAME`](./src/CNAME) and the SPA shell as `404.html` into `dist/client/`, writes `.nojekyll` so GitHub Pages serves assets whose names start with `_`, and publishes that folder to the `gh-pages` branch.

## License

[MIT](./LICENSE)
