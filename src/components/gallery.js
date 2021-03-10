import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { Title } from "./title"

const Gallery = () => {
  return (
    <GalleryContainer id="gallery">
      <GalleryContent>
        <FirstLine>Beside the technical stuff I also like</FirstLine>
        <GalleryTitle>
          <Title>Capture & Create</Title>
        </GalleryTitle>
        <ThirdLine>
          I like to play with my camera lenses and capture my vision. Getting my
          work out here / <br></br>
          sharing my vision help me learn and reflect on my work, a way to
          improve my skill. The <br></br>
          best way to learn for me is "just do it" -Nike
        </ThirdLine>
        <BtnBorder>
          <Button>Take a look at my Gallery</Button>
        </BtnBorder>
      </GalleryContent>
    </GalleryContainer>
  )
}

export default Gallery

export const GalleryContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0.5rem calc((100vw - 900px) / 2);
  position: relative;
  color: #fff;

  @media screen and (max-width: 769px) {
    padding: 0.5rem calc((100vw - 450px) / 2);
  }
`

export const GalleryContent = styled.div``

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
