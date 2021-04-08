import * as React from "react"
import CornerLinks from "../components/CornerLinks"
import Home from "../components/homepage/Home"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CornerLinks />
    <Home />
  </Layout>
)

export default IndexPage
