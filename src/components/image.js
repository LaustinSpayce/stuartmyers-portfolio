import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import BackgroundImage from "gatsby-background-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      mugshot: file(relativePath: { eq: "stuart-headshot.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 460) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.mugshot.childImageSharp.fluid

  return ( 
    <div style={{width: '300px', height: '300px', borderRadius: '20px', border: '1px solid black'}}>
      <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={`#040e18`}
      style={{width: '100%', height: '100%'}}
    >
    </BackgroundImage>
  </div>
  )
}

export default Image
