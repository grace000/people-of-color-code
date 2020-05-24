import React from "react"
import EventsData from "../data/events.json"

const Events = () => {
  const { title } = EventsData

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Events
