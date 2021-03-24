import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Content404 = () => {
  return (
    <Container>
      <HomeLink to="/">
        <h1>404: Not Found</h1>
        <p>The page is under construction. Thank you for understanding.</p>
        <p>Click here to go back</p>
      </HomeLink>
    </Container>
  )
}

export default Content404

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #fa7d09;
`

export const HomeLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  outline: none;
  white-space: nowrap;
  color: #fff;
`
