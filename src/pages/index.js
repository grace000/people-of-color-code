import React from "react"
import "../assets/scss/layout.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import SupportingCompanies from "../components/supporting-companies"
import AboutUs from "../components/about-us"
import Organizers from "../components/organizers"
import Values from "../components/values"
import Events from "../components/events"
import Engage from "../components/engage"
import ContactUs from "../components/contact-us"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Landing />
      <SupportingCompanies />
      <AboutUs />
      <Organizers />
      <Values />
      <Events />
      <Engage />
      <ContactUs />
    </Layout>
  )
}

export default IndexPage
