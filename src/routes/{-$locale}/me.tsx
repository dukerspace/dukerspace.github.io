import { createFileRoute } from '@tanstack/react-router'

import AboutMePage from '../../features/about/AboutMePage'
import { localeFromParam } from '../../i18n'
import { localizedHead } from '../../i18n/LocalizedHead'
import { personJsonLd } from '../../seo/jsonLd'

export const Route = createFileRoute('/{-$locale}/me')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale)
    return localizedHead({
      locale,
      path: '/me',
      titleKey: 'me.seoTitle',
      descriptionKey: 'me.seoDescription',
      jsonLd: personJsonLd(locale),
    })
  },
  component: AboutMePage,
})
