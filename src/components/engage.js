import React from "react"
import EngageData from "../data/engage.json"
import CardWithTextLink from "./cards/card-with-text-link"

const Engage = () => {
  const { title, tiles } = EngageData

  return (
    <div>
      <h1>{title}</h1>
      {tiles.map((tile, index) => (
        <CardWithTextLink key={index} content={tile} />
      ))}
    </div>
  )
}

export default Engage
