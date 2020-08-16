import React from "react"
import EventsData from "../data/events.json"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Events = () => {
  const { title, images } = EventsData

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

  const allSiteImages = data.allFile.nodes

  const eventImages = images.map(image =>
    allSiteImages.find(i => i.childImageSharp.fixed.originalName === image)
  )

  return (
    <div>
      <h2>{title}</h2>
      <div>
        {eventImages.map(eventImage => (
          <Img fixed={eventImage.childImageSharp.fixed} />
        ))}
      </div>
    </div>
  )
}

export default Events
