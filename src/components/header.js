import * as React from "react"
import styled from "styled-components"
import { menuData } from "../data/MenuData"
import { FaBars } from "@react-icons/all-files/fa/FaBars"
import { Link } from "gatsby"

const Header = () => {
  return (
    <Nav>
      <Bars />

      <NavLink to="/">
        <NavLogo>Sulthan Auliya</NavLogo>
      </NavLink>

      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
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
    width: 100%;
    padding: 0;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

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
  color: white;
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
