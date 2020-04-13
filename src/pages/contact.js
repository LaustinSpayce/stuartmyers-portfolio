import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Page</h1>
    <p>This page will contain information how to contact me. How nice. Maybe a form will be neat</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
