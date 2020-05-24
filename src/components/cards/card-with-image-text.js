import React from "react"

const CardWithImageText = ({ content: { title, image, text } }) => (
  <div>
    <img src={image} />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)

export default CardWithImageText
