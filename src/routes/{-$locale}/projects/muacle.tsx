import { createFileRoute } from '@tanstack/react-router'

import MuaclePage from '../../../features/projects/MuaclePage'
import { localeFromParam } from '../../../i18n'
import { localizedHead } from '../../../i18n/LocalizedHead'
import { translate } from '../../../i18n/LocaleContext'
import { projectJsonLd } from '../../../seo/jsonLd'

export const Route = createFileRoute('/{-$locale}/projects/muacle')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale)
    return localizedHead({
      locale,
      path: '/projects/muacle',
      titleKey: 'muacle.seoTitle',
      descriptionKey: 'muacle.seoDescription',
      jsonLd: projectJsonLd(
        'muacle',
        locale,
        translate(locale, 'muacle.seoDescription')
      ),
    })
  },
  component: MuaclePage,
})
