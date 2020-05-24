import React from "react"
import ValuesData from "../data/values.json"
import CardWithImageText from "./cards/card-with-image-text"

const Values = () => {
  const { title, values } = ValuesData

  return (
    <div>
      <h1>{title}</h1>
      {values.map((value, index) => (
        <CardWithImageText key={index} content={value} />
      ))}
    </div>
  )
}

export default Values
