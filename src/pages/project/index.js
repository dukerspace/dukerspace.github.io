import React from 'react'
import { Link } from 'gatsby'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import corploc from '../../assets/images/corploc-thumb.png'
import myspabooking from '../../assets/images/myspa-thumb.png'

const ProjectPage = () => (
  <DefaultLayout>
    <div>
      <div className="row">
        <div className="mb-1 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <h2 className="text-center">Personal Projects</h2>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="mb-1 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <h4 className="text-center">Dezenter</h4>
          <p>dezenter: crowd sourcing information</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="mb-1 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <h2 className="text-center">Portfolio</h2>
        </div>

        <div className="mb-1 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <h4 className="text-center">Corporate Location</h4>
          <p className="text-center">
            <Link to="/project/corporate-location">
              <img
                className="img-fluid"
                src={corploc}
                alt="Corporate Location"
              />
            </Link>
          </p>
          <p>
            <Link to="/project/corporate-location">
              Website to find office space in hongkong.
            </Link>
          </p>
        </div>

        <div className="mb-1 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <h4 className="text-center">My Spa Booking</h4>

          <p className="text-center">
            <Link to="/project/myspabooking">
              <img
                className="img-fluid"
                src={myspabooking}
                alt="My Spa Booking"
              />
            </Link>
          </p>
          <p>
            <Link to="/project/myspabooking">Startup booking spa.</Link>
          </p>
        </div>
      </div>
    </div>
  </DefaultLayout>
)

export default ProjectPage
