import React from 'react'

import MuaclePage from '../../views/MuaclePage'
import { LocalizedHead } from '../../i18n/LocalizedHead'
import { translate } from '../../i18n/LocaleContext'
import { projectJsonLd } from '../../seo/jsonLd'

const Page: React.FC = () => <MuaclePage />

export default Page

export const Head = () => {
  const locale = 'th' as const
  return (
    <LocalizedHead
      locale={locale}
      path="/projects/muacle"
      titleKey="muacle.seoTitle"
      descriptionKey="muacle.seoDescription"
      jsonLd={projectJsonLd(
        'muacle',
        locale,
        translate(locale, 'muacle.seoDescription')
      )}
    />
  )
}
