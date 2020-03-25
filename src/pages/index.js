import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/Layout'
import profile from '../images/profile.jpg'
import './index.scss'

const IndexPage = () => (
  <Layout>
    <div className="main container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <p className="text-center mb-2">
            <img className="profile rounded-circle" src={profile} />
          </p>

          <p className="text-center mb-1">
            <h2>Montol Saklor</h2>
          </p>

          <p className="text-center mb-1">Software Engineer</p>
          <p className="text-center mb-1">
            <a
              className="mr-3"
              href="https://www.linkedin.com/in/montol-saklor-381657177"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a href="https://github.com/dukerspace" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
