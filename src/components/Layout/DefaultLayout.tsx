import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './DefaultLayout.css'

interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data: any) => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="main container mx-auto px-4">{children}</div>
        <Footer />
      </>
    )}
  />
)

export default DefaultLayout

