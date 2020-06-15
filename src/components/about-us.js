import React from "react"
import AboutData from "../data/about-us.json"
import SimpleCard from "./cards/simple-card"

const AboutUs = () => {
  const { title, features } = AboutData

  return (
    <div className="about-us-wrapper">
      <h2>{title}</h2>
      {features.map((feature, index) => (
        <SimpleCard key={index} content={feature} />
      ))}
    </div>
  )
}

export default AboutUs
