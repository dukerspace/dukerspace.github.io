import React from 'react'

import SuthepPage from '../../views/SuthepPage'
import { LocalizedHead } from '../../i18n/LocalizedHead'
import { translate } from '../../i18n/LocaleContext'
import { projectJsonLd } from '../../seo/jsonLd'

const Page: React.FC = () => <SuthepPage />

export default Page

export const Head = () => {
  const locale = 'th' as const
  return (
    <LocalizedHead
      locale={locale}
      path="/projects/suthep"
      titleKey="suthep.seoTitle"
      descriptionKey="suthep.seoDescription"
      jsonLd={projectJsonLd(
        'suthep',
        locale,
        translate(locale, 'suthep.seoDescription')
      )}
    />
  )
}
