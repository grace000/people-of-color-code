import React from "react"
import OrganizerData from "../data/organizers.json"
import CardWithImage from "./card-with-image"

const Organizers = () => {
  const { title, tiles } = OrganizerData

  return (
    <div>
      <h1>{title}</h1>
      {tiles.map((tile, index) => (
        <CardWithImage key={index} content={tile} />
      ))}
    </div>
  )
}

export default Organizers
