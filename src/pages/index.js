import React from "react"
import Image from "../components/image"
import { Row, Col } from "react-grid-system"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faServer,
  faPaintBrush,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons"

const cardStyle = {
  background: "#263A38",
  margin: `0.25rem`,
  color: `#A2AB84`,
  padding: `1rem`,
  height: `300px`,
  borderRadius: `25px`,
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section style={{ margin: "5rem 0" }}>
      <Row>
        <Col md={5} style={{ textAlign: "center", margin: "0 auto" }}>
          <Image />
        </Col>
        <Col
          md={7}
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1>Hi there!</h1>
            <p>I am Stuart, A full stack web developer based in Singapore.</p>
          </div>
        </Col>
      </Row>
    </section>
    <section style={{ margin: "5rem 0" }}>
      <h1 style={{ textAlign: "center" }}>What I Do</h1>
      <Row style={{ textAlign: "center" }}>
        <Col lg={4}>
          <div style={cardStyle}>
            <FontAwesomeIcon
              icon={faServer}
              size="2x"
              style={{ margin: `1rem 0` }}
            />
            <h2>Development</h2>
            <p>
              Responsive <strong>web apps</strong>, from mobile to desktop.
              Using the latest technologies.
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div style={cardStyle}>
            <FontAwesomeIcon
              icon={faPaintBrush}
              size="2x"
              style={{ margin: `1rem 0` }}
            />
            <h2>Site Design</h2>
            <p>
              I am passionate about designing apps that are a{" "}
              <strong>joy to use.</strong>
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div style={cardStyle}>
            <FontAwesomeIcon
              icon={faHeadphones}
              size="2x"
              style={{ margin: `1rem 0` }}
            />
            <h2>Audio Work</h2>
            <p>
              From corporate, live action, to television and feature film. I can
              make your project <strong>sound its very best.</strong>
            </p>
          </div>
        </Col>
      </Row>
    </section>
    <section style={{ margin: "5rem 0" }}>
      <h1 style={{ textAlign: "center" }}>Tech Used</h1>
      <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Ruby</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>git</li>
        <li>node.js</li>
        <li>express.js</li>
        <li>rails</li>
        <li>C#</li>
        <li>Unity</li>
        <li>Pro Tools</li>
        <li>Reaper</li>
        <li>Reason</li>
        <li>PostgreSQL</li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
