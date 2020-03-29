import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../components/Layout/DefaultLayout'
import TheNotebook from '../components/sidebar/TheNotebook'

export default props => {
  const post = props.data.content
  return (
    <DefaultLayout>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <TheNotebook />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </DefaultLayout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    content: markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        path
        type
      }
      html
    }
  }
`
