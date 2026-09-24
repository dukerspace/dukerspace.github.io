import React from 'react'

import ZlalabsPage from '../../views/ZlalabsPage'
import { LocalizedHead } from '../../i18n/LocalizedHead'
import { translate } from '../../i18n/LocaleContext'
import { projectJsonLd } from '../../seo/jsonLd'

const Page: React.FC = () => <ZlalabsPage />

export default Page

export const Head = () => {
  const locale = 'th' as const
  return (
    <LocalizedHead
      locale={locale}
      path="/projects/zlalabs"
      titleKey="zlalabs.seoTitle"
      descriptionKey="zlalabs.seoDescription"
      jsonLd={projectJsonLd(
        'zlalabs',
        locale,
        translate(locale, 'zlalabs.seoDescription')
      )}
    />
  )
}
