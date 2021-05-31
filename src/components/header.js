import * as React from "react"
import styled from "styled-components"
import { menuData } from "../data/MenuData"
import { FaBars } from "@react-icons/all-files/fa/FaBars"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const Header = () => {
  const location = useLocation().pathname
  const blackHeader = location.match("/about") ? true : false
  const [click, setClick] = React.useState(false)

  const handleClick = () => setClick(!click)

  return (
    <Nav>
      <MobileIcon onClick={handleClick}>
        {click ? <Times /> : <Bars />}
      </MobileIcon>
      <NavLink to="/" black={blackHeader}>
        <NavLogo>Sulthan Auliya</NavLogo>
      </NavLink>

      <NavMenu onClick={handleClick} click={click}>
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
  display: ${({ visible }) => (!visible ? "flex" : "none")};
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

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const Bars = styled(FaBars)`
  color: ${({ black }) => (black ? "#000" : "#fff")};
`

export const Times = styled(FaTimes)`
  color: ${({ black }) => (black ? "#000" : "#fff")};
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
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: #fa7d09;
  }
`
