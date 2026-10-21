import { createFileRoute } from '@tanstack/react-router'

import NotFoundView from '../views/NotFoundPage'
import { localeFromPath } from '../i18n'
import { localizedHead } from '../i18n/LocalizedHead'

export const Route = createFileRoute('/$')({
  head: ({ match }) =>
    localizedHead({
      locale: localeFromPath(match.pathname),
      path: '/404',
      titleKey: 'notFound.seoTitle',
    }),
  component: NotFoundView,
})
