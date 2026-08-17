import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { useLocation } from '@reach/router'
import './Blog.css'

const BlogSidebar: React.FC = () => {
  const location = useLocation()
  const data = useStaticQuery<{
    posts: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string
            path: string
            date: string
          }
        }
      }>
    }
  }>(graphql`
    {
      posts: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "MMMM DD, YYYY")
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

  return (
    <nav className="blog-sidebar">
      <div className="blog-sidebar__header">
        <h2 className="blog-sidebar__title">Blog</h2>
        <div className="blog-sidebar__divider"></div>
      </div>
      <ul className="blog-sidebar__list">
        {data.posts?.edges.map(({ node }) => {
          const active = isActive(node.frontmatter.path)
          return (
            <li key={node.frontmatter.path} className="blog-sidebar__item">
              <Link
                to={node.frontmatter.path}
                className={`blog-sidebar__link ${active ? 'blog-sidebar__link--active' : ''}`}
              >
                <span className="blog-sidebar__link-text">
                  {node.frontmatter.title}
                </span>
                {active && (
                  <span className="blog-sidebar__link-indicator"></span>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default BlogSidebar
