import { createFileRoute, notFound } from '@tanstack/react-router'

import { postBySlug } from '../../../features/blog/posts'
import BlogPostPage from '../../../features/blog/BlogPostPage'
import { localeFromParam } from '../../../i18n'
import { localizedHead } from '../../../i18n/LocalizedHead'
import { pageHead } from '../../../components/seo'

export const Route = createFileRoute('/{-$locale}/blog/$slug')({
  beforeLoad: ({ params }) => {
    const post = postBySlug(localeFromParam(params.locale), params.slug)
    if (!post) throw notFound()
  },
  head: ({ params }) => {
    const locale = localeFromParam(params.locale)
    const post = postBySlug(locale, params.slug)
    if (!post) {
      return localizedHead({
        locale,
        path: '/404',
        titleKey: 'notFound.seoTitle',
      })
    }
    return pageHead({
      locale,
      path: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
    })
  },
  component: PostRoute,
})

function PostRoute() {
  const { locale, slug } = Route.useParams()
  const post = postBySlug(localeFromParam(locale), slug)
  if (!post) return null
  return <BlogPostPage post={post} />
}
