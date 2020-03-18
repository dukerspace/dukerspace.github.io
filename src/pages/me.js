import React from 'react'
import Layout from '../components/layout'
import profile from '../images/profile.jpg'

const MePage = () => (
  <Layout>
    <div className="main container">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
          <div className="row mb-2">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text-center mb-2">
                <img className="img-fluid rounded-circle" src={profile} />
              </p>
              <p className="text-center mb-1">
                <strong>Montol Saklor</strong>
              </p>
              <p className="text-center mb-1">Software Engineer</p>
              <p className="text-center mb-1">montolsaklor@gmail.com</p>
              <p className="text-center mb-1">
                <a href="https://github.com/dukerspace" target="_blank">
                  <i className="fab fa-github" /> https://github.com/dukerspace
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
                <strong>Internship Marketing</strong>
              </p>
              <p>March 2013 - May 2013</p>
              <p>True Corporation Public Company</p>
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
                <strong>Software Engineer</strong>
              </p>
              <p>June 2016 - November 2017</p>
              <p>Tradition Brokers (Thailand) Limited.</p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <p>
                <strong>Software Engineer</strong>
              </p>
              <p>December 2017 - Now</p>
              <p>Aware Corporation Ltd.</p>
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
              <span className="ml-1 mr-1 badge badge-success">PHP</span>
              <span className="ml-1 mr-1 badge badge-success">Lavarel</span>
              <span className="ml-1 mr-1 badge badge-success">NodeJs</span>
              <span className="ml-1 mr-1 badge badge-success">Docker</span>
              <span className="ml-1 mr-1 badge badge-success">Git</span>
              <span className="ml-1 mr-1 badge badge-success">React.js</span>
              <span className="ml-1 mr-1 badge badge-success">Typescript</span>
              <span className="ml-1 mr-1 badge badge-success">Scala</span>
              <span className="ml-1 mr-1 badge badge-success">HTML</span>
              <span className="ml-1 mr-1 badge badge-success">CSS</span>
              <span className="ml-1 mr-1 badge badge-success">SQL</span>
              <span className="ml-1 mr-1 badge badge-success">PostgreSQL</span>
              <span className="ml-1 mr-1 badge badge-success">MySQL</span>
              <span className="ml-1 mr-1 badge badge-success">PostgreSQL</span>
              <span className="ml-1 mr-1 badge badge-success">Linux</span>
              <span className="ml-1 mr-1 badge badge-success">Play Framework</span>
              <span className="ml-1 mr-1 badge badge-success">Cloud Service</span>
              <span className="ml-1 mr-1 badge badge-success">jQuery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default MePage
