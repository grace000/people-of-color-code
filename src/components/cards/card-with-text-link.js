import React from "react"

const CardWithTextLink = ({ content: { title, url, buttonText, text } }) => (
  <div className="card-with-text-wrapper">
    <h3 className="card-with-text-title">{title}</h3>
    <p className="card-with-text-text">{text}</p>
    <a href={url} target={"_blank"} rel={"noreferrer"}>
      <button className="card-with-text-button">{buttonText}</button>
    </a>
  </div>
)

export default CardWithTextLink
