import React from 'react'

import FourcuzPage from '../../../views/FourcuzPage'
import { LocalizedHead } from '../../../i18n/LocalizedHead'

const Page: React.FC = () => <FourcuzPage />

export default Page

export const Head = () => (
  <LocalizedHead
    locale="en"
    path="/projects/fourcuz"
    titleKey="fourcuz.seoTitle"
    descriptionKey="fourcuz.seoDescription"
  />
)
