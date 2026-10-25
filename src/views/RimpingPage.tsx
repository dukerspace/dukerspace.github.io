import React from 'react'

import DefaultLayout from '../components/Layout/DefaultLayout'
import { useT } from '../i18n/LocaleContext'
import '../styles/content-page.css'

const RimpingPage: React.FC = () => {
  const t = useT()

  const features: Array<{ title: string; desc: string }> = [
    { title: t('rimping.feature.prompt'), desc: t('rimping.feature.promptDesc') },
    { title: t('rimping.feature.shell'), desc: t('rimping.feature.shellDesc') },
    { title: t('rimping.feature.read'), desc: t('rimping.feature.readDesc') },
    { title: t('rimping.feature.dstack'), desc: t('rimping.feature.dstackDesc') },
    { title: t('rimping.feature.hooks'), desc: t('rimping.feature.hooksDesc') },
  ]

  return (
    <DefaultLayout>
      <div>
        <div className="notebook-content">
          <article className="notebook-article">
            <h1>Rimping</h1>
            <p>
              <strong>{t('rimping.tagline')}</strong>
            </p>

            <h2>{t('rimping.about')}</h2>
            <p>{t('rimping.aboutBody')}</p>

            <h2>{t('rimping.features')}</h2>
            <ul>
              {features.map((f) => (
                <li key={f.title}>
                  <strong>{f.title}</strong> - {f.desc}
                </li>
              ))}
            </ul>

            <h2>{t('rimping.technology')}</h2>
            <p>{t('rimping.technologyBody')}</p>

            <h2>{t('rimping.license')}</h2>
            <p>{t('rimping.licenseBody')}</p>

            <div className="mt-8">
              <p>
                <strong>{t('rimping.githubLabel')}</strong>{' '}
                <a
                  href="https://github.com/dukerspace/rimping"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/dukerspace/rimping
                </a>
              </p>
              <p>
                <strong>{t('rimping.installLabel')}</strong>{' '}
                <code>bun install && bun run build && bun run rimping -- init</code>
              </p>
            </div>
          </article>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default RimpingPage
