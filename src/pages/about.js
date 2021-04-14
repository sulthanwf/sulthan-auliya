import * as React from "react"
import About from "../components/aboutpage/About"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <About />
  </Layout>
)

export default AboutPage
