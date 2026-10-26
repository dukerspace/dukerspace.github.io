import { Link } from '@tanstack/react-router'
import React from 'react'

import { postsFor } from './posts'
import rimpingThumbnail from '../../assets/images/rimping.png'
import suthepThumbnail from '../../assets/images/suthep.png'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import { localizedPath, type Locale } from '../../i18n'
import { useLocale, useT } from '../../i18n/LocaleContext'
import '../../styles/index.css'

const thumbnails: Record<string, string> = {
  'rimping-agent-workflow': rimpingThumbnail,
  'suthep-deployment-tool': suthepThumbnail,
}

function formatDate(iso: string, locale: Locale): string {
  const [year, month, day] = iso.split('-').map(Number)
  if (!year || !month || !day) return iso
  return new Date(year, month - 1, day).toLocaleDateString(
    locale === 'th' ? 'th-TH' : 'en-GB',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )
}

const BlogIndexPage: React.FC = () => {
  const t = useT()
  const locale = useLocale()
  const posts = postsFor(locale)

  return (
    <DefaultLayout>
      <div className="portfolio-container">
        <section className="section">
          <h1 className="section-title">{t('blog.title')}</h1>
          {posts.length === 0 ? (
            <p className="text-[#b8c5d1]">{t('blog.empty')}</p>
          ) : (
            <div className="projects-grid">
              {posts.map((post) => (
                <article key={post.slug} className="project-card">
                  {thumbnails[post.slug] && (
                    <div className="project-media">
                      <img src={thumbnails[post.slug]} alt="" aria-hidden="true" />
                    </div>
                  )}
                  <div className="project-body">
                    <p className="text-xs font-medium text-[#b8c5d1] mb-2">
                      <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
                    </p>
                    <h2 className="project-title">
                      <Link
                        to={localizedPath(`/blog/${post.slug}`, locale)}
                        className="text-white no-underline hover:text-[#f06ba3]"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="project-description">{post.description}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </DefaultLayout>
  )
}

export default BlogIndexPage
