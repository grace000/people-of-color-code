import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import AboutData from "../data/about-us.json"
import SimpleCard from "./cards/simple-card"

const AboutUs = () => {
  const { title, features, image } = AboutData

  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            fixed(width: 500, height: 320) {
              originalName
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes
  const aboutImage = images.find(
    i => i.childImageSharp.fixed.originalName === image
  )

  return (
    <div className="about-us-wrapper">
      <h2 className="about-us-title">{title}</h2>
      <div className="about-us-card-wrapper">
        <div className="about-us-image">
          <Img fixed={aboutImage.childImageSharp.fixed} />
        </div>
        <div className="about-us-cards">
          {features.map((feature, index) => (
            <SimpleCard key={index} content={feature} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
