import React from "react"
import styled from "styled-components"
import AboutSection from "./aboutSection"
import ContactSection from "./contactSection"
import GallerySection from "./gallerySection"
import HeroSection from "./heroSection"

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
    </HomeContainer>
  )
}

export default Home

export const HomeContainer = styled.div``
