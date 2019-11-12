import React from 'react'
import { Link } from 'gatsby'

const SidebarTheNotebook = props => (
  <div>
    <ul className="sidebar">
      {props.data.allMarkdownRemark
        ? props.data.allMarkdownRemark.edges.map(({ node }, index) => (
            <li key={index}>
              <Link to={`${node.frontmatter.path}`}>
                {node.frontmatter.title}
              </Link>
            </li>
          ))
        : null}
    </ul>
  </div>
)

export default SidebarTheNotebook
