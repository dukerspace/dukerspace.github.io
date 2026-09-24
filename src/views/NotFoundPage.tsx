import React from 'react'

import DefaultLayout from '../components/Layout/DefaultLayout'
import { useT } from '../i18n/LocaleContext'
import '../pages/content-page.css'

const NotFoundView: React.FC = () => {
  const t = useT()

  return (
    <DefaultLayout>
      <div>
        <div className="notebook-content">
          <article className="notebook-article">
            <h1>{t('notFound.title')}</h1>
            <p>{t('notFound.body')}</p>
            <div className="text-center my-8">
              <img
                className="w-full max-w-full h-auto rounded-lg"
                src={`https://images.unsplash.com/photo-1494675006433-9e9428eba6c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80`}
                alt={t('notFound.title')}
              />
            </div>
            <p className="text-center text-[#b8c5d1]">
              {t('notFound.credit')}{' '}
              <a href="https://unsplash.com/@heftiba">@heftiba</a>
            </p>
          </article>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default NotFoundView
