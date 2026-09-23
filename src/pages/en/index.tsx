import React from 'react'

import HomePage from '../../views/HomePage'
import { LocalizedHead } from '../../i18n/LocalizedHead'

const IndexPage: React.FC = () => <HomePage />

export default IndexPage

export const Head = () => (
  <LocalizedHead
    locale="en"
    path="/"
    titleKey="home.seoTitle"
    descriptionKey="home.seoDescription"
    titleTemplate={null}
    jsonLd={[
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'DUKERSPACE',
        url: 'https://dukerspace.com/en',
        description:
          'Software engineer portfolio — Montol Saklor (dukerspace)',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Montol Saklor',
        url: 'https://dukerspace.com/en',
        jobTitle: 'Software Engineer',
        sameAs: [
          'https://github.com/dukerspace',
          'https://www.linkedin.com/in/montol-saklor-381657177',
        ],
      },
    ]}
  />
)
