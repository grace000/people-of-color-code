import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import SupportingCompanies from "../components/supporting-companies"
import AboutUs from "../components/about-us"
import Organizers from "../components/organizers"
import Values from "../components/values"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Landing />
      <SupportingCompanies />
      <AboutUs />
      <Organizers />
      <Values />
    </Layout>
  )
}

export default IndexPage
