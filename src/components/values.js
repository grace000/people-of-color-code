import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import ValuesData from "../data/values.json"
import SimpleCard from "./cards/simple-card"

const Values = () => {
  const { title, values } = ValuesData

  return (
    <div className="values-wrapper">
      <h2 className="values-title">{title}</h2>
      <div className="values-image-cards-wrapper">
        {values.map((value, index) => (
          <SimpleCard key={index} content={value} textLength={"short"} />
        ))}
      </div>
    </div>
  )
}

export default Values
