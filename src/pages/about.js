import * as React from "react"
import About from "../components/aboutpage/aboutSection"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <About />
  </Layout>
)

export default AboutPage
