import React from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import myspabooking from '../../assets/images/myspabooking.png'

const MySpaBookingPage = () => (
  <DefaultLayout>
    <div className="main container">
      <div className="row">
        <div className="mb-1 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <h2 className="text-center">Portfolio</h2>
        </div>
      </div>

      <div className="row">
        <div className="mb-1 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <img className="img-fluid" src={myspabooking} alt="My Spa Booking" />
          <p>Startup booking spa.</p>
          <p>
            <a href="http://www.myspabooking.com" target="_blank">
              Link
            </a>
          </p>
        </div>
      </div>
    </div>
  </DefaultLayout>
)

export default MySpaBookingPage
