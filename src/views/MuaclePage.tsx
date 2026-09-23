import React from 'react'

import DefaultLayout from '../components/Layout/DefaultLayout'
import LiveSitePreview from '../components/LiveSitePreview'
import { useT } from '../i18n/LocaleContext'
import '../pages/content-page.css'

const MuaclePage: React.FC = () => {
  const t = useT()

  return (
    <DefaultLayout>
      <div>
        <div className="notebook-content">
          <article className="notebook-article">
            <h1>Muacle</h1>
            <p>
              <strong>{t('muacle.tagline')}</strong>
            </p>

            <div className="my-8 text-center">
              <LiveSitePreview
                src="https://muacle.com/"
                title={t('muacle.imgAlt')}
                interactive
                className="mx-auto max-w-4xl rounded-lg border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              />
              <p className="mt-2 text-sm text-[#b8c5d1]">
                {t('muacle.clickImage')}{' '}
                <a
                  href="https://muacle.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ec5990] hover:text-[#f06ba3] hover:underline"
                >
                  https://muacle.com/
                </a>
              </p>
            </div>

            <h2>{t('muacle.about')}</h2>
            <p>{t('muacle.aboutBody')}</p>

            <div className="mt-8">
              <p>
                <strong>{t('muacle.liveLabel')}</strong>{' '}
                <a
                  href="https://muacle.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ec5990] hover:text-[#f06ba3] hover:underline"
                >
                  https://muacle.com/
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default MuaclePage
