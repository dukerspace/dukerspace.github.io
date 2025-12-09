import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

/*
 * This component is built using `gatsby-plugin-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-plugin-image`: https://gatsby.dev/gatsby-plugin-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image: React.FC = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            gatsbyImageData(width: 300, layout: CONSTRAINED)
          }
        }
      }
    `}
    render={(data: any) => (
      <GatsbyImage
        image={data.placeholderImage.childImageSharp.gatsbyImageData}
        alt="Gatsby Astronaut"
      />
    )}
  />
)
export default Image

