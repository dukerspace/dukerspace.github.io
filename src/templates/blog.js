import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../components/Layout/DefaultLayout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <DefaultLayout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </DefaultLayout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        path
        type
        date(formatString: "MMMM DD, YYYY")
        description
      }
      html
    }
  }
`
