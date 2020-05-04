import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogPostSummary from "../components/blogpostsummary"

const Portfolio = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1>Portfolio</h1>
      <div className="flex flex-row items-stretch content-start flex-wrap">
        {posts.map(({ node }, index) => {
          return <BlogPostSummary node={node} key={index} />
        })}
      </div>
    </Layout>
  )
}
export default Portfolio

export const query = graphql`
  query BlogSummary {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
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
                fluid(maxWidth: 720, maxHeight: 400) {
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
