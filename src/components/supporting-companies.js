import React from "react"
import SupportData from "../data/supporters.json"

const SupportingCompanies = () => {
  const { supporterMessage } = SupportData
  return <h1>{supporterMessage}</h1>
}

export default SupportingCompanies
