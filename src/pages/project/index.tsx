import React from 'react'
import { Link } from 'gatsby'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import '../the-notebook.css'

const ProjectPage: React.FC = () => (
  <DefaultLayout>
    <div>
      <div className="notebook-content">
        <article className="notebook-article">
          <h1>Personal Projects</h1>
          
          <div className="my-8">
            <h2>Suthep</h2>
            <p>
              <Link to="/project/suthep">
                Deployment tool for Docker with automatic Nginx reverse proxy and HTTPS
              </Link>
            </p>
          </div>

          <hr />
        </article>
      </div>
    </div>
  </DefaultLayout>
)

export default ProjectPage

