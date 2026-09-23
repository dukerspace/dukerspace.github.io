import React from 'react'

import SEO from '../components/seo'
import { localizedPath, type Locale } from '../i18n'
import { translate } from '../i18n/LocaleContext'
import type { MessageKey } from '../i18n/messages/en'

/** Head helper for locale pages — works outside LocaleProvider. */
export function LocalizedHead({
  locale,
  path,
  titleKey,
  descriptionKey,
  titleTemplate,
  jsonLd,
}: {
  locale: Locale
  path: string
  titleKey: MessageKey
  descriptionKey?: MessageKey
  titleTemplate?: string | null
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}) {
  const pathname = localizedPath(path, locale)
  return (
    <SEO
      title={translate(locale, titleKey)}
      description={
        descriptionKey ? translate(locale, descriptionKey) : undefined
      }
      lang={locale}
      pathname={pathname}
      titleTemplate={titleTemplate}
      jsonLd={jsonLd}
    />
  )
}
