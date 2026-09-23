import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
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

const HomePage: React.FC = () => {
  const t = useT()
  const locale = useLocale()

  return (
    <DefaultLayout>
      <div className="portfolio-container">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-intro">
              <h1 className="hero-title">
                {t('home.heroTitleBefore')}
                <span className="text-[#ec5990]">{t('home.heroName')}</span>
              </h1>
              <p className="hero-description">
                {t('home.heroSubtitleBefore')}
                <span className="text-[#ec5990]">{t('home.heroLocation')}</span>
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">{t('home.projectsTitle')}</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-media">
                <img src={suthep} alt={t('suthep.imgAlt')} />
              </div>
              <div className="project-body">
                <div className="project-header">
                  <h3 className="project-title">Suthep</h3>
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
                  <h3 className="project-title">Fourcuz</h3>
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
                  <h3 className="project-title">Muacle</h3>
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
                  <h3 className="project-title">Zla Labs</h3>
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

        <section className="section">
          <h2 className="section-title">{t('home.skillsTitle')}</h2>
          <div className="skills-grid">
            <span className="skill-tag">Go Lang</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">GraphQL</span>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">PHP</span>
            <span className="skill-tag">Laravel</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">PostgreSQL</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">Linux</span>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">{t('home.contactTitle')}</h2>
          <div className="contact-links">
            <a
              href="mailto:montolsaklor@gmail.com"
              className="contact-link"
              aria-label={t('home.linkEmail')}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              {t('home.linkEmail')}
            </a>
            <a
              href="https://github.com/dukerspace"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label={t('home.linkGithub')}
            >
              <FontAwesomeIcon icon={faGithub} />
              {t('home.linkGithub')}
            </a>
            <a
              href="https://www.linkedin.com/in/montol-saklor-381657177"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label={t('home.linkLinkedIn')}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
              {t('home.linkLinkedIn')}
            </a>
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}

export default HomePage
