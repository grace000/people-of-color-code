import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import SupportingCompanies from "../components/supporting-companies"
import AboutUs from "../components/about-us"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Landing />
      <SupportingCompanies />
      <AboutUs />
    </Layout>
  )
}

export default IndexPage
