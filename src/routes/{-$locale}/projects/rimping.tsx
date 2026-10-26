import { createFileRoute } from '@tanstack/react-router'

import RimpingPage from '../../../features/projects/RimpingPage'
import { localeFromParam } from '../../../i18n'
import { localizedHead } from '../../../i18n/LocalizedHead'
import { translate } from '../../../i18n/LocaleContext'
import { projectJsonLd } from '../../../seo/jsonLd'

export const Route = createFileRoute('/{-$locale}/projects/rimping')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale)
    return localizedHead({
      locale,
      path: '/projects/rimping',
      titleKey: 'rimping.seoTitle',
      descriptionKey: 'rimping.seoDescription',
      jsonLd: projectJsonLd(
        'rimping',
        locale,
        translate(locale, 'rimping.seoDescription')
      ),
    })
  },
  component: RimpingPage,
})
