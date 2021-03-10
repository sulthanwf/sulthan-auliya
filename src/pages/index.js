import * as React from "react"
import About from "../components/aboutSection"
import Contact from "../components/contactSection"
import Gallery from "../components/gallerySection"
import Hero from "../components/heroSection"
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
