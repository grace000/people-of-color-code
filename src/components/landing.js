import React from "react"
import Img from "gatsby-image"

const Landing = ({ landing: { title, subtitle }, image }) => (
  <div>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <Img fluid={image.childImageSharp.fluid} />
  </div>
)

export default Landing
