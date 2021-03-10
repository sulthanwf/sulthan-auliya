import React from "react"
import styled from "styled-components"

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
          <FS3FirstLine>Links</FS3FirstLine>
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
  position: absolute;
  bottom: 0;
  left: 25vw;
  z-index: 10;
  color: white;
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
  padding: 0 3.5rem 0 0;
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
`
export const FS2FirstLine = styled.div``
export const FS2SecondLine = styled.div``

export const FSection3 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`
export const FS3FirstLine = styled.div``
export const FS3SecondLine = styled.div``
