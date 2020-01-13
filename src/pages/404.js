import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12">
        <h1 className="text-center">NOT FOUND</h1>
        <p className="text-center">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1494675006433-9e9428eba6c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            />
        </p>
        <p className="text-center">
          Original image from{' '}
          <a href="https://unsplash.com/@heftiba">@heftiba</a>
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
