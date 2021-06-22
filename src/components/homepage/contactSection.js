import React, { useState } from "react"
import styled from "styled-components"
import { Title } from "../Title"
import firebase from "gatsby-plugin-firebase"
import { ButtonB } from "../Button"

const ContactSection = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const timestamp = new Date()

  const [validEmail, setValidEmail] = useState([])
  const [validMessage, setValidMessage] = useState("")

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
          alert("Your message has been sent")
        })
        .catch(error => {
          alert(error.message)
        })

      setEmail("")
      setMessage("")
    }
  }

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <ContactTitle>
          <Title>Get in Touch</Title>
        </ContactTitle>
        <ContactForm onSubmit={handleSubmit}>
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
          <BtnBorder>
          <ButtonB type="submit">Send</ButtonB>
        </BtnBorder>
        </ContactForm>

      </ContactContent>
    </ContactContainer>
  )
}

export default ContactSection

export const ContactContainer = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0.5rem calc((100vw - 690px) / 2);
  position: relative;
  color: #fff;

  @media screen and (min-width: 1440px) {
    padding-bottom: 10rem;
  }

  @media screen and (min-width: 1024px) {
    padding-bottom: 5rem;
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

export const ValidationMsg = styled.span`
  display: none;
  color: #ff6600;
  margin: -0.5rem 0;

  &.invalid {
    display: flex;
  }
`

export const BtnBorder = styled.div`
  display: flex;
  place-content: center;
  padding: 10px 0;
`
