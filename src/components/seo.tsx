import { localizedPath, stripLocale, type Locale } from '../i18n'
import { site } from '../seo/site'

type HeadMeta =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }

/** Document head for a locale page. Replaces the old Gatsby Head/SEO component. */
export function pageHead({
  locale,
  path,
  title,
  description,
  titleTemplate,
  jsonLd,
  image,
}: {
  locale: Locale
  path: string
  title: string
  description?: string
  titleTemplate?: string | null
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  image?: string
}) {
  const pathname = localizedPath(path, locale)
  const metaDescription = description || site.description
  const canonical = `${site.siteUrl}${pathname}`
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${site.siteUrl}${image}`
    : `${site.siteUrl}/icon.png`

  const resolvedTitle =
    titleTemplate === null
      ? title
      : titleTemplate !== undefined
        ? titleTemplate.replace('%s', title)
        : `${title} | ${site.title}`

  const barePath = stripLocale(pathname || '/')
  const thHref = `${site.siteUrl}${localizedPath(barePath, 'th')}`
  const enHref = `${site.siteUrl}${localizedPath(barePath, 'en')}`

  const meta: HeadMeta[] = [
    { title: resolvedTitle },
    { name: 'description', content: metaDescription },
    { property: 'og:title', content: title },
    { property: 'og:description', content: metaDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: site.title },
    { property: 'og:url', content: canonical },
    { property: 'og:locale', content: locale === 'en' ? 'en_US' : 'th_TH' },
    {
      property: 'og:locale:alternate',
      content: locale === 'en' ? 'th_TH' : 'en_US',
    },
    { property: 'og:image', content: ogImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: site.author },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: metaDescription },
    { name: 'twitter:image', content: ogImage },
  ]

  return {
    meta,
    links: [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', href: thHref, hrefLang: 'th' },
      { rel: 'alternate', href: enHref, hrefLang: 'en' },
      { rel: 'alternate', href: thHref, hrefLang: 'x-default' },
    ],
    scripts: jsonLd
      ? [
          {
            type: 'application/ld+json',
            children: JSON.stringify(jsonLd),
          },
        ]
      : [],
  }
}
