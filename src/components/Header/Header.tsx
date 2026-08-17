import { Link } from 'gatsby'
import React from 'react'

interface HeaderProps {
  siteTitle?: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => (
  <header>
    <div className="container mx-auto px-4 flex items-center justify-between">
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <Link to="/blog" className="text-[#b8c5d1] no-underline hover:text-[#ec5990] transition-colors">
          Blog
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
