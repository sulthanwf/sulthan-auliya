import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <HomeLink to="/">
        <h1>404: Not Found</h1>
        <p>The page is under construction. Thank you for understanding</p>
      </HomeLink>
    </Container>
  </Layout>
)

export default NotFoundPage

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const HomeLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  outline: none;
  white-space: nowrap;
  color: #000;
`
