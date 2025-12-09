import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import '../the-notebook.css'

const NimmanPage: React.FC = () => {
  const data = useStaticQuery<{
    docs: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string
            path: string
          }
        }
      }>
    }
  }>(graphql`
    {
      docs: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "nimman-docs" } } }
        sort: { frontmatter: { title: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `)

  return (
    <DefaultLayout>
      <div>
        <div className="notebook-content">
          <article className="notebook-article">
            <h1>Nimman</h1>
            <p>
              <strong>Zero-downtime deployment tool for Node.js and Bun projects</strong>
            </p>
            
            <h2>About</h2>
            <p>
              Nimman is a deployment tool designed for small budget projects, providing 
              automatic Nginx reverse proxy configuration, SSL certificate management, and 
              zero-downtime deployments using PM2.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Automatic Nginx reverse proxy setup</strong> - Configures Nginx for 
                your services automatically
              </li>
              <li>
                <strong>Automatic HTTPS with Certbot</strong> - Sets up Let's Encrypt SSL 
                certificates
              </li>
              <li>
                <strong>Zero-downtime deployment</strong> - Uses PM2 reload for seamless updates
              </li>
              <li>
                <strong>Multi-service support</strong> - Deploy frontend, backend, and multiple 
                services
              </li>
              <li>
                <strong>Cost-effective</strong> - Optimized for small VM deployments
              </li>
              <li>
                <strong>YAML configuration</strong> - Simple, declarative config files
              </li>
            </ul>

            <h2>Technology</h2>
            <p>
              Built with TypeScript, supporting Node.js and Bun runtime environments. Uses PM2 
              for process management and integrates with Nginx and Certbot for production-ready 
              deployments.
            </p>

            {data.docs?.edges.length > 0 && (
              <div className="mt-8">
                <h2>Documentation</h2>
                <ul>
                  {data.docs.edges.map(({ node }, index) => (
                    <li key={index}>
                      <Link to={node.frontmatter.path}>
                        {node.frontmatter.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <h2>License</h2>
            <p>MIT License</p>

            <div className="mt-8">
              <p>
                <strong>GitHub:</strong>{' '}
                <a 
                  href="https://github.com/dukerspace/nimman" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://github.com/dukerspace/nimman
                </a>
              </p>
              <p>
                <strong>Installation:</strong>{' '}
                <code>npm install -g nimman</code>
              </p>
            </div>
          </article>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default NimmanPage
