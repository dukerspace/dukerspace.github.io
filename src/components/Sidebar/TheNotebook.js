import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const TheNotebook = () => {
  const data = useStaticQuery(graphql`
    {
      contents: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "docs" } } }
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
  return (
    <div>
      <ul className="sidebar">
        {data.contents
          ? data.contents.edges.map(({ node }, index) => (
              <li key={index}>
                <Link to={`/${node.frontmatter.path}`}>
                  {node.frontmatter.title}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}

export default TheNotebook
