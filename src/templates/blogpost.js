import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Moment from "moment"

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data
  const PostHeroImage = post.frontmatter.coverImage ? (
    <Img
      fluid={post.frontmatter.coverImage.childImageSharp.fluid}
      alt={post.frontmatter.title}
    />
  ) : (
    <div></div>
  )

  const postDate = post.frontmatter.date

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <p>
        Posted {Moment(postDate).fromNow()} on{" "}
        {Moment(postDate).format(`MMMM Do YYYY`)}
      </p>
      {PostHeroImage}
      <div
        style={{ marginTop: 20 }}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}
export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
        coverImage {
          childImageSharp {
            fluid(maxWidth: 920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
