import React from 'react'
import { graphql, PageProps } from 'gatsby'
import DefaultLayout from '../components/Layout/DefaultLayout'
import parse from 'html-react-parser'
import './the-notebook.css'

interface TheNotebookPageProps extends PageProps {
  data: {
    content: {
      id: string
      html: string
    }
  }
}

const TheNotebookPage: React.FC<TheNotebookPageProps> = ({ data }) => (
  <DefaultLayout>
    <div>
      <div className="notebook-content">
        <article className="notebook-article">
          {parse(data.content.html)}
        </article>
      </div>
    </div>
  </DefaultLayout>
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

