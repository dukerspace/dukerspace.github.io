import React from 'react'

import DefaultLayout from '../components/Layout/DefaultLayout'
import LiveSitePreview from '../components/LiveSitePreview'
import { useT } from '../i18n/LocaleContext'
import '../pages/content-page.css'

const ZlalabsPage: React.FC = () => {
  const t = useT()

  return (
    <DefaultLayout>
      <div>
        <div className="notebook-content">
          <article className="notebook-article">
            <h1>Zla Labs</h1>
            <p>
              <strong>{t('zlalabs.tagline')}</strong>
            </p>

            <div className="my-8 text-center">
              <LiveSitePreview
                src="https://www.zlalabs.com/"
                title={t('zlalabs.imgAlt')}
                interactive
                className="mx-auto max-w-4xl rounded-lg border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              />
              <p className="mt-2 text-sm text-[#b8c5d1]">
                {t('zlalabs.clickImage')}{' '}
                <a
                  href="https://www.zlalabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ec5990] hover:text-[#f06ba3] hover:underline"
                >
                  https://www.zlalabs.com/
                </a>
              </p>
            </div>

            <h2>{t('zlalabs.about')}</h2>
            <p>{t('zlalabs.aboutBody')}</p>

            <div className="mt-8 space-y-2">
              <p>
                <strong>{t('zlalabs.liveLabel')}</strong>{' '}
                <a
                  href="https://www.zlalabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ec5990] hover:text-[#f06ba3] hover:underline"
                >
                  https://www.zlalabs.com/
                </a>
              </p>
              <p>
                <strong>{t('zlalabs.githubLabel')}</strong>{' '}
                <a
                  href="https://github.com/zlalabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ec5990] hover:text-[#f06ba3] hover:underline"
                >
                  https://github.com/zlalabs
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default ZlalabsPage
