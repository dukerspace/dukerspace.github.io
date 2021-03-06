import React from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import corpLoc from '../../assets/images/corporatelocations-hk.png'

const CorpLocPage = () => (
  <DefaultLayout>
    <div className="main container">
      <div className="row">
        <div className="mb-1 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <h2 className="text-center">Portfolio</h2>
        </div>
      </div>

      <div className="row">
        <div className="mb-1 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <img className="img-fluid" src={corpLoc} alt="My Spa Booking" />
          <p>Website to find office space in hongkong.</p>
          <p>
            <a href="http://www.corporatelocations.com.hk">Link</a>
          </p>
        </div>
      </div>
    </div>
  </DefaultLayout>
)

export default CorpLocPage
