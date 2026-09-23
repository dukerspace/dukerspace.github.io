---
name: locale-translator
description: >
  Keep Thai (default) and English portfolio copy in sync. Use when adding,
  updating, or deleting user-facing strings, pages, or SEO text, or when
  working on / ↔ /en/… locale routes.
---

# Locale translator (dukerspace)

Thai is the default locale at `/`. English lives under `/en/…`.

## Message files

- `src/i18n/messages/th.ts` — Thai (default)
- `src/i18n/messages/en.ts` — English

Both files must export the same keys (typed via `MessageKey`).

## CRUD sync rule

| Action | Do |
| --- | --- |
| **Add** | Add the key to **both** `th` and `en`, then wire `t('key')` (or SEO/messages) in the component/view. Add an `/en/…` page mirror if the route is new. |
| **Update** | Update the string in **both** locales (unless one side is intentionally different — say so in the change). |
| **Delete** | Remove the key from **both** locales and all `t()` / Head SEO usages. Remove orphan `/en` routes if the page is gone. |

Never ship a key that exists in only one locale.

## Routing helpers

- `localizedPath(path, locale)` — prefix `/en` when locale is `en`
- `localeFromPath(pathname)` — `en` if path starts with `/en`, else `th`
- `stripLocale(pathname)` — path without `/en` prefix
- Language switcher must map `/` ↔ `/en`, `/projects` ↔ `/en/projects`, etc.

## Verification

1. Every key in `th` exists in `en` and vice versa.
2. Thai pages render at `/…`; English counterparts at `/en/…`.
3. `html lang` is `th` or `en` to match the route; hreflang alternates present.
4. `npm run build` succeeds with both locale trees in `public/`.
