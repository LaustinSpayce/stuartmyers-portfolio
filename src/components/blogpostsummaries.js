import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"



const BlogPostSummaries = ({ data }) => (
  <div>
    <h1>Hello!</h1>
  </div>
)
export default BlogPostSummaries

export const query = graphql`
query BlogSummary ($skip: Int!, $limit: Int!) {
  allWordpressPost (
      sort: { fields: [date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
    edges {
      node {
        id
        title
        date
        excerpt
        slug
        jetpack_featured_media_url {
          localFile {
            childImageSharp {
              fluid {
                base64
              }
            }
          }
        }
      }
    }
  }
}`
