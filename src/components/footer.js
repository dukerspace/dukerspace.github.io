import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <ul className="text-center">
            <li>© {new Date().getFullYear()}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="project">Project</Link>
            </li>
            <li>
              <Link to="the-notebook">The Notebook</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="me">About Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
