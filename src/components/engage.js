import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import EngageData from "../data/engage.json"
import CardWithTextLink from "./cards/card-with-text-link"

const Engage = () => {
  const { title, tiles, image } = EngageData

  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 320) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes
  const engageImage = images.find(
    i => i.childImageSharp.fluid.originalName === image
  )

  return (
    <div className="engage-wrapper">
      <h2 className="engage-title">{title}</h2>
      <div className="engage-cards-wrapper">
        <div className="engage-image">
          <Img fluid={engageImage.childImageSharp.fluid} />
        </div>
        <div className="engage-cards">
          {tiles.map((tile, index) => (
            <CardWithTextLink key={index} content={tile} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Engage
