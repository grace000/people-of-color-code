import React from "react"
import EventsData from "../data/events.json"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "./carousel"

const Events = () => {
  const { title, images } = EventsData

  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            fixed(width: 500, height: 300) {
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
    <div id="Events" className="events-wrapper">
      <h2 className="events-title">{title}</h2>
      <Carousel images={eventImages} />
    </div>
  )
}

export default Events
