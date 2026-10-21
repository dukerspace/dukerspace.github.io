import { createFileRoute, redirect } from '@tanstack/react-router'

import { localeFromParam, localizedPath } from '../../../i18n'

export const Route = createFileRoute('/{-$locale}/project/')({
  beforeLoad: ({ params }) => {
    throw redirect({
      href: localizedPath('/projects', localeFromParam(params.locale)),
      statusCode: 301,
    })
  },
})
