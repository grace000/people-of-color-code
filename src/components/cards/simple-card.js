import React from "react"

const SimpleCard = ({ content: { subtitle, text }, textLength }) => (
  <div>
    <div
      className={`simple-card-wrapper__${textLength}` || "simple-card-wrapper"}
    >
      <h3
        className={
          `simple-card-subtitle__${textLength}` || "simple-card-subtitle"
        }
      >
        {subtitle}
      </h3>
      <p>{text}</p>
    </div>
  </div>
)

export default SimpleCard
