import React from "react"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: "flex" }}>
      <div style={{ flexBasis: "50em", maxWidth: "50%" }}>
        <Image />
      </div>
      <div style={{ textAlign: "center", width: "100%" }}>
        <h1>Hello There!</h1>
        <h2>I am Stuart Myers</h2>
        <p> A full stack Web Developer based in Singapore</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
