import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => (
  <Layout>
    <div>
      <h1>My Site's Files</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {data.allMarkdownRemark
            ? data.allMarkdownRemark.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`${node.frontmatter.path}`}>
                      {node.frontmatter.title}
                    </Link>
                  </td>
                  <td>{node.html}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          html
        }
      }
    }
  }
`
