import React from 'react'
import { Link } from 'gatsby'

const Footer: React.FC = () => (
  <footer>
    <div className="container mx-auto px-4">
      <ul>
        <li>© {new Date().getFullYear()} Montol Saklor</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/the-notebook">The Notebook</Link>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
