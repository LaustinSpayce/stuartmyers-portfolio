import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Moment from 'moment'

const BlogPosts = ({ data }) => {

  console.log('All posts data:')
  console.log(data)
  const posts = data.allWordpressPost.edges


  return (
    <Layout>
    {posts.map(({ node }) => {
      let fluidImg = node.jetpack_featured_media_url ?
        <Img fluid={node.jetpack_featured_media_url.localFile.childImageSharp.fluid}/>
        : <div>No image</div>
      const title = node.title || node.slug
      const link = `/post/${node.slug}`
      return (
        <article key={node.slug}>
          <header>
            <h3>
              <Link style={{ boxShadow: `none` }} to={link}>
                {title}
              </Link>
            </h3>
            <small>{Moment(node.date).fromNow()}</small>
          </header>
          <section>
            {fluidImg}
            <p
              dangerouslySetInnerHTML={{
                __html: node.description || node.excerpt,
              }}
            />
          </section>
        </article>
      )
    })}
  </Layout>
  )
  }
export default BlogPosts

export const query = graphql`
query BlogSummary {
  allWordpressPost (
      sort: { fields: [date], order: DESC }
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
              fluid(maxWidth: 920, maxHeight: 210) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}`
