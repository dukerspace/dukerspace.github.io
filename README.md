# dukerspace.com

Personal portfolio for [Montol Saklor](https://dukerspace.com) — software engineer profile, projects, blog, and contact.

Live site: [https://dukerspace.com](https://dukerspace.com)

## Stack

- [TanStack Router](https://tanstack.com/router) + React 19 + TypeScript + Vite
- [Tailwind CSS](https://tailwindcss.com/) 4
- Deployed to Cloudflare Pages through GitHub Actions (`production` environment)

The production build is a client-rendered SPA. Vite generates `dist/index.html` and static assets; TanStack Router renders routes in the browser. There is no TanStack Start dependency, SSR bundle, or request-time server. The sitemap includes Thai and English routes.

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
| `bun run build` | Production SPA build → `dist/` |
| `bun run serve` | Serve the production build locally |
| `bun run clean` | Remove `dist/` |
| `bun run deploy` | Build and deploy to Cloudflare Pages |
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

The [deployment workflow](./.github/workflows/deploy.yml) runs on pushes to `main` or manually through GitHub Actions. The job uses the GitHub environment named `production` and deploys `dist/` to the Cloudflare Pages project `dukerspace`. For Cloudflare Git integration, use `bun run build` as the build command and `dist` as the output directory.

In GitHub **Settings > Environments > production**, configure:

- Secret `CLOUDFLARE_API_TOKEN`: a scoped token with **Account > Cloudflare Pages > Edit** permission.
- Variable `CLOUDFLARE_ACCOUNT_ID`: the Cloudflare account ID.

The Pages project and build output are configured in [wrangler.jsonc](./wrangler.jsonc). Configure `dukerspace.com` as a custom domain on the Pages project in Cloudflare.

For a local deployment, authenticate with `bunx wrangler login`, then run:

```bash
bun run deploy
```

Do not add a top-level `404.html`: Cloudflare Pages automatically serves `index.html` for paths without a matching static asset, so direct links to Thai and English routes work with client-side routing.

## License

[MIT](./LICENSE)
