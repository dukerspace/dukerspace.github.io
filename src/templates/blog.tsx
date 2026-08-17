import React from 'react'
import { graphql, PageProps } from 'gatsby'
import parse from 'html-react-parser'

import DefaultLayout from '../components/Layout/DefaultLayout'
import BlogSidebar from '../components/Sidebar/Blog'
import SEO from '../components/seo'
import '../pages/blog.css'

interface BlogTemplateProps extends PageProps {
  data: {
    post: {
      frontmatter: {
        title: string
        path: string
        type: string
        date: string
        description: string
      }
      html: string
    }
  }
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ data }) => {
  const post = data.post

  return (
    <DefaultLayout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} />
      <div className="blog-layout">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <BlogSidebar />
          </div>
          <div className="md:col-span-8">
            <article className="blog-article">
              <header className="blog-article-header">
                <h1>{post.frontmatter.title}</h1>
                <time className="blog-article-date">{post.frontmatter.date}</time>
              </header>
              <div className="blog-article-content">{parse(post.html)}</div>
            </article>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default BlogTemplate

export const query = graphql`
  query BlogPostByPath($pathSlug: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
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
