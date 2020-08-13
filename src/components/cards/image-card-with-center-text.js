import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const ImageCardWithCenterText = ({
  content: { subtitle, text, image },
  textLength,
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            fixed(width: 100, height: 74) {
              originalName
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes
  const cardImage = images.find(
    i => i.childImageSharp.fixed.originalName === image
  )

  return (
    <div>
      <div
        className={
          `image-card-center-text-wrapper__${textLength}` ||
          "image-card-center-text-wrapper"
        }
      >
        <Img fixed={cardImage.childImageSharp.fixed} />
        <h3
          className={
            `image-card-center-text-subtitle__${textLength}` ||
            "image-card-center-text-subtitle"
          }
        >
          {subtitle}
        </h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ImageCardWithCenterText
