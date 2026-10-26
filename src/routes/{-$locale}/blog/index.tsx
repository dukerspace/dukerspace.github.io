import { createFileRoute } from '@tanstack/react-router'

import BlogIndexPage from '../../../features/blog/BlogIndexPage'
import { localeFromParam } from '../../../i18n'
import { localizedHead } from '../../../i18n/LocalizedHead'

export const Route = createFileRoute('/{-$locale}/blog/')({
  head: ({ params }) =>
    localizedHead({
      locale: localeFromParam(params.locale),
      path: '/blog',
      titleKey: 'blog.seoTitle',
      descriptionKey: 'blog.seoDescription',
    }),
  component: BlogIndexPage,
})
