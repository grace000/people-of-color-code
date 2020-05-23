import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Landing from "../components/landing"
import Content from "../../content.yaml"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const content = Content.params
  const images = data.allFile.nodes
  const landingImage = images.find(
    image => image.childImageSharp.fluid.originalName === content.hero.image
  )
  return (
    <Layout>
      <SEO title="Home" />
      <Landing landing={content.hero} image={landingImage} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allFile {
      nodes {
        childImageSharp {
          fluid(maxWidth: 300) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
