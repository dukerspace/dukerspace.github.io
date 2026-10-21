import { createFileRoute } from '@tanstack/react-router'

import ZlalabsPage from '../../../views/ZlalabsPage'
import { localeFromParam } from '../../../i18n'
import { localizedHead } from '../../../i18n/LocalizedHead'
import { translate } from '../../../i18n/LocaleContext'
import { projectJsonLd } from '../../../seo/jsonLd'

export const Route = createFileRoute('/{-$locale}/projects/zlalabs')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale)
    return localizedHead({
      locale,
      path: '/projects/zlalabs',
      titleKey: 'zlalabs.seoTitle',
      descriptionKey: 'zlalabs.seoDescription',
      jsonLd: projectJsonLd(
        'zlalabs',
        locale,
        translate(locale, 'zlalabs.seoDescription')
      ),
    })
  },
  component: ZlalabsPage,
})
