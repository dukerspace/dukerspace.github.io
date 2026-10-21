import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { site } from '../../seo/site'
import './DefaultLayout.css'

interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header siteTitle={site.title} />
      <div className="main container mx-auto">{children}</div>
      <Footer />
    </>
  )
}

export default DefaultLayout
