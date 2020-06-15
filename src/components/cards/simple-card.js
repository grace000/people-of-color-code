import React from "react"

const SimpleCard = ({ content: { subtitle, text } }) => (
  <div>
    <div>
      <h3>{subtitle}</h3>
      <p>{text}</p>
    </div>
  </div>
)

export default SimpleCard
