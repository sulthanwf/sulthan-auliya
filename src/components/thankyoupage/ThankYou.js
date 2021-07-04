import React from "react"
import styled from "styled-components"
import { NavLink } from "../header"
import { Title } from "../Title"

const ThankYou = () => {
  return (
    <>
      <ThankYouContainer>
        <ThankYouContent>
          <Title>Thank You</Title>
          <ThankYouMessage>
            <NavLink to="/">
              Thanks for your message! click here to go back home
            </NavLink>
          </ThankYouMessage>
        </ThankYouContent>
      </ThankYouContainer>
    </>
  )
}

export default ThankYou

export const ThankYouContainer = styled.div`
  background: #ff6600;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  color: #fff;
`

export const ThankYouContent = styled.div`
  padding: 0.5rem calc((100vw - 1300px) / 2);
  text-align: center;
`

export const ThankYouMessage = styled.p``
