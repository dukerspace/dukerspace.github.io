import React from 'react'

import FourcuzPage from '../../../views/FourcuzPage'
import { LocalizedHead } from '../../../i18n/LocalizedHead'
import { translate } from '../../../i18n/LocaleContext'
import { projectJsonLd } from '../../../seo/jsonLd'

const Page: React.FC = () => <FourcuzPage />

export default Page

export const Head = () => {
  const locale = 'en' as const
  return (
    <LocalizedHead
      locale={locale}
      path="/projects/fourcuz"
      titleKey="fourcuz.seoTitle"
      descriptionKey="fourcuz.seoDescription"
      jsonLd={projectJsonLd(
        'fourcuz',
        locale,
        translate(locale, 'fourcuz.seoDescription')
      )}
    />
  )
}
