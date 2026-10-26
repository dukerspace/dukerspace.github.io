# dukerspace.com

Personal portfolio for [Montol Saklor](https://dukerspace.com) — software engineer profile, projects, blog, and contact.

Live site: [https://dukerspace.com](https://dukerspace.com)

## Stack

- [TanStack Start](https://tanstack.com/start) SPA mode + React 19 + TypeScript
- [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS](https://tailwindcss.com/) 4
- Deployed to Cloudflare Workers through GitHub Actions (`production` environment)

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
| `bun run deploy` | Build and deploy the production Cloudflare Worker |
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

The [deployment workflow](./.github/workflows/deploy.yml) runs on pushes to `main` or manually through GitHub Actions. The job uses the GitHub environment named `production` and deploys with `wrangler deploy --env production`.

In GitHub **Settings > Environments > production**, add these environment secrets:

- `CLOUDFLARE_API_TOKEN`: a scoped token with the **Edit Cloudflare Workers** permissions.
- `CLOUDFLARE_ACCOUNT_ID`: the Cloudflare account ID.

The Worker is named `dukerspace-production` in [wrangler.jsonc](./wrangler.jsonc). Change it if deploying to an existing Worker with a different name. Configure `dukerspace.com` as its custom domain in Cloudflare; the GitHub Pages `CNAME` file does not configure Worker domains.

For a local deployment, authenticate with `bunx wrangler login`, then run:

```bash
bun run deploy
```

The existing preparation script copies the SPA shell as `404.html` into `dist/client/`. Cloudflare serves prerendered pages with extensionless URLs and uses that shell for unknown URLs, retaining a 404 response status.

## License

[MIT](./LICENSE)
