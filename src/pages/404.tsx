import React from 'react'

import NotFoundView from '../views/NotFoundPage'
import { LocalizedHead } from '../i18n/LocalizedHead'

const NotFoundPage: React.FC = () => <NotFoundView />

export default NotFoundPage

export const Head = () => (
  <LocalizedHead locale="th" path="/404" titleKey="notFound.seoTitle" />
)
