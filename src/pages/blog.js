import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogPostSummary from "../components/blogpostsummary"

const BlogPosts = ({ data }) => {
  const posts = data.allWordpressPost.edges

  return (
    <Layout>
      <h1>Portfolio</h1>
      {posts.map(({ node }, index) => {
        return <BlogPostSummary node={node} key={index} />
      })}
    </Layout>
  )
}
export default BlogPosts

export const query = graphql`
  query BlogSummary {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
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
                fluid(maxWidth: 920, maxHeight: 210) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
