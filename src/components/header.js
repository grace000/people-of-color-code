import PropTypes from "prop-types"
import React from "react"

const Header = ({ navigation }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <ul className="header-list">
          {navigation.map((item, index) => (
            <li className="header-item" key={index}>
              {item}
            </li>
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
