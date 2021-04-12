import React from "react"
import styled from "styled-components"

const CV = () => {
  return (
    <>
      <Container>
        <Title>Sulthan Auliya</Title>
        <ContactDetails>
          <span>IT Graduate</span>
          <span>Invercargill, 9812</span>
          <span>028 4225 214</span>
        </ContactDetails>
      </Container>
    </>
  )
}

export default CV

export const Container = styled.div``

export const Title = styled.h1``

export const ContactDetails = styled.div``
