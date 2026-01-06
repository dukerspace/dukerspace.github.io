import React, { useState } from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import DefaultLayout from '../components/Layout/DefaultLayout'
import SuthepDocs from '../components/Sidebar/SuthepDocs'
import parse from 'html-react-parser'
import '../styles/vitepress-docs.css'

interface SuthepDocsTemplateProps extends PageProps {
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

const SuthepDocsTemplate: React.FC<SuthepDocsTemplateProps> = (props) => {
  const post = props.data.content
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <DefaultLayout>
      <div className="vitepress-docs">
        {/* Mobile menu button */}
        <button
          className="vitepress-menu-button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {sidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="vitepress-docs-container">
          {/* Sidebar */}
          <aside className={`vitepress-sidebar ${sidebarOpen ? 'open' : ''}`}>
            <SuthepDocs />
          </aside>

          {/* Main content */}
          <main className="vitepress-content">
            <div className="vitepress-content-wrapper">
              {/* Breadcrumb */}
              <nav className="vitepress-breadcrumb">
                <Link to="/project/suthep">Suthep</Link>
                <span className="vitepress-breadcrumb__separator">/</span>
                <span>Documentation</span>
              </nav>

              {/* Article */}
              <article className="vitepress-article">
                {parse(post.html)}
              </article>
            </div>
          </main>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default SuthepDocsTemplate

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

