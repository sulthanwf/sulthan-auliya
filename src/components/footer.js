import React from "react"
import styled from "styled-components"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { SocMedLink } from "./CornerLinks"
import { menuData } from "../data/MenuData"
import { NavLink } from "./header"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FSection1>
          <div>Designed & Developed by</div>
          <div>
            <NavLink to="/">Sulthan Auliya</NavLink>
          </div>
          <div>© 2021</div>
        </FSection1>
        <FSection2>
          {menuData.slice(0, 2).map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </FSection2>
        <FSection3>
          <FS3FirstLine>
            <SocMedLink
              to="https://www.linkedin.com/in/sulthanauliya"
              target="_blank"
            >
              <FaGithub />
            </SocMedLink>
            <SocMedLink to="https://github.com/sulthanwf" target="_blank">
              <FaInstagram />
            </SocMedLink>
            <SocMedLink to="https://www.instagram.com/swafiee" target="_blank">
              <FaLinkedinIn />
            </SocMedLink>
          </FS3FirstLine>
          <FS3SecondLine>sulthanwf@gmail.com</FS3SecondLine>
        </FSection3>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer

export const FooterContainer = styled.div`
  background: #fa7d09;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 150px;
  border-radius: 10px 10px 0 0;
  position: sticky;
  margin: -150px 0 0 0;
  left: 25%;
  z-index: 10;
  color: white;

  @media screen and (max-width: 1440px) {
    height: 100px;
    margin: -100px 0 0 0;
  }

  @media screen and (max-width: 1024px) {
    width: 100vw;
    position: absolute;
    left: 0;
    border-radius: 0;
  }

  @media screen and (max-height: 500px) {
    position: sticky;
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    position: sticky;
    margin: 0;
    height: max-content;
  }
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-areas: "title links socialmedia";
  width: 100%;

  @media screen and (max-width: 500px) {
    grid-template-areas:
      "socialmedia links"
      "title title";
    position: sticky;
    margin: 0;
    height: max-content;
    padding: 0.5rem 0;
  }
`

export const FooterLink = styled(NavLink)``

export const FSection1 = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  width: max-content;
  place-content: center;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: row;
    place-self: center;
    width: 90vw;
    margin-top: 0.5rem;
    border-top: 1px #fff solid;
  }

  :first-child {
    font-size: 1rem;
    font-weight: 500;

    @media screen and (max-width: 1440px) {
      font-size: 0.5rem;
    }
    @media screen and (max-width: 500px) {
      padding: 0 0.5rem 0 0;
    }
  }

  :nth-child(2) {
    font-size: 2rem;
    font-weight: 500;

    @media screen and (max-width: 1440px) {
      font-size: 1rem;
    }
  }

  :nth-child(3) {
    display: flex;
    justify-content: flex-end;
    font-size: 1rem;
    font-weight: 500;

    @media screen and (max-width: 1440px) {
      font-size: 0.5rem;
    }
  }
`

export const FSection2 = styled.div`
  grid-area: links;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  place-items: center;
  justify-content: space-evenly;

  a {
    height: unset;
    @media screen and (max-width: 1440px) {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 0 0.5rem;
  }
`

export const FSection3 = styled.div`
  grid-area: socialmedia;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2rem;
  width: max-content;

  @media screen and (max-width: 500px) {
    padding: 0 0.5rem;
  }
`
export const FS3FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: clamp(25px, 2.5vw, 50px);
`
export const FS3SecondLine = styled.div`
  display: flex;
  font-size: 1.5rem;

  @media screen and (max-width: 1440px) {
    font-size: 1rem;
  }
`
