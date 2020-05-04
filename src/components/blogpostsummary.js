import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"

const BlogPostSummary = (props) => {
  let fluidImg = props.node.frontmatter.coverImage ? (
    <Img
      fluid={props.node.frontmatter.coverImage.childImageSharp.fluid}
      objectFit="cover"
      className="w-100 h-56 md:h-48 lg:h-40"
    />
  ) : (
    <div
      className="w-100 h-56 md:h-48 lg:h-40 text-center flex items-center"
      style={{ background: `#41494b` }}
    >
      <div className="w-100 flex-grow">
        <FontAwesomeIcon
          icon={faLaptopCode}
          size="4x"
          style={{ color: `white` }}
          width="0"
          className="text-center align-middle"
        />
      </div>
    </div>
  )
  const title = props.node.frontmatter.title || props.node.slug
  const link = props.node.fields.slug
  const postDate = props.node.frontmatter.date

  return (
    <article
      key={props.node.fields.slug}
      className="p-2 relative w-full sm:w-full md:w-1/2 lg:w-1/3 md:h-90"
    >
      <Link to={link}>{fluidImg}</Link>
      <div className="w-11/12 m-auto bg-white p-2 relative -mt-8 left-0 shadow md:h-40 lg:h-48">
        <header>
          <h3 className="mb-1">
            <Link style={{ boxShadow: `none` }} to={link}>
              {title}
            </Link>
          </h3>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: props.node.frontmatter.description || props.node.excerpt,
            }}
            className="text-sm mb-1"
          />
        </section>
        <small className="text-xs">
          Posted on {Moment(postDate).format(`MMMM Do YYYY`)}
        </small>
      </div>
    </article>
  )
}

export default BlogPostSummary
