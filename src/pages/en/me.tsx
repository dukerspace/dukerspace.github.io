import React from 'react'

import AboutMePage from '../../views/AboutMePage'
import { LocalizedHead } from '../../i18n/LocalizedHead'
import { personJsonLd } from '../../seo/jsonLd'

const MePage: React.FC = () => <AboutMePage />

export default MePage

export const Head = () => (
  <LocalizedHead
    locale="en"
    path="/me"
    titleKey="me.seoTitle"
    descriptionKey="me.seoDescription"
    jsonLd={personJsonLd('en')}
  />
)
