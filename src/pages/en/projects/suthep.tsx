import React from 'react'

import SuthepPage from '../../../views/SuthepPage'
import { LocalizedHead } from '../../../i18n/LocalizedHead'

const Page: React.FC = () => <SuthepPage />

export default Page

export const Head = () => (
  <LocalizedHead
    locale="en"
    path="/projects/suthep"
    titleKey="suthep.seoTitle"
    descriptionKey="suthep.seoDescription"
  />
)
