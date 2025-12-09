import React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import DefaultLayout from '../components/Layout/DefaultLayout'
import NimmanDocs from '../components/Sidebar/NimmanDocs'
import parse from 'html-react-parser'
import '../pages/the-notebook.css'

interface NimmanDocsTemplateProps extends PageProps {
  data: {
    content: {
      frontmatter: {
        title: string
        path: string
        type: string
      }
      html: string
    }
  }
}

const NimmanDocsTemplate: React.FC<NimmanDocsTemplateProps> = (props) => {
  const post = props.data.content
  return (
    <DefaultLayout>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <NimmanDocs />
          </div>
          <div className="md:col-span-8">
            <div className="notebook-content">
              <div className="mb-4">
                <Link to="/project/nimman" className="text-blue-500 hover:text-blue-700">
                  ← Back to Nimman
                </Link>
              </div>
              <article className="notebook-article">
                {parse(post.html)}
              </article>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default NimmanDocsTemplate

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
