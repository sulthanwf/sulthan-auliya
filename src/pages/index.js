import * as React from "react"
import About from "../components/home-sections/aboutSection"
import Contact from "../components/home-sections/contactSection"
import Gallery from "../components/home-sections/gallerySection"
import Hero from "../components/home-sections/heroSection"
import CornerLinks from "../components/cornerLinks"
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
