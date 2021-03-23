import React, { useState } from "react"
import styled from "styled-components"
import { Title } from "./title"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      Auckland: file(relativePath: { eq: "home1-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      Code: file(relativePath: { eq: "home2-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const aucklandBg = data.Auckland.childImageSharp.fluid
  const codeBg = data.Code.childImageSharp.fluid

  const [heroBg, setHeroBg] = useState(aucklandBg)

  return (
    <BackgroundImage
      Tag="div"
      className={heroBg === codeBg ? "dev" : "creator"}
      fluid={heroBg}
      css={`
        height: 100vh;
        animation: BgAnimation 0.2s ease-in-out;

        @keyframes BgAnimation {
          from {
            opacity: 0;
          }
          to {
            opacity: 100;
          }
        }
      `}
    >
      <HeroContainer>
        <HeroContent>
          <LeftTitle onMouseEnter={() => setHeroBg(codeBg)}>
            <Title
              className={heroBg === codeBg ? "active" : "inactive"}
              hero="true"
            >
              Software Developer
            </Title>
          </LeftTitle>
          <RightTitle onMouseEnter={() => setHeroBg(aucklandBg)}>
            <Title
              className={heroBg === aucklandBg ? "active" : "inactive"}
              hero="true"
            >
              Creator
            </Title>
          </RightTitle>
        </HeroContent>
      </HeroContainer>
    </BackgroundImage>
  )
}

export default Hero

export const HeroContainer = styled.div`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  position: relative;
  color: #fff;

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

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const HeroContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;

  .inactive {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: space-between;
  }
`

export const LeftTitle = styled.div``
export const RightTitle = styled.div``
