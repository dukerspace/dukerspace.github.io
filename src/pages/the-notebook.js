import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import TheNotebook from '../components/sidebar/TheNotebook'
import parse from 'html-react-parser'

const TheNotebookPage = ({ data }) => (
  <Layout>
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        {parse(data.content.html)}
      </div>
    </div>
  </Layout>
)

export default TheNotebookPage

export const query = graphql`
  {
    content: markdownRemark(
      frontmatter: { path: { eq: "/the-notebook/idx" } }
    ) {
      id
      html
    }
  }
`
