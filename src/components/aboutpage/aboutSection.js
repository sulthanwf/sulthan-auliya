import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Button } from "../Button"
import { Title } from "../Title"

const AboutSection = () => {
  return (
    <>
      <AboutContainer>
        <AboutContent>
          <AboutImage>
            <StaticImage src="../../images/me.jpg" alt="" />
          </AboutImage>
          <AboutParagraph>
            <Title>
              About
              <HorizontalLine />
            </Title>

            <p>
              I am a New Zealand based software developer who likes spending
              time learning the programming language that I enjoy using.
            </p>
            <p>
              I mainly develop in web using HTML, CSS & JavaScript and enjoyed
              using ReactJS framework for my side projects and this website.
            </p>
            <p>
              I am also delve into creative work because it allows my mind to
              wander into different possibilities that allows for a complex
              outcome.
            </p>
            <ButtonGroup>
              <Button inverse="true" to="/gallery">
                Take a Look on my Gallery
              </Button>
              <Button inverse="true" to="/cv">
                Checkout my CV
              </Button>
            </ButtonGroup>
          </AboutParagraph>
        </AboutContent>
      </AboutContainer>
    </>
  )
}

export default AboutSection

export const AboutContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  color: #fff;

  @media screen and (max-width: 769px) {
    height: unset;
  }
`

export const AboutContent = styled.div`
  display: flex;
  margin-top: 2rem;
  padding: 0.5rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 769px) {
    padding: 0.5rem calc((100vw - 450px) / 2);
    flex-direction: column;
    margin-top: 6rem;
  }
`

export const AboutImage = styled.div`
  padding: 0 1rem;
  width: 600px;
  object-fit: contain;
  align-self: center;

  @media screen and (max-width: 1440px) {
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
  }
`
export const AboutParagraph = styled.div`
  padding: 0 1rem;
  color: #000;
  max-width: 650px;

  h1 {
    max-width: min-content;
    padding-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
    text-align: justify;
    padding-bottom: 2rem;
    @media screen and (max-width: 1440px) {
      padding-bottom: 1rem;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const HorizontalLine = styled.div`
  width: clamp(150px, 14vw, 250px);
  border-top: 2px black solid;
  position: relative;
  left: 10%;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`
