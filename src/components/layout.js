import * as React from "react"
import Header from "./header"
import { GlobalStyle } from "./Styles/GlobalStyle"
import { useLocation } from "@reach/router"

const Layout = ({ children }) => {
  let location = useLocation()

  console.log(location.pathname)
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
