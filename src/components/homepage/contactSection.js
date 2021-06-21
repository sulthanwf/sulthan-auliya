import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Title } from "../Title"
import BackgroundImage from "gatsby-background-image"
import firebase from "gatsby-plugin-firebase"
import { ButtonB } from "../Button"
import MsgBox from "../msgBox"

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
  const contactBg = data.file.childImageSharp.fluid

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const timestamp = new Date()

  const [validEmail, setValidEmail] = useState([])
  const [validMessage, setValidMessage] = useState("")
  const [msgBox, setMsgBox] = useState(true)

  const toggleMsgBox = () => {
    setMsgBox(!msgBox)
  }

  //Form Validation
  const validateInput = () => {
    let successCount = 0
    let isInputsValid = false

    if (email === "") {
      setValidEmail(["invalid", "Please enter your email"])
    } else if (!isEmail(email)) {
      setValidEmail(["invalid", "Please enter a valid email"])
    } else {
      setValidEmail(["", ""])
      successCount++
    }

    if (message === "") {
      setValidMessage(["invalid", "Please enter your message"])
    } else {
      setValidMessage(["", ""])
      successCount++
    }

    if (successCount === 2) {
      isInputsValid = true
    }
    return isInputsValid
  }

  const isEmail = email => {
    const checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return checkEmail.test(email)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (validateInput()) {
      firebase
        .firestore()
        .collection("Messages")
        .add({
          email: email,
          message: message,
          timestamp: timestamp,
        })
        .then(() => {
          toggleMsgBox()
        })
        .catch(error => {
          alert(error.message)
        })

      setEmail("")
      setMessage("")
    }
  }

  return (
    <BackgroundImage
      Tag="div"
      fluid={contactBg}
      css={`
        height: 100vh;
      `}
    >
      <ContactContainer id="contact">
        <ContactContent onSubmit={handleSubmit}>
          <ContactTitle>
            <Title>Get in Touch</Title>
          </ContactTitle>
          <ContactForm>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <ValidationMsg className={validEmail[0]}>
              {validEmail[1]}
            </ValidationMsg>
            <textarea
              placeholder="Send your message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <ValidationMsg className={validMessage[0]}>
              {validMessage[1]}
            </ValidationMsg>
          </ContactForm>
          <BtnBorder>
            <ButtonB type="submit">Send</ButtonB>
          </BtnBorder>
        </ContactContent>

        {msgBox ? <MsgBox show={msgBox} toggle={toggleMsgBox} /> : null}
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

export const ContactContent = styled.form`
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

export const ValidationMsg = styled.span`
  display: none;
  color: #cf0000;

  &.invalid {
    display: flex;
  }
`

export const BtnBorder = styled.div`
  display: flex;
  place-content: center;
  padding: 10px 0;
`
