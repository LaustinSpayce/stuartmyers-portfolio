import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Stuart Myers Full Stack Developer Software Programmer Singapore" />
    <h1>About</h1>
    <p>Hello, I am Stuart, a full-stack developer living in sunny Singapore.</p>
    <p>
      In a past life I worked in audio post production for film, TV and
      interactive media.
    </p>
    <p>I am passionate about building programmes that are a joy to use.</p>
    <h3>Some of the cool stuff I use for programming:</h3>
    <ul>
      <li>Javascript</li>
      <li>node.js</li>
      <li>react</li>
      <li>Ruby on Rails</li>
      <li>Python</li>
      <li>C#</li>
    </ul>
    <h3>Some of my other skills:</h3>
    <ul>
      <li>Pro Tools</li>
      <li>Dialogue and sound effects Editing</li>
      <li>Reason</li>
      <li>Fairlight</li>
    </ul>
  </Layout>
)

export default SecondPage