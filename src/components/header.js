import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

const Header = ({ navigation }) => {
  const [isNavVisible, setNavVisibility] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)")
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }

  const toggleNav = () => {
    setNavVisibility(!isNavVisible)
  }

  return (
    <header className="header">
      <h3 className="logo">LOGO</h3>

      {(!isSmallScreen || isNavVisible) && (
        <nav className="navigation">
          {navigation.map((item, index) => (
            <h3>
              <a key={index} href={`#${item}`}>
                {item}
              </a>
            </h3>
          ))}
        </nav>
      )}
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>
  )
}

Header.propTypes = {
  navigation: PropTypes.array,
}

Header.defaultProps = {
  navigation: [],
}

export default Header
