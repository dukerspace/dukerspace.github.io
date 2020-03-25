import React from 'react'
import Layout from '../components/layout'
import corploc from '../images/corporatelocations-hk.png'
import myspabooking from '../images/myspabooking.png'

const ProjectPage = () => (
  <Layout>
    <div className="main container">
      <div className="row mb-1">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <h2 className="text-center">PERSONAL PROJECTS</h2>
        </div>

        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <h4 className="text-center">Dezenter</h4>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <p></p>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <p>
            dezenter: crowdsourcing information help and notification for people
          </p>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <p>
            <a href="http://www.github.com/dezenter" target="blank">
              Link
            </a>
          </p>
        </div>
      </div>

      <hr />

      <div className="row mb- 1">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <h2 className="text-center">PORTFOLIO</h2>
        </div>

        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <h4 className="text-center">Corporate Location</h4>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <p className="text-center">
            <img className="img-fluid" src={corploc} />
          </p>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <p>Website to find office space in hongkong.</p>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <p>
            <a href="http://www.corporatelocations.com.hk" target="blank">
              Link
            </a>
          </p>
        </div>

        <hr />

        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <h4 className="text-center">Myspabooking</h4>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <p className="text-center">
            <img className="img-fluid" src={myspabooking} />
          </p>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <p>Startup booking spa.</p>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <p>
            <a href="http://www.myspabooking.com" target="blank">
              Link
            </a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default ProjectPage
