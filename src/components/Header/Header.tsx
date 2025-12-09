import { Link } from 'gatsby'
import React from 'react'

interface HeaderProps {
  siteTitle?: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => (
  <header>
    <div className="container mx-auto px-4">
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
