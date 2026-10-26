import { createFileRoute } from '@tanstack/react-router'

import SuthepPage from '../../../features/projects/SuthepPage'
import { localeFromParam } from '../../../i18n'
import { localizedHead } from '../../../i18n/LocalizedHead'
import { translate } from '../../../i18n/LocaleContext'
import { projectJsonLd } from '../../../seo/jsonLd'

export const Route = createFileRoute('/{-$locale}/projects/suthep')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale)
    return localizedHead({
      locale,
      path: '/projects/suthep',
      titleKey: 'suthep.seoTitle',
      descriptionKey: 'suthep.seoDescription',
      jsonLd: projectJsonLd(
        'suthep',
        locale,
        translate(locale, 'suthep.seoDescription')
      ),
    })
  },
  component: SuthepPage,
})
