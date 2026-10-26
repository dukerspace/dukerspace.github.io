import { createFileRoute } from '@tanstack/react-router'

import HomePage from '../../features/home/HomePage'
import { localeFromParam } from '../../i18n'
import { localizedHead } from '../../i18n/LocalizedHead'
import { translate } from '../../i18n/LocaleContext'
import { personJsonLd, websiteJsonLd } from '../../seo/jsonLd'

export const Route = createFileRoute('/{-$locale}/')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale)
    return localizedHead({
      locale,
      path: '/',
      titleKey: 'home.seoTitle',
      descriptionKey: 'home.seoDescription',
      titleTemplate: null,
      jsonLd: [
        websiteJsonLd(locale, translate(locale, 'home.seoDescription')),
        personJsonLd(locale),
      ],
    })
  },
  component: HomePage,
})
