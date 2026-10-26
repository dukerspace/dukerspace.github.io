import type { Locale } from '../../i18n'

export type BlogPost = {
  slug: string
  locale: Locale
  title: string
  description: string
  date: string
  body: string
}

const rawPosts = import.meta.glob('../../../content/blog/*/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(raw: string): {
  data: Record<string, string>
  body: string
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw.trim() }

  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    if (key) data[key] = value
  }

  return { data, body: match[2].trim() }
}

function loadPosts(): BlogPost[] {
  return Object.entries(rawPosts).flatMap(([filePath, raw]) => {
    const parts = filePath.split('/')
    const file = parts[parts.length - 1] ?? ''
    const folder = parts[parts.length - 2]
    if (folder !== 'th' && folder !== 'en') return []
    if (!file.endsWith('.md')) return []

    const { data, body } = parseFrontmatter(raw)
    const slug = file.slice(0, -3)
    return [
      {
        slug,
        locale: folder,
        title: data.title || slug,
        description: data.description || '',
        date: data.date || '',
        body,
      },
    ]
  })
}

const posts = loadPosts()

export function postsFor(locale: Locale): BlogPost[] {
  return posts
    .filter((post) => post.locale === locale)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function postBySlug(locale: Locale, slug: string): BlogPost | undefined {
  return postsFor(locale).find((post) => post.slug === slug)
}
