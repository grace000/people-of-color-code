import React from "react"

const CardWithTextLink = ({ content: { title, url, buttonText, text } }) => (
  <div>
    <h3>{title}</h3>
    <p>{text}</p>
    <a href={url} target={"_blank"} rel={"noreferrer"}>
      <button>{buttonText}</button>
    </a>
  </div>
)

export default CardWithTextLink
