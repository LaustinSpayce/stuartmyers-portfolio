import React from "react"
import { Link } from "gatsby"

import FrontPageLayout from "../components/frontpagelayout"
import SEO from "../components/seo"

const IndexPage = () => (
  <FrontPageLayout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <h2>Stuart Myers</h2>
    <p>Full Stack Web Developer bsed in Singapore</p>
    <Link to="/blog/">Portfolio</Link>
    <Link to="/about/">About</Link>
    <Link to="/contact/">Contact</Link>
  </FrontPageLayout>
)

export default IndexPage
