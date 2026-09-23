import React from 'react'

import HomePage from '../../views/HomePage'
import { LocalizedHead } from '../../i18n/LocalizedHead'
import { translate } from '../../i18n/LocaleContext'
import { personJsonLd, websiteJsonLd } from '../../seo/jsonLd'

const IndexPage: React.FC = () => <HomePage />

export default IndexPage

export const Head = () => {
  const locale = 'en' as const
  return (
    <LocalizedHead
      locale={locale}
      path="/"
      titleKey="home.seoTitle"
      descriptionKey="home.seoDescription"
      titleTemplate={null}
      jsonLd={[
        websiteJsonLd(locale, translate(locale, 'home.seoDescription')),
        personJsonLd(locale),
      ]}
    />
  )
}
