import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Moment from "moment"

const BlogPostSummary = (props) => {
  let fluidImg = props.node.jetpack_featured_media_url ? (
    <Img
      fluid={
        props.node.jetpack_featured_media_url.localFile.childImageSharp.fluid
      }
    />
  ) : (
    <div></div>
  )
  const title = props.node.frontmatter.title || props.node.slug
  const link = props.node.fields.slug
  const postDate = props.node.frontmatter.date

  return (
    <article key={props.node.fields.slug}>
      <header>
        <h3>
          <Link
            style={{ boxShadow: `none` }}
            to={link}
          >{title}</Link>
        </h3>
        <small>
          Posted {Moment(postDate).fromNow()} on{" "}
          {Moment(postDate).format(`MMMM Do YYYY`)}
        </small>
      </header>
      <section>
        {fluidImg}
        <p
          dangerouslySetInnerHTML={{
            __html: props.node.html || props.node.excerpt,
          }}
        />
      </section>
    </article>
  )
}

export default BlogPostSummary
