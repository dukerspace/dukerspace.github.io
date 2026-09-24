import { Link } from 'gatsby'
import React from 'react'

import { localizedPath, switchLocalePath } from '../../i18n'
import { useLocale, usePathname, useT } from '../../i18n/LocaleContext'

interface HeaderProps {
  siteTitle?: string
}

const activeLang = 'text-[#ec5990] no-underline transition-colors'
const idleLang = 'text-[#b8c5d1] no-underline hover:text-[#ec5990] transition-colors'

const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => {
  const t = useT()
  const locale = useLocale()
  const pathname = usePathname()
  const thPath = switchLocalePath(pathname, 'th')
  const enPath = switchLocalePath(pathname, 'en')

  return (
    <header>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1>
          <Link to={localizedPath('/', locale)}>{siteTitle}</Link>
        </h1>
        <nav className="flex items-center gap-4">
          <Link
            to={localizedPath('/projects', locale)}
            className="text-[#b8c5d1] no-underline hover:text-[#ec5990] transition-colors"
          >
            {t('nav.projects')}
          </Link>
          <span className="flex items-center gap-1 text-sm" aria-label="Language">
            <Link to={thPath} className={locale === 'th' ? activeLang : idleLang}>
              {t('lang.th')}
            </Link>
            <span className="text-[#b8c5d1]">|</span>
            <Link to={enPath} className={locale === 'en' ? activeLang : idleLang}>
              {t('lang.en')}
            </Link>
          </span>
        </nav>
      </div>
    </header>
  )
}

export default Header
