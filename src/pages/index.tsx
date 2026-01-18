import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React from 'react'

import DefaultLayout from '../components/Layout/DefaultLayout'
import './index.css'

const monthNames: { [key: string]: number } = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
}

const calculateDuration = (dateRange: string): string => {
  const isPresent = dateRange.includes('Present')
  const parts = dateRange.split(' - ')

  if (parts.length !== 2) return ''

  const startStr = parts[0].trim()
  const endStr = parts[1].trim()

  const startMatch = startStr.match(/(\w+)\s+(\d{4})/)
  if (!startMatch) return ''

  const startMonth = monthNames[startMatch[1]]
  const startYear = parseInt(startMatch[2])

  let endMonth: number
  let endYear: number

  if (isPresent) {
    const now = new Date()
    endMonth = now.getMonth()
    endYear = now.getFullYear()
  } else {
    const endMatch = endStr.match(/(\w+)\s+(\d{4})/)
    if (!endMatch) return ''
    endMonth = monthNames[endMatch[1]]
    endYear = parseInt(endMatch[2])
  }

  let years = endYear - startYear
  let months = endMonth - startMonth + 1

  if (months < 0) {
    years--
    months += 12
  }

  if (months >= 12) {
    years += Math.floor(months / 12)
    months = months % 12
  }

  if (years === 0) {
    return `( ~ ${months} ${months === 1 ? 'month' : 'months'})`
  } else if (months === 0) {
    return `( ~ ${years} ${years === 1 ? 'year' : 'years'})`
  } else {
    return `( ~ ${years} ${years === 1 ? 'year' : 'years'} ${months} ${months === 1 ? 'month' : 'months'})`
  }
}

const IndexPage: React.FC = () => (
  <DefaultLayout>
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-intro">
            <h1 className="hero-title">
              Hello there! I'm <span className="text-[#ec5990]">Montol</span>
            </h1>
            <p className="hero-description">
              Software Engineer from <span className="text-[#ec5990]">Thailand</span>
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <h2 className="section-title">Personal Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Suthep</h3>
              <span className="project-badge">Personal project</span>
            </div>
            <p className="project-description">
              Deployment tool for Docker with automatic Nginx reverse proxy and HTTPS
            </p>
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
                GitHub
              </a>
              <Link to="/project/suthep" className="project-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                Details
              </Link>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Fourcuz</h3>
              <span className="project-badge">Personal project</span>
            </div>
            <p className="project-description">
              Pomodoro Task Manager - Focus + Tasks in a clean, distraction-free web app
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>TailwindCSS</span>
            </div>
            <div className="project-links">
              <a
                href="https://fourcuz-web.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                Website
              </a>
              <Link to="/project/fourcuz" className="project-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                Details
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="section">
        <h2 className="section-title">Skills</h2>
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

      {/* Contact Section */}
      <section className="section">
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">Got an idea? Let's connect!</p>
        <div className="contact-links">
          <a
            href="mailto:montolsaklor@gmail.com"
            className="contact-link"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Email
          </a>
          <a
            href="https://github.com/dukerspace"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/montol-saklor-381657177"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  </DefaultLayout>
)

export default IndexPage
