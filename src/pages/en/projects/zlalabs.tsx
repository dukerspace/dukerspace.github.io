import React from 'react'

import ZlalabsPage from '../../../views/ZlalabsPage'
import { LocalizedHead } from '../../../i18n/LocalizedHead'

const Page: React.FC = () => <ZlalabsPage />

export default Page

export const Head = () => (
  <LocalizedHead
    locale="en"
    path="/projects/zlalabs"
    titleKey="zlalabs.seoTitle"
    descriptionKey="zlalabs.seoDescription"
  />
)
