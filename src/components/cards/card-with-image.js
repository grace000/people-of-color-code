import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const CardWithImage = ({ content: { image, name, url } }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 650) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes
  const cardImage = images.find(
    i => i.childImageSharp.fluid.originalName === image
  )
  return (
    <div className="card-with-image-wrapper">
      <Img fluid={cardImage.childImageSharp.fluid} />
      <div className="card-with-image-content">
        <h3 className="card-with-image-header">{name}</h3>
        <a className="link-logo" href={url} target="_blank" />
      </div>
    </div>
  )
}

export default CardWithImage
