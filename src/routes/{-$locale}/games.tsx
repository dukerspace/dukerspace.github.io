import { createFileRoute } from '@tanstack/react-router'

import GamesPage from '../../views/GamesPage'
import { localeFromParam } from '../../i18n'
import { localizedHead } from '../../i18n/LocalizedHead'

export const Route = createFileRoute('/{-$locale}/games')({
  head: ({ params }) =>
    localizedHead({
      locale: localeFromParam(params.locale),
      path: '/games',
      titleKey: 'games.seoTitle',
      descriptionKey: 'games.seoDescription',
    }),
  component: GamesPage,
})
