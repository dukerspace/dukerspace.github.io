import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import DefaultLayout from '../components/Layout/DefaultLayout'
import profile from '../assets/images/profile.jpg'
import './index.scss'

const IndexPage = () => (
  <DefaultLayout>
    <div>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
          <div className="row mb-2">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text-center mb-2">
                <img
                  className="img-fluid rounded-circle"
                  src={profile}
                  alt="profile"
                />
              </p>
              <p className="text-center mb-1">
                <strong>Montol Saklor</strong>
              </p>
              <p className="text-center mb-1">Software Engineer</p>
              <p className="text-center mb-1">
                <a
                  className="mr-3"
                  href="https://www.linkedin.com/in/montol-saklor-381657177"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                <a href="https://github.com/dukerspace">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
          <div className="row mb-2">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3 className="text-center">Education</h3>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <p>
                <strong>Modern Management and Information Technology</strong>
              </p>
              <p>2010 - 2014</p>
              <p>
                College of Art, Media and Technology in Chiang Mai University
              </p>
            </div>
          </div>

          <hr />

          <div className="row mt-2 mb-2">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3 className="text-center">Experience</h3>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <p>
                <strong>Software Developer</strong>
              </p>
              <p>December 2021 - Present</p>
              <p>BANPU Public Company Limited.</p>
            </div>
          </div>
          
          <div className="row mb-3">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <p>
                <strong>Software Developer</strong>
              </p>
              <p>May 2020 - December 2021</p>
              <p>Artisan Digital Asia.</p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <p>
                <strong>Software Engineer</strong>
              </p>
              <p>December 2017 - May 2020</p>
              <p>Aware Corporation Ltd.</p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <p>
                <strong>Software Engineer</strong>
              </p>
              <p>June 2016 - November 2017</p>
              <p>Tradition Brokers (Thailand) Limited.</p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <p>
                <strong>PHP Developer</strong>
              </p>
              <p>June 2015 - September 2015</p>
              <p>Intsia Co.,Ltd</p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <p>
                <strong>Internship Marketing</strong>
              </p>
              <p>March 2013 - May 2013</p>
              <p>True Corporation Public Company</p>
            </div>
          </div>

          <hr />

          <div className="row mb-2">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3 className="text-center">Skills</h3>
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <span className="ml-1 mr-1 badge badge-pink">Go Lang</span>
              <span className="ml-1 mr-1 badge badge-pink">TypeScript</span>
              <span className="ml-1 mr-1 badge badge-pink">Graphql</span>
              <span className="ml-1 mr-1 badge badge-pink">React.js</span>
              <span className="ml-1 mr-1 badge badge-pink">NodeJs</span>
              <span className="ml-1 mr-1 badge badge-pink">PHP</span>
              <span className="ml-1 mr-1 badge badge-pink">Laravel</span>
              <span className="ml-1 mr-1 badge badge-pink">Docker</span>
              <span className="ml-1 mr-1 badge badge-pink">Git</span>
              <span className="ml-1 mr-1 badge badge-pink">HTML</span>
              <span className="ml-1 mr-1 badge badge-pink">CSS</span>
              <span className="ml-1 mr-1 badge badge-pink">SQL</span>
              <span className="ml-1 mr-1 badge badge-pink">PostgreSQL</span>
              <span className="ml-1 mr-1 badge badge-pink">MySQL</span>
              <span className="ml-1 mr-1 badge badge-pink">PostgreSQL</span>
              <span className="ml-1 mr-1 badge badge-pink">Linux</span>
              <span className="ml-1 mr-1 badge badge-pink">Cloud Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
)

export default IndexPage
