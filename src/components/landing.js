import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import LandingData from "../data/landing.json"

const Landing = () => {
  const { title, subtitle, image } = LandingData

  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            fixed(width: 700, height: 500) {
              originalName
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes
  const landingImage = images.find(
    i => i.childImageSharp.fixed.originalName === image
  )

  return (
    <div className="landing-wrapper">
      <div className="landing-text">
        <h1 className="landing-title">{title}</h1>
        <p className="landing-subtitle">{subtitle}</p>
      </div>
      <div className="landing-image">
        <Img fixed={landingImage.childImageSharp.fixed} />
      </div>
    </div>
  )
}

export default Landing
