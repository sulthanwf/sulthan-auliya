import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { Title } from "./title"

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <FirstLine>Hello, my name is</FirstLine>
        <AboutTitle>
          <Title>Sulthan Auliya</Title>
        </AboutTitle>
        <ThirdLine>
          I am a graduate software developer based in New Zealand who likes to
          <br></br>
          design and develop website/web-app. Programming & solving problem is
          <br></br>
          my interest and photography is my hobby.
        </ThirdLine>
        <BtnBorder>
          <Button>Get to know me more</Button>
        </BtnBorder>
      </AboutContent>
    </AboutContainer>
  )
}

export default About

export const AboutContainer = styled.div`
  background: #fa7d09;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0.5rem calc((100vw - 760px) / 2);
  position: relative;
  color: #fff;

  @media screen and (max-width: 769px) {
    padding: 0.5rem calc((100vw - 450px) / 2);
  }
`

export const AboutContent = styled.div``

export const FirstLine = styled.p`
  font-size: clamp(1.25rem, 2vw, 2rem);
  padding: 10px 0;
`

export const AboutTitle = styled.div`
  padding: 10px 0;
`

export const ThirdLine = styled.p`
  font-size: clamp(0.75rem, 1.5vw, 1.5rem);
  padding: 10px 0;
`

export const BtnBorder = styled.div`
  display: flex;
  place-content: center;
  padding: 10px 0;
`
