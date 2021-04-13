import * as React from "react"
import CV from "../components/cvpage/CV"
import SEO from "../components/seo"
import { GlobalStyle } from "../components/Styles/GlobalStyle"

const CVPage = () => (
  <>
    <GlobalStyle />
    <SEO title="CV Page" />
    <CV />
  </>
)

export default CVPage
