import React from 'react'

import DefaultLayout from '../components/Layout/DefaultLayout'
import { useT } from '../i18n/LocaleContext'
import '../pages/content-page.css'

const SuthepPage: React.FC = () => {
  const t = useT()

  const features: Array<{ title: string; desc: string }> = [
    { title: t('suthep.feature.nginx'), desc: t('suthep.feature.nginxDesc') },
    { title: t('suthep.feature.https'), desc: t('suthep.feature.httpsDesc') },
    {
      title: t('suthep.feature.zeroDowntime'),
      desc: t('suthep.feature.zeroDowntimeDesc'),
    },
    { title: t('suthep.feature.docker'), desc: t('suthep.feature.dockerDesc') },
    { title: t('suthep.feature.domains'), desc: t('suthep.feature.domainsDesc') },
    { title: t('suthep.feature.health'), desc: t('suthep.feature.healthDesc') },
    { title: t('suthep.feature.yaml'), desc: t('suthep.feature.yamlDesc') },
  ]

  return (
    <DefaultLayout>
      <div>
        <div className="notebook-content">
          <article className="notebook-article">
            <h1>Suthep</h1>
            <p>
              <strong>{t('suthep.tagline')}</strong>
            </p>

            <h2>{t('suthep.about')}</h2>
            <p>{t('suthep.aboutBody')}</p>

            <h2>{t('suthep.features')}</h2>
            <ul>
              {features.map((f) => (
                <li key={f.title}>
                  <strong>{f.title}</strong> - {f.desc}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h2>{t('suthep.docs')}</h2>
              <ul>
                <li>
                  <a
                    href="https://dukerspace.github.io/suthep/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('suthep.docsEn')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://dukerspace.github.io/suthep/th/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('suthep.docsTh')}
                  </a>
                </li>
              </ul>
            </div>

            <h2>{t('suthep.technology')}</h2>
            <p>{t('suthep.technologyBody')}</p>

            <h2>{t('suthep.license')}</h2>
            <p>{t('suthep.licenseBody')}</p>

            <div className="mt-8">
              <p>
                <strong>{t('suthep.githubLabel')}</strong>{' '}
                <a
                  href="https://github.com/dukerspace/suthep"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/dukerspace/suthep
                </a>
              </p>
              <p>
                <strong>{t('suthep.installLabel')}</strong>{' '}
                <code>npm install -g suthep</code>
              </p>
            </div>
          </article>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default SuthepPage
