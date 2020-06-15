import React from "react"
import SupportData from "../data/supporters.json"

const SupportingCompanies = () => {
  const { supporterMessage } = SupportData
  return <h3 className="supporting-companies-header">{supporterMessage}</h3>
}

export default SupportingCompanies
