import React from "react"
import AboutData from "../data/about-us.json"

const AboutUs = () => {
  const { title, features } = AboutData

  return (
    <div>
      <h1>{title}</h1>
      {features.map(({ subtitle, text }) => (
        <div>
          <h2>{subtitle}</h2>
          <p>{text}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutUs
