import * as React from "react"
import Header from "./header"
import { GlobalStyle } from "./Styles/GlobalStyle"

const Layout = ({ children }) => {
  const currentWindow = typeof window !== "undefined" && window
  const [page] = currentWindow
    ? React.useState(currentWindow.location.href)
    : "undefined"
  const aboutPage = page.match(/about.*/) ? true : false
  const cvPage = page.match(/cv.*/) ? true : false

  return (
    <>
      <GlobalStyle />
      <Header about={aboutPage} cv={cvPage} />
      <main>{children}</main>
    </>
  )
}

export default Layout
