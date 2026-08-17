import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'

import DefaultLayout from '../components/Layout/DefaultLayout'
import BlogSidebar from '../components/Sidebar/Blog'
import SEO from '../components/seo'
import './blog.css'

interface BlogPageProps extends PageProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string
            path: string
            date: string
            description: string
          }
        }
      }>
    }
  }
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => (
  <DefaultLayout>
    <SEO title="Blog" description="Articles and notes by Montol Saklor" />
    <div className="blog-layout">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <BlogSidebar />
        </div>
        <div className="md:col-span-8">
          <h1 className="blog-page-title">Blog</h1>
          <p className="blog-page-subtitle">Articles and notes</p>
          <div className="blog-list">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <article key={node.frontmatter.path} className="blog-card">
                <time className="blog-card-date">{node.frontmatter.date}</time>
                <h2 className="blog-card-title">
                  <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
                </h2>
                {node.frontmatter.description && (
                  <p className="blog-card-description">{node.frontmatter.description}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
)

export default BlogPage

export const query = graphql`
  query BlogIndex {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`
