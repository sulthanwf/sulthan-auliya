import * as React from "react"
import About from "../components/about"
import Contact from "../components/contact"
import Gallery from "../components/gallery"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Gallery />
    <Contact />
  </Layout>
)

export default IndexPage
