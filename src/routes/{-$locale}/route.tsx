import { Outlet, createFileRoute, notFound } from '@tanstack/react-router'

import NotFoundView from '../../views/NotFoundPage'

export const Route = createFileRoute('/{-$locale}')({
  beforeLoad: ({ params }) => {
    if (params.locale !== undefined && params.locale !== 'en') {
      throw notFound()
    }
  },
  component: LocaleLayout,
  notFoundComponent: NotFoundView,
})

function LocaleLayout() {
  return <Outlet />
}
