import * as React from "react"
import styled from "styled-components"
import { menuData } from "../data/MenuData"
import { FaBars } from "@react-icons/all-files/fa/FaBars"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const Header = () => {
  const location = useLocation().pathname
  const blackHeader = location.match("/about") ? true : false
  return (
    <Nav>
      <Bars black={blackHeader} />

      <NavLink to="/" black={blackHeader}>
        <NavLogo>Sulthan Auliya</NavLogo>
      </NavLink>

      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index} black={blackHeader}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  )
}

export default Header

export const Nav = styled.div`
  background: transparent;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100vw;

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: ${({ black }) => (black ? "#000" : "#fff")};

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavLink = styled(Link)`
  color: ${({ black }) => (black ? "#000" : "#fff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 1.5rem;
  cursor: pointer;
`

export const NavLogo = styled.div`
  font-size: 2rem;
  font-weight: 600;
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
