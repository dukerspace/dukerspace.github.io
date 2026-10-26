import { createFileRoute } from '@tanstack/react-router'

import FourcuzPage from '../../../features/projects/FourcuzPage'
import { localeFromParam } from '../../../i18n'
import { localizedHead } from '../../../i18n/LocalizedHead'
import { translate } from '../../../i18n/LocaleContext'
import { projectJsonLd } from '../../../seo/jsonLd'

export const Route = createFileRoute('/{-$locale}/projects/fourcuz')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale)
    return localizedHead({
      locale,
      path: '/projects/fourcuz',
      titleKey: 'fourcuz.seoTitle',
      descriptionKey: 'fourcuz.seoDescription',
      jsonLd: projectJsonLd(
        'fourcuz',
        locale,
        translate(locale, 'fourcuz.seoDescription')
      ),
    })
  },
  component: FourcuzPage,
})
