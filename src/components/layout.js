import * as React from "react"
import Header from "./header"
import { GlobalStyle } from "./Styles/GlobalStyle"
import { useLocation } from "@reach/router"

const Layout = ({ children }) => {
  const location = useLocation().pathname
  const hideHeader = location.match("/cv") ? true : false

  return (
    <>
      <GlobalStyle />
      {!hideHeader ? <Header /> : null}
      <main>{children}</main>
    </>
  )
}

export default Layout
