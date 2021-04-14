import React from "react"
import styled from "styled-components"
import AboutSection from "./aboutSection"
import ContactSection from "./contactSection"
import GallerySection from "./gallerySection"
import HeroSection from "./heroSection"
import Footer from "../Footer"

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </HomeContainer>
  )
}

export default Home

export const HomeContainer = styled.div``
