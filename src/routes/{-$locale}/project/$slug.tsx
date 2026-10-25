import { createFileRoute, notFound, redirect } from '@tanstack/react-router'

import { localeFromParam, localizedPath } from '../../../i18n'

const PROJECT_SLUGS = ['rimping', 'muacle', 'zlalabs', 'suthep', 'fourcuz'] as const

export const Route = createFileRoute('/{-$locale}/project/$slug')({
  beforeLoad: ({ params }) => {
    if (params.locale !== undefined && params.locale !== 'en') {
      throw notFound()
    }
    if (!PROJECT_SLUGS.includes(params.slug as (typeof PROJECT_SLUGS)[number])) {
      throw notFound()
    }
    throw redirect({
      href: localizedPath(
        `/projects/${params.slug}`,
        localeFromParam(params.locale)
      ),
      statusCode: 301,
    })
  },
})
