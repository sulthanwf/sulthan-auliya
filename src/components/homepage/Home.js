import React from "react"
import styled from "styled-components"
import About from "./aboutSection"
import Contact from "./contactSection"
import Gallery from "./gallerySection"
import Hero from "./heroSection"

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </HomeContainer>
  )
}

export default Home

export const HomeContainer = styled.div``
