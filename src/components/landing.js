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
            fluid(maxWidth: 300) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes
  const landingImage = images.find(
    i => i.childImageSharp.fluid.originalName === image
  )

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fluid={landingImage.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default Landing
