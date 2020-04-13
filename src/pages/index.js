import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi There!</h1>
    <p>Welcome to Stuart's website.</p>
    <p>I am a full stack engineer trying to do some stuff.</p>
    <Link to="/blog/">Visit my blog</Link>
  </Layout>
)

export default IndexPage
