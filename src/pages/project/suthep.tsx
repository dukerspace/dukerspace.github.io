import React from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import '../the-notebook.css'

const SuthepPage: React.FC = () => (
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
            <ul>
              <li>
                <a
                  href="https://dukerspace.github.io/suthep/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🇬🇧 English
                </a>
              </li>
              <li>
                <a
                  href="https://dukerspace.github.io/suthep/th/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🇹🇭 ไทย
                </a>
              </li>
            </ul>
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

export default SuthepPage
