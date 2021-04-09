import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Button } from "../Button"
import { Title } from "../Title"
import BackgroundImage from "gatsby-background-image"

const ContactSection = () => {
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

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleEmailChange = e => {
    setEmail({ value: e.target.value })
  }

  const handleMessageChange = e => {
    setMessage({ value: e.target.value })
  }

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
            <Title>Get in Touch</Title>
          </ContactTitle>
          <ContactForm>
            <input
              type="email"
              placeholder="Your email"
              value={email.value}
              onChange={handleEmailChange}
            />
            <textarea
              placeholder="Send your message"
              value={message.value}
              onChange={handleMessageChange}
            />
          </ContactForm>
          <BtnBorder>
            <Button to="/send" type="submit">
              Send
            </Button>
          </BtnBorder>
        </ContactContent>
      </ContactContainer>
    </BackgroundImage>
  )
}

export default ContactSection

export const ContactContainer = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem calc((100vw - 690px) / 2);
  position: relative;
  color: #fff;

  @media screen and (min-width: 1440px) {
    padding-bottom: 10rem;
  }

  @media screen and (min-width: 1024px) {
    padding-bottom: 5rem;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 100%,
        rgba(0, 0, 0, 0.2) 0%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

export const ContactContent = styled.div`
  padding: 0 1rem;
  width: unset;
  z-index: 10;
`

export const ContactTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin: 10px 0;
    height: 7.5vh;
    border: none;
    border-radius: 10px 10px 0 0;
    padding: 0 1rem;
    font-size: 1.25rem;
    font-family: "Montserrat", sans-serif;
    ::placeholder {
      font-size: 1.5rem;
      font-family: "Titillium Web", sans-serif;
      font-weight: 500;
      color: black;
      position: relative;
    }

    :focus {
      outline: none;
    }
  }

  textarea {
    margin: 10px 0;
    height: 30vh;
    border: none;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    resize: none;
    padding: 1rem;
    font-size: 1.25rem;
    font-family: "Montserrat", sans-serif;
    ::placeholder {
      font-size: 1.5rem;
      font-weight: 500;
      font-family: "Titillium Web", sans-serif;
      color: black;
      position: relative;
      top: -5px;
    }
  }
`

export const BtnBorder = styled.div`
  display: flex;
  place-content: center;
  padding: 10px 0;
`
