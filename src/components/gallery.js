import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { Title } from "./title"
import BackgroundImage from "gatsby-background-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gallery-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const galleryBg = data.file.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="div"
      fluid={galleryBg}
      css={`
        height: 100vh;
      `}
    >
      <GalleryContainer id="gallery">
        <GalleryContent>
          <FirstLine>Beside the technical stuff I also like</FirstLine>
          <GalleryTitle>
            <Title>Capture & Create</Title>
          </GalleryTitle>
          <ThirdLine>
            I like to play with my camera lenses and capture my vision. Getting
            my work out here / <br></br>
            sharing my vision help me learn and reflect on my work, a way to
            improve my skill. The <br></br>
            best way to learn for me is "just do it" -Nike
          </ThirdLine>
          <BtnBorder>
            <Button>Take a look at my Gallery</Button>
          </BtnBorder>
        </GalleryContent>
      </GalleryContainer>
    </BackgroundImage>
  )
}

export default Gallery

export const GalleryContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem calc((100vw - 900px) / 2);
  position: relative;
  color: #fff;

  @media screen and (max-width: 769px) {
    padding: 0.5rem calc((100vw - 450px) / 2);
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 100%,
        rgba(0, 0, 0, 0.2) 0%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

export const GalleryContent = styled.div`
  z-index: 10;
`

export const FirstLine = styled.p`
  font-size: clamp(1.25rem, 2vw, 2rem);
  padding: 10px 0;
`

export const GalleryTitle = styled.div`
  padding: 10px 0;
`

export const ThirdLine = styled.p`
  font-size: clamp(0.75rem, 1.5vw, 1.5rem);
  padding: 10px 0;
`

export const BtnBorder = styled.div`
  display: flex;
  place-content: center;
  padding: 10px 0;
`
