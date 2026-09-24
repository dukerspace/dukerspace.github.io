import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React from 'react'

import fourcuz from '../assets/images/fourcuz.png'
import suthep from '../assets/images/suthep.png'
import DefaultLayout from '../components/Layout/DefaultLayout'
import LiveSitePreview from '../components/LiveSitePreview'
import { localizedPath } from '../i18n'
import { useLocale, useT } from '../i18n/LocaleContext'
import '../pages/index.css'

const ProjectsPage: React.FC = () => {
  const t = useT()
  const locale = useLocale()

  return (
    <DefaultLayout>
      <div className="portfolio-container">
        <section className="section">
          <h1 className="section-title">{t('projects.title')}</h1>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-media">
                <img src={suthep} alt={t('suthep.imgAlt')} />
              </div>
              <div className="project-body">
                <div className="project-header">
                  <h2 className="project-title">Suthep</h2>
                  <span className="project-badge">{t('home.badgePersonal')}</span>
                </div>
                <p className="project-description">{t('home.suthepDesc')}</p>
                <div className="project-tags">
                  <span>TypeScript</span>
                  <span>Docker</span>
                  <span>Nginx</span>
                  <span>Certbot</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/dukerspace/suthep"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    {t('home.linkGithub')}
                  </a>
                  <Link
                    to={localizedPath('/projects/suthep', locale)}
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    {t('home.linkDetails')}
                  </Link>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-media">
                <img src={fourcuz} alt={t('fourcuz.imgAlt')} />
              </div>
              <div className="project-body">
                <div className="project-header">
                  <h2 className="project-title">Fourcuz</h2>
                  <span className="project-badge">{t('home.badgePersonal')}</span>
                </div>
                <p className="project-description">{t('home.fourcuzDesc')}</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>TailwindCSS</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://fourcuz.dukerspace.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    {t('home.linkWebsite')}
                  </a>
                  <Link
                    to={localizedPath('/projects/fourcuz', locale)}
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    {t('home.linkDetails')}
                  </Link>
                </div>
              </div>
            </div>

            <div className="project-card">
              <LiveSitePreview
                src="https://muacle.com/"
                title={t('muacle.imgAlt')}
              />
              <div className="project-body">
                <div className="project-header">
                  <h2 className="project-title">Muacle</h2>
                  <span className="project-badge">{t('home.badgeZlalabs')}</span>
                </div>
                <p className="project-description">{t('home.muacleDesc')}</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>AI</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://muacle.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    {t('home.linkWebsite')}
                  </a>
                  <Link
                    to={localizedPath('/projects/muacle', locale)}
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    {t('home.linkDetails')}
                  </Link>
                </div>
              </div>
            </div>

            <div className="project-card">
              <LiveSitePreview
                src="https://www.zlalabs.com/"
                title={t('zlalabs.imgAlt')}
              />
              <div className="project-body">
                <div className="project-header">
                  <h2 className="project-title">Zla Labs</h2>
                  <span className="project-badge">{t('home.badgeZlalabs')}</span>
                </div>
                <p className="project-description">{t('home.zlalabsDesc')}</p>
                <div className="project-tags">
                  <span>Open Source</span>
                  <span>TypeScript</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://www.zlalabs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    {t('home.linkWebsite')}
                  </a>
                  <a
                    href="https://github.com/zlalabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    {t('home.linkGithub')}
                  </a>
                  <Link
                    to={localizedPath('/projects/zlalabs', locale)}
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    {t('home.linkDetails')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}

export default ProjectsPage
