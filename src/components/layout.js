import * as React from "react"
import Header from "./header"
import { GlobalStyle } from "./Styles/GlobalStyle"

const Layout = ({ children }) => {
  const page = window.location.href
  const aboutPage = page.match(/about.*/) ? true : false

  return (
    <>
      <GlobalStyle />
      <Header about={aboutPage} />
      <main>{children}</main>
    </>
  )
}

export default Layout
