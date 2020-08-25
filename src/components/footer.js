import React from "react"

const Footer = () => (
  <footer>
    <p>People of Color Code</p>
    <div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a className="footer-link" href="https://www.gatsbyjs.org">
        Gatsby
      </a>
    </div>
    <div>
      Illustrations by {` `}
      <a className="footer-link" href="https://usesmash.com/?ref=lapaninja">
        Smash Illustrations
      </a>
    </div>
  </footer>
)

export default Footer
