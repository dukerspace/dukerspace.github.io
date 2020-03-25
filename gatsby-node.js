/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
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

exports.createPages = ({ graphql, actions }) => {
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
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const blogPost = path.resolve(`./src/templates/blog.js`)
    const theNotebookPost = path.resolve(`./src/templates/the-notebook.js`)

    const blogs = result.data.allMarkdownRemark.edges.filter(
      ({ node }) => node.frontmatter.type === 'blog'
    )
    const theNotebook = result.data.allMarkdownRemark.edges.filter(
      ({ node }) => node.frontmatter.type === 'docs'
    )

    blogs.forEach(({ node }) => {
      const path = node.frontmatter.path
      createPage({
        path: path,
        component: blogPost,
        context: {
          pathSlug: path
        }
      })
    })

    theNotebook.forEach(({ node }) => {
      const path = node.frontmatter.path
      createPage({
        path: path,
        component: theNotebookPost,
        context: {
          pathSlug: path
        }
      })
    })
  })
}
