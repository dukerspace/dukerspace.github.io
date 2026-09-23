import React from 'react'
import { Link } from 'gatsby'

import { localizedPath } from '../../i18n'
import { useLocale, useT } from '../../i18n/LocaleContext'

const Footer: React.FC = () => {
  const t = useT()
  const locale = useLocale()

  return (
    <footer>
      <div className="container mx-auto px-4">
        <ul>
          <li>© {new Date().getFullYear()} Montol Saklor</li>
          <li>
            <Link to={localizedPath('/', locale)}>{t('nav.home')}</Link>
          </li>
          <li>
            <Link to={localizedPath('/me', locale)}>{t('nav.about')}</Link>
          </li>
          <li>
            <Link to={localizedPath('/projects', locale)}>{t('nav.projects')}</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
