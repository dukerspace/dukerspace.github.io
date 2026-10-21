import type { Locale } from '../i18n'
import { translate } from '../i18n/LocaleContext'
import type { MessageKey } from '../i18n/messages/en'
import { pageHead } from '../components/seo'

/** Head config for locale pages. */
export function localizedHead({
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
  return pageHead({
    locale,
    path,
    title: translate(locale, titleKey),
    description: descriptionKey ? translate(locale, descriptionKey) : undefined,
    titleTemplate,
    jsonLd,
  })
}
