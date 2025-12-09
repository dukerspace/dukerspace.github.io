import React from 'react'
import DefaultLayout from '../components/Layout/DefaultLayout'
import SEO from '../components/seo'
import './the-notebook.css'

const NotFoundPage: React.FC = () => (
  <DefaultLayout>
    <SEO title="404: Not found" />
    <div>
      <div className="notebook-content">
        <article className="notebook-article">
          <h1>404: Page Not Found</h1>
          <p>
            The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="text-center my-8">
            <img
              className="w-full max-w-full h-auto rounded-lg"
              src={`https://images.unsplash.com/photo-1494675006433-9e9428eba6c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80`}
              alt="not found"
            />
          </div>
          <p className="text-center text-[#b8c5d1]">
            Original image from{' '}
            <a href="https://unsplash.com/@heftiba">@heftiba</a>
          </p>
        </article>
      </div>
    </div>
  </DefaultLayout>
)

export default NotFoundPage

