import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Moment from "moment"

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data
  // const PostHeroImage = data.wordpressPost.jetpack_featured_media_url ? (
  //   <Img
  //     fluid={
  //       data.wordpressPost.jetpack_featured_media_url.localFile.childImageSharp
  //         .fluid
  //     }
  //   />
  // ) : (
  //   <div></div>
  // )

  const postDate = post.frontmatter.date
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <p>
        Posted {Moment(postDate).fromNow()} on{" "}
        {Moment(postDate).format(`MMMM Do YYYY`)}
      </p>
      {/* {PostHeroImage} */}
      <div
        style={{ marginTop: 20 }}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}
export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
