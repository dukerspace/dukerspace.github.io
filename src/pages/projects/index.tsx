import React from 'react'

import ProjectsPage from '../../views/ProjectsPage'
import { LocalizedHead } from '../../i18n/LocalizedHead'

const ProjectPage: React.FC = () => <ProjectsPage />

export default ProjectPage

export const Head = () => (
  <LocalizedHead
    locale="th"
    path="/projects"
    titleKey="projects.seoTitle"
    descriptionKey="projects.seoDescription"
  />
)
