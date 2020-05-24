import React from "react"

const SimpleCard = ({ content: { subtitle, text } }) => (
  <div>
    <div>
      <h2>{subtitle}</h2>
      <p>{text}</p>
    </div>
  </div>
)

export default SimpleCard
