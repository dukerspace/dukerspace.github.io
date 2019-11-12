import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => (
  <Layout>
    <div>
      <h1>Blog</h1>
      <hr />
      {data.allMarkdownRemark
        ? data.allMarkdownRemark.edges.map(({ node }, index) => (
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <h5>
                  <Link to={`${node.frontmatter.path}`}>
                    {node.frontmatter.title}
                  </Link>
                </h5>
                <p>{node.frontmatter.date}</p>
              </div>
            </div>
          ))
        : null}
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
            date(formatString: "MMMM DD, YYYY")
            description
          }
          html
        }
      }
    }
  }
`
