/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import * as path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'
import { GatsbyNode } from 'gatsby'

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

export const createPages: GatsbyNode['createPages'] = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              type
              path
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result: any) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const blogPost = path.resolve(`./src/templates/blog.tsx`)
    const theNotebookPost = path.resolve(`./src/templates/the-notebook.tsx`)

    const blogs = result.data.allMarkdownRemark.edges.filter(
      ({ node }: any) => node.frontmatter.type === 'blog'
    )
    const theNotebook = result.data.allMarkdownRemark.edges.filter(
      ({ node }: any) => node.frontmatter.type === 'docs'
    )

    blogs.forEach(({ node }: any) => {
      const pagePath = node.frontmatter.path
      createPage({
        path: pagePath,
        component: blogPost,
        context: {
          pathSlug: pagePath
        }
      })
    })

    theNotebook.forEach(({ node }: any) => {
      const pagePath = node.frontmatter.path
      createPage({
        path: pagePath,
        component: theNotebookPost,
        context: {
          pathSlug: pagePath
        }
      })
    })
  })
}

