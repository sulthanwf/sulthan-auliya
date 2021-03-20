import React from "react"
import styled from "styled-components"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { SocMedLink } from "./socialMediaLinks"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FSection1>
          <FS1FirstLine>Designed & Developed by</FS1FirstLine>
          <FS1SecondLine>Sulthan Auliya</FS1SecondLine>
          <FS1SThirdLine>© 2021</FS1SThirdLine>
        </FSection1>
        <FSection2>
          <FS2FirstLine>About</FS2FirstLine>
          <FS2SecondLine>Gallery</FS2SecondLine>
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
  height: 200px;
  border-radius: 10px 10px 0 0;
  position: sticky;
  margin: -200px 0 0 0;
  left: 25%;
  z-index: 10;
  color: white;

  @media screen and (max-width: 1440px) {
    height: 100px;
    margin: -100px 0 0 0;
  }

  @media screen and (max-width: 769px) {
    width: 100vw;
    position: absolute;
    left: 0;
    border-radius: 0;
  }
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
`

export const FSection1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  width: max-content;
  place-content: center;
`
export const FS1FirstLine = styled.div`
  font-size: 1rem;
  font-weight: 500;

  @media screen and (max-width: 1440px) {
    font-size: 0.5rem;
  }
`
export const FS1SecondLine = styled.div`
  font-size: 2rem;
  font-weight: 500;

  @media screen and (max-width: 1440px) {
    font-size: 1rem;
  }
`
export const FS1SThirdLine = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  font-weight: 500;

  @media screen and (max-width: 1440px) {
    font-size: 0.5rem;
  }
`

export const FSection2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  justify-content: center;
  place-items: center;
  font-size: 1.5rem;
`
export const FS2FirstLine = styled.div``
export const FS2SecondLine = styled.div``

export const FSection3 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  font-size: 1.5rem;
  width: max-content;
`
export const FS3FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: clamp(25px, 2.5vw, 50px);
  padding: 0.5rem 0;
`
export const FS3SecondLine = styled.div``
