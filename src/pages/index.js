import React from "react"
import Image from "../components/image"
import { Row, Col } from "react-grid-system"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section style={{margin: '5rem 0'}}>
      <Row>
        <Col md={5} style={{ textAlign: "center" }}>
          <Image />
        </Col>
        <Col md={7} style={{ textAlign: "center" }}>
          <h1>Hello There!</h1>
          <h2>I am Stuart, A full stack Web Developer based in Singapore.</h2>
        </Col>
      </Row>
    </section>
    <section style={{margin: '5rem 0'}}>
    <h1 style={{ textAlign: "center" }}>What I Do</h1>
      <Row style={{ textAlign: "center" }}>
        <Col sm={4}>
          Web Development Card
        </Col>
        <Col sm={4}>
          Design Card
        </Col>
        <Col sm={4}>
          Audio Work
        </Col>
      </Row>
    </section>
    <section style={{margin: '5rem 0'}}>
    <h1 style={{ textAlign: "center" }}>Tech Used</h1>
    <ul>
      <li>JavaScript</li><li>Python</li><li>Ruby</li><li>HTML</li><li>CSS</li><li>git</li><li>node.js</li><li>express.js</li><li>rails</li><li>C#</li><li>Unity</li><li>Pro Tools</li><li>Reaper</li><li>Reason</li><li>PostgreSQL</li>
    </ul>
      
    </section>
  </Layout>
)

export default IndexPage
