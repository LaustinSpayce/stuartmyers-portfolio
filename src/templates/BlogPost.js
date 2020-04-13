import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Moment from "moment"

const BlogPostTemplate = ({ data }) => {
  const PostHeroImage = data.wordpressPost.jetpack_featured_media_url ? (
    <Img
      fluid={
        data.wordpressPost.jetpack_featured_media_url.localFile.childImageSharp
          .fluid
      }
    />
  ) : (
    <div></div>
  )
  return (
    <Layout>
      <SEO
        title={data.wordpressPost.title}
        description={data.wordpressPost.excerpt}
      />
      <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPost.title}}></h1>
      <p>Written {Moment(data.wordpressPost.date).fromNow()}</p>
      {PostHeroImage}
      <div
        style={{ marginTop: 20 }}
        dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
      />
    </Layout>
  )
}
export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      id
      content
      date
      format
      path
      title
      type
      excerpt
      jetpack_featured_media_url {
        localFile {
          childImageSharp {
            fluid(maxWidth: 920, maxHeight: 420) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
