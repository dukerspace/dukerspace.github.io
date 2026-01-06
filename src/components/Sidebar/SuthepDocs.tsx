import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { useLocation } from '@reach/router'
import './TheNotebook.css'

const SuthepDocs: React.FC = () => {
  const location = useLocation()
  const data = useStaticQuery<{
    docs: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string
            path: string
            language?: string
          }
        }
      }>
    }
  }>(graphql`
    {
      docs: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "suthep-docs" } } }
        sort: { frontmatter: { title: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              language
            }
          }
        }
      }
    }
  `)

  const isActive = (path: string) => {
    const currentPath = location.pathname.replace(/\/$/, '')
    const linkPath = path.replace(/\/$/, '')
    return currentPath === linkPath
  }

  // Determine current language from path
  const currentLanguage = location.pathname.includes('/th') ? 'th' : 'en'
  
  // Filter docs by current language
  const filteredDocs = data.docs?.edges.filter(
    ({ node }) => {
      const lang = node.frontmatter.language
      const path = node.frontmatter.path || ''
      const langPath = currentLanguage === 'th' ? '/th' : '/en'
      return lang === currentLanguage || path.includes(langPath)
    }
  ) || []

  // Sort docs by numeric prefix in filename (01, 02, etc.)
  const sortedDocs = filteredDocs.length > 0 ? [...filteredDocs].sort((a, b) => {
    const pathA = a.node.frontmatter.path || ''
    const pathB = b.node.frontmatter.path || ''
    
    // README comes first
    if (pathA.endsWith('/en') || pathA.endsWith('/th')) return -1
    if (pathB.endsWith('/en') || pathB.endsWith('/th')) return 1
    
    // Extract numeric prefix from path
    const getOrder = (path: string): number => {
      if (!path) return 999
      const pathMap: { [key: string]: number } = {
        '/introduction': 1,
        '/installation': 2,
        '/quick-start': 3,
        '/configuration': 4,
        '/commands': 5,
        '/examples': 6,
        '/troubleshooting': 7,
        '/advanced': 8,
      }
      const slug = path.split('/').pop() || ''
      return pathMap[`/${slug}`] || 999
    }
    
    return getOrder(pathA) - getOrder(pathB)
  }) : []

  return (
    <nav className="notebook-sidebar">
      <div className="notebook-sidebar__header">
        <h2 className="notebook-sidebar__title">Suthep Docs</h2>
        <div className="notebook-sidebar__divider"></div>
      </div>
      <ul className="notebook-sidebar__list">
        {sortedDocs.map(({ node }, index) => {
          const active = isActive(node.frontmatter.path)
          return (
            <li key={index} className="notebook-sidebar__item">
              <Link
                to={node.frontmatter.path}
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

export default SuthepDocs

