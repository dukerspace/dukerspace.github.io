import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { localizedPath, stripLocale, type Locale } from '../i18n'

interface SEOProps {
  description?: string
  lang?: Locale | string
  meta?: Array<{ name?: string; property?: string; content: string }>
  keywords?: string[]
  title: string
  /** Locale-aware pathname (e.g. `/` or `/en/projects`) */
  pathname?: string
  image?: string
  /** When null, use site title alone (no "| DUKERSPACE" suffix) */
  titleTemplate?: string | null
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

function SEO({
  description,
  lang = 'th',
  meta = [],
  keywords = [],
  title,
  pathname = '',
  image,
  titleTemplate,
  jsonLd,
}: SEOProps) {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  const { siteUrl, title: siteTitle, description: defaultDescription, author } =
    data.site.siteMetadata
  const metaDescription = description || defaultDescription
  const canonical = `${siteUrl}${pathname}`
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${siteUrl}${image}`
    : `${siteUrl}/icons/icon-512x512.png`

  const resolvedTitle =
    titleTemplate === null
      ? title
      : titleTemplate !== undefined
        ? titleTemplate.replace('%s', title)
        : `${title} | ${siteTitle}`

  const barePath = stripLocale(pathname || '/')
  const thHref = `${siteUrl}${localizedPath(barePath, 'th')}`
  const enHref = `${siteUrl}${localizedPath(barePath, 'en')}`

  const metaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:site_name`,
      content: siteTitle,
    },
    {
      property: `og:url`,
      content: canonical,
    },
    {
      property: `og:locale`,
      content: lang === 'en' ? 'en_US' : 'th_TH',
    },
    {
      property: `og:locale:alternate`,
      content: lang === 'en' ? 'th_TH' : 'en_US',
    },
    {
      property: `og:image`,
      content: ogImage,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      name: `twitter:image`,
      content: ogImage,
    },
    ...(keywords.length > 0
      ? [
          {
            name: `keywords`,
            content: keywords.join(`, `),
          },
        ]
      : []),
    ...meta,
  ]

  return (
    <>
      <html lang={lang} />
      <title>{resolvedTitle}</title>
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="th" href={thHref} />
      <link rel="alternate" hrefLang="en" href={enHref} />
      <link rel="alternate" hrefLang="x-default" href={thHref} />
      {metaTags.map((tag) =>
        tag.name ? (
          <meta key={`name-${tag.name}`} name={tag.name} content={tag.content} />
        ) : (
          <meta
            key={`property-${tag.property}`}
            property={tag.property}
            content={tag.content}
          />
        )
      )}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </>
  )
}

export default SEO
