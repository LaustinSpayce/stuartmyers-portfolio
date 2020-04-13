import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Send me a message</h1>
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Your Name: <input type="text" name="name" style={{ width: "100%" }} />
        </label>
      </p>
      <p>
        <label>
          Your Email:{" "}
          <input type="email" name="email" style={{ width: "100%" }} />
        </label>
      </p>
      <p>
        <label>
          Message:{" "}
          <textarea name="message" style={{ width: "100%" }}></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default SecondPage
