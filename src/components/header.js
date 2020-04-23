import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#653C28`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textTransform: `uppercase` }}>
        <Link
          to="/"
          style={{
            color: `#D8D4D3`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav className="nav-bar">
      <ul className="nav-bar-list">
        <li className="nav-bar-item">
          <Link className="nav-bar-link" to="/blog/">
            Portfolio
          </Link>
        </li>
        <li className="nav-bar-item">
          <Link className="nav-bar-link" to="/about/">
            About
          </Link>
        </li>
        <li className="nav-bar-item">
          <Link className="nav-bar-link" to="/contact/">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
