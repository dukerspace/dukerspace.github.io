import React from 'react'

import fourcuz from '../assets/images/fourcuz.png'
import DefaultLayout from '../components/Layout/DefaultLayout'
import { useT } from '../i18n/LocaleContext'
import '../pages/content-page.css'

const FourcuzPage: React.FC = () => {
  const t = useT()

  const features: Array<{ title: string; desc: string }> = [
    { title: t('fourcuz.feature.timer'), desc: t('fourcuz.feature.timerDesc') },
    { title: t('fourcuz.feature.tasks'), desc: t('fourcuz.feature.tasksDesc') },
    { title: t('fourcuz.feature.stats'), desc: t('fourcuz.feature.statsDesc') },
    { title: t('fourcuz.feature.local'), desc: t('fourcuz.feature.localDesc') },
    { title: t('fourcuz.feature.theme'), desc: t('fourcuz.feature.themeDesc') },
    { title: t('fourcuz.feature.mobile'), desc: t('fourcuz.feature.mobileDesc') },
    {
      title: t('fourcuz.feature.offline'),
      desc: t('fourcuz.feature.offlineDesc'),
    },
  ]

  const why: Array<{ title: string; desc: string }> = [
    {
      title: t('fourcuz.why.procrastination'),
      desc: t('fourcuz.why.procrastinationDesc'),
    },
    { title: t('fourcuz.why.focus'), desc: t('fourcuz.why.focusDesc') },
    { title: t('fourcuz.why.nosignup'), desc: t('fourcuz.why.nosignupDesc') },
    { title: t('fourcuz.why.privacy'), desc: t('fourcuz.why.privacyDesc') },
    { title: t('fourcuz.why.free'), desc: t('fourcuz.why.freeDesc') },
  ]

  const steps = [
    t('fourcuz.step1'),
    t('fourcuz.step2'),
    t('fourcuz.step3'),
    t('fourcuz.step4'),
    t('fourcuz.step5'),
  ]

  return (
    <DefaultLayout>
      <div>
        <div className="notebook-content">
          <article className="notebook-article">
            <h1>Fourcuz</h1>
            <p>
              <strong>{t('fourcuz.tagline')}</strong>
            </p>

            <div className="my-8 text-center">
              <a
                href="https://fourcuz.dukerspace.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={fourcuz}
                  alt={t('fourcuz.imgAlt')}
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-gray-700 hover:opacity-90 transition-opacity"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src =
                      'https://via.placeholder.com/1200x628/1a1a2e/fff?text=Fourcuz+Pomodoro+Task+Manager'
                  }}
                />
              </a>
              <p className="text-sm text-gray-500 mt-2">
                {t('fourcuz.clickImage')}{' '}
                <a
                  href="https://fourcuz.dukerspace.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  https://fourcuz.dukerspace.com/
                </a>
              </p>
            </div>

            <h2>{t('fourcuz.about')}</h2>
            <p>{t('fourcuz.aboutBody')}</p>

            <h2>{t('fourcuz.features')}</h2>
            <ul>
              {features.map((f) => (
                <li key={f.title}>
                  <strong>{f.title}</strong> - {f.desc}
                </li>
              ))}
            </ul>

            <h2>{t('fourcuz.howItWorks')}</h2>
            <ol>
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <h2>{t('fourcuz.why')}</h2>
            <ul>
              {why.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> - {item.desc}
                </li>
              ))}
            </ul>

            <h2>{t('fourcuz.technology')}</h2>
            <p>{t('fourcuz.technologyBody')}</p>

            <div className="mt-8">
              <p>
                <strong>{t('fourcuz.liveLabel')}</strong>{' '}
                <a
                  href="https://fourcuz.dukerspace.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  https://fourcuz.dukerspace.com/
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default FourcuzPage
