import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import SupportData from "../data/supporters.json"

const SupportingCompanies = () => {
  const { supporterMessage, companies } = SupportData

  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            fixed(height: 170, width: 160) {
              originalName
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes
  const companyLogo = images.find(
    i => i.childImageSharp.fixed.originalName === companies.logo
  )
  console.log(companyLogo, "logog here")
  return (
    <div className="supporting-companies-wrapper">
      <h2 className="supporting-companies-header">{supporterMessage}</h2>
      <div className="supporting-company-logo">
        <Img fixed={companyLogo.childImageSharp.fixed} />
      </div>
    </div>
  )
}

export default SupportingCompanies
