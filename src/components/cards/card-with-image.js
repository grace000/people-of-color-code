import React from "react"

const CardWithImage = ({ content: { image, name, url } }) => (
  <div>
    <img src={image} />
    <h3>{name}</h3>
    <a href={url} />
  </div>
)

export default CardWithImage
