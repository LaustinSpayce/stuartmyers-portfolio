import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => (
  <Layout>
    {console.log(data.wordpressPost.jetpack_featured_media_url)}
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
    <h1>{data.wordpressPost.title}</h1>
    <p>
      Written on {data.wordpressPost.date}
    </p>
    <img src={data.wordpressPost.jetpack_featured_media_url}/>
    <div
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
    />
  </Layout>
)
export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      content
      date
      format
      path
      title
      type
      excerpt
      jetpack_featured_media_url
    }
  }
`