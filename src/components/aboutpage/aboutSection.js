import React from "react"
import styled from "styled-components"

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutContent></AboutContent>
      </AboutContainer>
    </>
  )
}

export default About

export const AboutContainer = styled.div`
  height: 100vh;

  background-color: black;
`

export const AboutContent = styled.div``
