import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faServer,
  faPaintBrush,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons"

const cardStyle = {
  background: `#653C28`,
  margin: `0.25rem`,
  color: `#D8D4D3`,
  padding: `1rem`,
  height: `300px`,
  borderRadius: `25px`,
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section style={{ margin: "5rem 0" }}>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2 h-auto" style={{ textAlign: "center" }}>
          <Image />
        </div>
        <div
          className="col-span-3"
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1>Hi there!</h1>
            <p>I am Stuart, a full stack web developer based in Singapore.</p>
          </div>
        </div>
      </div>
    </section>
    <section style={{ margin: "5rem 0" }}>
      <h1 style={{ textAlign: "center" }}>What I Do</h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ textAlign: "center" }}
      >
        <div className="col-span-1">
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
        </div>
        <div className="col-span-1">
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
        </div>
        <div className="col-span-1">
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
        </div>
      </div>
    </section>
    <section style={{ margin: "5rem 0" }}>
      <h1 style={{ textAlign: "center" }}>Tech Used</h1>
      <ul className="skills-list">
        <li className="skills-list-item">JavaScript</li>
        <li className="skills-list-item">Python</li>
        <li className="skills-list-item">Ruby</li>
        <li className="skills-list-item">HTML</li>
        <li className="skills-list-item">CSS</li>
        <li className="skills-list-item">git</li>
        <li className="skills-list-item">node.js</li>
        <li className="skills-list-item">express.js</li>
        <li className="skills-list-item">rails</li>
        <li className="skills-list-item">C#</li>
        <li className="skills-list-item">Unity</li>
        <li className="skills-list-item">Pro Tools</li>
        <li className="skills-list-item">Reaper</li>
        <li className="skills-list-item">Reason</li>
        <li className="skills-list-item">PostgreSQL</li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
