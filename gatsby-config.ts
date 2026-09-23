import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://dukerspace.com',
    title: `DUKERSPACE`,
    description: `Software engineer portfolio — Montol Saklor (dukerspace)`,
    author: `montol saklor`,
  },
  trailingSlash: 'never',
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dukerspace.com`,
        short_name: `dukerspace`,
        start_url: `/`,
        background_color: `#081229`,
        theme_color: `#081229`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://dukerspace.com',
        sitemap: 'https://dukerspace.com/sitemap-index.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    `gatsby-plugin-meta-redirect`,
  ],
}

export default config
