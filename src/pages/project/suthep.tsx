import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import '../the-notebook.css'

const SuthepPage: React.FC = () => {
  const data = useStaticQuery<{
    docs: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string
            path: string
            language?: string
          }
        }
      }>
    }
  }>(graphql`
    {
      docs: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "suthep-docs" } } }
        sort: { frontmatter: { title: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              language
            }
          }
        }
      }
    }
  `)

  // Separate docs by language
  const englishDocs = data.docs?.edges.filter(
    ({ node }) => {
      const lang = node.frontmatter.language
      const path = node.frontmatter.path || ''
      return lang === 'en' || path.includes('/en')
    }
  ) || []
  const thaiDocs = data.docs?.edges.filter(
    ({ node }) => {
      const lang = node.frontmatter.language
      const path = node.frontmatter.path || ''
      return lang === 'th' || path.includes('/th')
    }
  ) || []

  // Sort docs by numeric prefix in filename (01, 02, etc.)
  const sortDocs = (docs: typeof englishDocs) => {
    if (!docs || docs.length === 0) return []
    return [...docs].sort((a, b) => {
      const pathA = a.node.frontmatter.path || ''
      const pathB = b.node.frontmatter.path || ''
      
      // README comes first
      if (pathA.endsWith('/en') || pathA.endsWith('/th')) return -1
      if (pathB.endsWith('/en') || pathB.endsWith('/th')) return 1
      
      // Extract numeric prefix from path
      const getOrder = (path: string): number => {
        if (!path) return 999
        const pathMap: { [key: string]: number } = {
          '/introduction': 1,
          '/installation': 2,
          '/quick-start': 3,
          '/configuration': 4,
          '/commands': 5,
          '/examples': 6,
          '/troubleshooting': 7,
          '/advanced': 8,
        }
        const slug = path.split('/').pop() || ''
        return pathMap[`/${slug}`] || 999
      }
      
      return getOrder(pathA) - getOrder(pathB)
    })
  }

  const sortedEnglishDocs = sortDocs(englishDocs)
  const sortedThaiDocs = sortDocs(thaiDocs)

  return (
    <DefaultLayout>
      <div>
        <div className="notebook-content">
          <article className="notebook-article">
            <h1>Suthep</h1>
            <p>
              <strong>Deployment tool for Docker with automatic Nginx reverse proxy and HTTPS</strong>
            </p>
            
            <h2>About</h2>
            <p>
              Suthep is a powerful CLI tool for deploying projects with automatic Nginx reverse 
              proxy setup, HTTPS with Certbot, and zero-downtime deployments. Designed for small 
              budget projects, it simplifies Docker container deployments with minimal configuration.
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
                <strong>Zero-downtime deployment</strong> - Seamless updates without service interruption
              </li>
              <li>
                <strong>Docker container support</strong> - Deploy and manage Docker containers easily
              </li>
              <li>
                <strong>Multiple domain/subdomain support</strong> - Configure multiple domains 
                for your services
              </li>
              <li>
                <strong>Health check integration</strong> - Monitor service health automatically
              </li>
              <li>
                <strong>YAML-based configuration</strong> - Simple, declarative config files
              </li>
            </ul>

            <div className="mt-8">
              <h2>Documentation</h2>
              
              {sortedEnglishDocs.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">🇬🇧 English</h3>
                  <ul>
                    {sortedEnglishDocs.map(({ node }, index) => (
                      <li key={index}>
                        <Link to={node.frontmatter.path}>
                          {node.frontmatter.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {sortedThaiDocs.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">🇹🇭 ไทย</h3>
                  <ul>
                    {sortedThaiDocs.map(({ node }, index) => (
                      <li key={index}>
                        <Link to={node.frontmatter.path}>
                          {node.frontmatter.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <h2>Technology</h2>
            <p>
              Built with TypeScript, supporting Docker-based deployments. Integrates with Nginx 
              and Certbot for production-ready deployments with automatic SSL certificate management.
            </p>

            <h2>License</h2>
            <p>MIT License</p>

            <div className="mt-8">
              <p>
                <strong>GitHub:</strong>{' '}
                <a 
                  href="https://github.com/dukerspace/suthep" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://github.com/dukerspace/suthep
                </a>
              </p>
              <p>
                <strong>Installation:</strong>{' '}
                <code>npm install -g suthep</code>
              </p>
            </div>
          </article>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default SuthepPage


