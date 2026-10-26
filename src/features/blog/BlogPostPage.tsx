import { Link } from '@tanstack/react-router'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import type { BlogPost } from './posts'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import { localizedPath } from '../../i18n'
import { useLocale, useT } from '../../i18n/LocaleContext'
import '../../styles/content-page.css'

function formatDate(iso: string, locale: 'th' | 'en'): string {
  const [year, month, day] = iso.split('-').map(Number)
  if (!year || !month || !day) return iso
  return new Date(year, month - 1, day).toLocaleDateString(
    locale === 'th' ? 'th-TH' : 'en-GB',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )
}

function headingId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
}

const BlogPostPage: React.FC<{ post: BlogPost }> = ({ post }) => {
  const t = useT()
  const locale = useLocale()
  const headings = [...post.body.matchAll(/^## (.+)$/gm)].map(([, title]) => ({
    title,
    id: headingId(title),
  }))

  return (
    <DefaultLayout>
      <div className="notebook-content max-w-[1180px] mx-auto py-8 px-4">
        <p className="mb-6">
          <Link
            to={localizedPath('/blog', locale)}
            className="text-[#ec5990] no-underline hover:text-[#f06ba3]"
          >
            {t('nav.blog')}
          </Link>
        </p>
        <div className="blog-post-grid">
          <nav className="blog-toc" aria-label={t('blog.toc')}>
            <h2>{t('blog.toc')}</h2>
            <ul>
              {headings.map(({ id, title }) => (
                <li key={id}>
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <article className="notebook-article">
            <p className="text-xs font-medium text-[#b8c5d1] mb-4">
              <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
            </p>
            <h1>{post.title}</h1>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children, ...props }) => (
                  <h2 id={headingId(String(children))} {...props}>
                    {children}
                  </h2>
                ),
              }}
            >
              {post.body}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default BlogPostPage
