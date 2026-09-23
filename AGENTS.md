# AGENTS.md

Shared agent instructions for this repo. One source of truth for:

| Tool | How it loads this file |
| --- | --- |
| **Cursor** | Reads `AGENTS.md` natively |
| **ChatGPT / Codex** | Reads `AGENTS.md` natively |
| **Claude Code** | Imports via [`CLAUDE.md`](./CLAUDE.md) (`@AGENTS.md`) |

## Design

UI and visual work: follow [DESIGN.md](./DESIGN.md) as the site source of truth (Midnight Signal palette, Inter, single pink accent). The frontend-design skill guides craft quality; DESIGN.md overrides brand choices.

## Guidelines

- Behavioral baseline: [`.skills/rimping-guidelines/SKILL.md`](./.skills/rimping-guidelines/SKILL.md)
- Karpathy guidelines: [`.skills/karpathy-guidelines/SKILL.md`](./.skills/karpathy-guidelines/SKILL.md)
- Locale / translation: [`.skills/locale-translator/SKILL.md`](./.skills/locale-translator/SKILL.md)
- Frontend / UI: [`.agents/skills/frontend-design/SKILL.md`](./.agents/skills/frontend-design/SKILL.md)

## Locale

Thai is the default locale (`/`). English uses the `/en/…` prefix.

**Add, update, or delete** of any user-facing copy **must** update both [`src/i18n/messages/th.ts`](./src/i18n/messages/th.ts) and [`src/i18n/messages/en.ts`](./src/i18n/messages/en.ts), and keep `/` ↔ `/en/…` routes in sync. Follow the locale-translator skill.
