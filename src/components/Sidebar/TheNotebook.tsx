import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { useLocation } from '@reach/router'
import './TheNotebook.css'

const TheNotebook: React.FC = () => {
  const location = useLocation()
  const data = useStaticQuery<{
    contents: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string
            path: string
          }
        }
      }>
    }
  }>(graphql`
    {
      contents: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "docs" } } }
        sort: { frontmatter: { title: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `)

  const isActive = (path: string) => {
    const currentPath = location.pathname.replace(/\/$/, '')
    const linkPath = `/${path}`.replace(/\/$/, '')
    return currentPath === linkPath
  }

  return (
    <nav className="notebook-sidebar">
      <div className="notebook-sidebar__header">
        <h2 className="notebook-sidebar__title">The Notebook</h2>
        <div className="notebook-sidebar__divider"></div>
      </div>
      <ul className="notebook-sidebar__list">
        {data.contents?.edges.map(({ node }, index) => {
          const active = isActive(node.frontmatter.path)
          return (
            <li key={index} className="notebook-sidebar__item">
              <Link
                to={`/${node.frontmatter.path}`}
                className={`notebook-sidebar__link ${active ? 'notebook-sidebar__link--active' : ''}`}
              >
                <span className="notebook-sidebar__link-text">
                  {node.frontmatter.title}
                </span>
                {active && (
                  <span className="notebook-sidebar__link-indicator"></span>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default TheNotebook

