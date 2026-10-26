import { createFileRoute } from '@tanstack/react-router'

import ProjectsPage from '../../../features/projects/ProjectsPage'
import { localeFromParam } from '../../../i18n'
import { localizedHead } from '../../../i18n/LocalizedHead'
import { translate } from '../../../i18n/LocaleContext'
import { projectsCollectionJsonLd } from '../../../seo/jsonLd'

export const Route = createFileRoute('/{-$locale}/projects/')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale)
    return localizedHead({
      locale,
      path: '/projects',
      titleKey: 'projects.seoTitle',
      descriptionKey: 'projects.seoDescription',
      jsonLd: projectsCollectionJsonLd(
        locale,
        translate(locale, 'projects.seoDescription')
      ),
    })
  },
  component: ProjectsPage,
})
