import React from "react"
import OrganizerData from "../data/organizers.json"
import CardWithImage from "./cards/card-with-image"

const Organizers = () => {
  const { title, tiles } = OrganizerData

  return (
    <div className="organizers-wrapper">
      <h2 className="organizers-title">{title}</h2>
      <div className="organizers-cards">
        {tiles.map((tile, index) => (
          <CardWithImage key={index} content={tile} />
        ))}
      </div>
    </div>
  )
}

export default Organizers
