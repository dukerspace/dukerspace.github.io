import React from 'react'

import ProjectsPage from '../../views/ProjectsPage'
import { LocalizedHead } from '../../i18n/LocalizedHead'
import { translate } from '../../i18n/LocaleContext'
import { projectsCollectionJsonLd } from '../../seo/jsonLd'

const Page: React.FC = () => <ProjectsPage />

export default Page

export const Head = () => {
  const locale = 'th' as const
  return (
    <LocalizedHead
      locale={locale}
      path="/projects"
      titleKey="projects.seoTitle"
      descriptionKey="projects.seoDescription"
      jsonLd={projectsCollectionJsonLd(
        locale,
        translate(locale, 'projects.seoDescription')
      )}
    />
  )
}
