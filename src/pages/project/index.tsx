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
            <h2>Nimman</h2>
            <p>
              <Link to="/project/nimman">
                Zero-downtime deployment tool for Node.js and Bun projects
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

