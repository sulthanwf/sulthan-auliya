import * as React from "react"
import CV from "../components/cvpage/CV"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GlobalStyle } from "../components/Styles/GlobalStyle"

const CVPage = () => (
  <>
    <GlobalStyle />
    <SEO title="Gallery" />
    <CV />
  </>
)

export default CVPage
