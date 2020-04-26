import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogPostSummary from "../components/blogpostsummary"

const BlogPosts = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            path
            title
            date
            description
            coverImage {
              childImageSharp {
                fluid (maxWidth: 920, maxHeight: 320) {
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
