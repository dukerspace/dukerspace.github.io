import React from 'react'

import MuaclePage from '../../../views/MuaclePage'
import { LocalizedHead } from '../../../i18n/LocalizedHead'

const Page: React.FC = () => <MuaclePage />

export default Page

export const Head = () => (
  <LocalizedHead
    locale="en"
    path="/projects/muacle"
    titleKey="muacle.seoTitle"
    descriptionKey="muacle.seoDescription"
  />
)
