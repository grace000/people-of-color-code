import React from "react"

const Landing = ({ landing: { title, subtitle } }) => (
  <div>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </div>
)

export default Landing
