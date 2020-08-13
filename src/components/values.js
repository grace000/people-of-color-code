import React from "react"
import ValuesData from "../data/values.json"
import ImageCardWithCenterText from "./cards/image-card-with-center-text"

const Values = () => {
  const { title, values } = ValuesData

  return (
    <div className="values-wrapper">
      <h2 className="values-title">{title}</h2>
      <div className="values-image-cards-wrapper">
        {values.map((value, index) => (
          <ImageCardWithCenterText
            key={index}
            content={value}
            textLength={"short"}
          />
        ))}
      </div>
    </div>
  )
}

export default Values
