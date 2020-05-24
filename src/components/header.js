import PropTypes from "prop-types"
import React from "react"

const Header = ({ navigation }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <ul>
          {navigation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  navigation: PropTypes.array,
}

Header.defaultProps = {
  navigation: [],
}

export default Header
