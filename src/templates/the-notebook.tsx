import React from 'react'
import { graphql, PageProps } from 'gatsby'
import DefaultLayout from '../components/Layout/DefaultLayout'
import TheNotebook from '../components/Sidebar/TheNotebook'
import parse from 'html-react-parser'
import '../pages/the-notebook.css'

interface TheNotebookTemplateProps extends PageProps {
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

const TheNotebookTemplate: React.FC<TheNotebookTemplateProps> = (props) => {
  const post = props.data.content
  return (
    <DefaultLayout>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <TheNotebook />
          </div>
          <div className="md:col-span-8">
            <div className="notebook-content">
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

export default TheNotebookTemplate

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

