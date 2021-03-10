import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Button } from "./button"
import { Title } from "./title"
import BackgroundImage from "gatsby-background-image"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const contactBg = data.file.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="div"
      fluid={contactBg}
      css={`
        height: 100vh;
      `}
    >
      <ContactContainer id="contact">
        <ContactContent>
          <ContactTitle>
            <Title
              css={`
                font-size: clamp(4.2rem, 9vw, 6rem);
              `}
            >
              Get in Touch
            </Title>
          </ContactTitle>
          <ContactForm>
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Send your message" />
          </ContactForm>
          <BtnBorder>
            <Button>Send</Button>
          </BtnBorder>
        </ContactContent>
      </ContactContainer>
    </BackgroundImage>
  )
}

export default Contact

export const ContactContainer = styled.div`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem calc((100vw - 690px) / 2);
  position: relative;
  color: #fff;
`

export const ContactContent = styled.div`
  padding: 0 1rem;
  width: 100%;
`

export const ContactTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin: 10px 0;
    height: 75px;
    border: none;
    border-radius: 10px 10px 0 0;
    ::placeholder {
      font-size: 1.5rem;
      font-weight: 500;
      color: black;
      position: relative;
      left: 2rem;
      top: 5px;
    }
  }

  textarea {
    margin: 10px 0;
    height: 350px;
    border: none;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    resize: none;
    ::placeholder {
      font-size: 1.5rem;
      font-weight: 500;
      color: black;
      position: relative;
      left: 2rem;
      top: 5px;
    }
  }
`

export const BtnBorder = styled.div`
  display: flex;
  place-content: center;
  padding: 10px 0;
`
