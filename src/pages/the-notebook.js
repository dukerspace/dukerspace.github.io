import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SidebarTheNotebook from '../components/sidebar/the-notebook'

const TheNotebookPage = ({ data }) => (
  <Layout>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-4 col-12">
        <SidebarTheNotebook data={data} />
      </div>
      <div className="col-lg-8 col-md-4 col-sm-4 col-12">
        <h1>The Notebook</h1>
      </div>
    </div>
  </Layout>
)

export default TheNotebookPage
export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "the-notebook" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            type
          }
          html
        }
      }
    }
  }
`
