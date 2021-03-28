import * as React from "react"
import About from "../components/homepage/aboutSection"
import Contact from "../components/homepage/contactSection"
import Gallery from "../components/homepage/gallerySection"
import Hero from "../components/homepage/heroSection"
import CornerLinks from "../components/CornerLinks"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CornerLinks />
    <Hero />
    <About />
    <Gallery />
    <Contact />
  </Layout>
)

export default IndexPage
