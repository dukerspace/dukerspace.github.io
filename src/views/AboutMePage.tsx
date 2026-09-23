import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import DefaultLayout from '../components/Layout/DefaultLayout'
import profile from '../assets/images/profile.jpg'
import { calculateDuration, experienceRanges } from '../i18n/duration'
import { useT } from '../i18n/LocaleContext'
import '../pages/index.css'

const AboutMePage: React.FC = () => {
  const t = useT()
  const durationLabels = {
    month: t('me.duration.month'),
    months: t('me.duration.months'),
    year: t('me.duration.year'),
    years: t('me.duration.years'),
  }

  const jobs = [
    {
      role: t('me.role.softwareEngineer'),
      date: t('me.date.banpu'),
      range: experienceRanges.banpu,
      company: t('me.company.banpu'),
    },
    {
      role: t('me.role.softwareEngineer'),
      date: t('me.date.artisan'),
      range: experienceRanges.artisan,
      company: t('me.company.artisan'),
    },
    {
      role: t('me.role.softwareEngineer'),
      date: t('me.date.aware'),
      range: experienceRanges.aware,
      company: t('me.company.aware'),
    },
    {
      role: t('me.role.softwareEngineer'),
      date: t('me.date.tradition'),
      range: experienceRanges.tradition,
      company: t('me.company.tradition'),
    },
    {
      role: t('me.role.phpDeveloper'),
      date: t('me.date.intsia'),
      range: experienceRanges.intsia,
      company: t('me.company.intsia'),
    },
    {
      role: t('me.role.internshipMarketing'),
      date: t('me.date.true'),
      range: experienceRanges.true,
      company: t('me.company.true'),
    },
  ]

  return (
    <DefaultLayout>
      <div className="resume-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4 mb-4">
            <div className="profile-section">
              <img
                className="w-full max-w-[200px] rounded-full profile mx-auto"
                src={profile}
                alt={t('me.name')}
              />
              <h1>{t('me.name')}</h1>
              <p className="title">{t('me.jobTitle')}</p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/montol-saklor-381657177"
                  aria-label={t('home.linkLinkedIn')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="https://github.com/dukerspace"
                  aria-label={t('home.linkGithub')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:montolsaklor@gmail.com" aria-label={t('home.linkEmail')}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="resume-section">
              <h2>{t('me.education')}</h2>
              <div className="resume-item">
                <h4>{t('me.degree')}</h4>
                <p className="date">{t('me.degreeYears')}</p>
                <p className="company">{t('me.college')}</p>
                <p>{t('me.university')}</p>
              </div>
            </div>

            <hr />

            <div className="resume-section">
              <h2>{t('me.experience')}</h2>
              {jobs.map((job) => (
                <div className="resume-item" key={`${job.company}-${job.range}`}>
                  <h4>{job.role}</h4>
                  <p className="date">
                    {job.date} {calculateDuration(job.range, durationLabels)}
                  </p>
                  <p className="company">{job.company}</p>
                </div>
              ))}
            </div>

            <hr />

            <div className="resume-section">
              <h2>{t('me.skills')}</h2>
              <div className="skills-container">
                <span className="badge-pink">Go Lang</span>
                <span className="badge-pink">TypeScript</span>
                <span className="badge-pink">GraphQL</span>
                <span className="badge-pink">React.js</span>
                <span className="badge-pink">Node.js</span>
                <span className="badge-pink">PHP</span>
                <span className="badge-pink">Laravel</span>
                <span className="badge-pink">Docker</span>
                <span className="badge-pink">Git</span>
                <span className="badge-pink">HTML</span>
                <span className="badge-pink">CSS</span>
                <span className="badge-pink">SQL</span>
                <span className="badge-pink">PostgreSQL</span>
                <span className="badge-pink">MySQL</span>
                <span className="badge-pink">Linux</span>
                <span className="badge-pink">Cloud Services</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default AboutMePage
