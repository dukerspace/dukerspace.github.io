import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import DefaultLayout from '../components/Layout/DefaultLayout'
import profile from '../assets/images/profile.jpg'
import './index.css'

const IndexPage: React.FC = () => (
  <DefaultLayout>
    <div className="resume-container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Profile Section */}
        <div className="lg:col-span-4 mb-4">
          <div className="profile-section">
            <img
              className="w-full max-w-[200px] rounded-full profile"
              src={profile}
              alt="Montol Saklor"
            />
            <h1>Montol Saklor</h1>
            <p className="title">Software Engineer</p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/montol-saklor-381657177"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://github.com/dukerspace"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="mailto:montolsaklor@gmail.com"
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8">
          {/* Education Section */}
          <div className="resume-section">
            <h2>Education</h2>
            <div className="resume-item">
              <h4>Modern Management and Information Technology</h4>
              <p className="date">2010 - 2014</p>
              <p className="company">College of Art, Media and Technology</p>
              <p>Chiang Mai University</p>
            </div>
          </div>

          <hr />

          {/* Experience Section */}
          <div className="resume-section">
            <h2>Experience</h2>
            
            <div className="resume-item">
              <h4>Software Developer</h4>
              <p className="date">December 2021 - Present</p>
              <p className="company">BANPU Public Company Limited</p>
            </div>
            
            <div className="resume-item">
              <h4>Software Developer</h4>
              <p className="date">May 2020 - December 2021</p>
              <p className="company">Artisan Digital Asia</p>
            </div>

            <div className="resume-item">
              <h4>Software Engineer</h4>
              <p className="date">December 2017 - May 2020</p>
              <p className="company">Aware Corporation Ltd.</p>
            </div>

            <div className="resume-item">
              <h4>Software Engineer</h4>
              <p className="date">June 2016 - November 2017</p>
              <p className="company">Tradition Brokers (Thailand) Limited</p>
            </div>

            <div className="resume-item">
              <h4>PHP Developer</h4>
              <p className="date">June 2015 - September 2015</p>
              <p className="company">Intsia Co.,Ltd</p>
            </div>

            <div className="resume-item">
              <h4>Internship Marketing</h4>
              <p className="date">March 2013 - May 2013</p>
              <p className="company">True Corporation Public Company</p>
            </div>
          </div>

          <hr />

          {/* Skills Section */}
          <div className="resume-section">
            <h2>Skills</h2>
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

export default IndexPage
