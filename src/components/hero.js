import React, { useState } from "react"
import styled from "styled-components"
import { Title } from "./title"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      Auckland: file(relativePath: { eq: "home-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      Code: file(relativePath: { eq: "code-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const aucklandBg = data.Auckland.childImageSharp.fluid
  const codeBg = data.Code.childImageSharp.fluid

  const [heroBg, setHeroBg] = useState(aucklandBg)
  // const handleToggle = () => {
  //   setHeroBg(!heroBg)
  // }

  return (
    <BackgroundImage
      Tag="div"
      className={heroBg === codeBg ? "dev" : "creator"}
      fluid={heroBg}
      css={`
        height: 100vh;
      `}
    >
      <HeroContainer>
        <HeroContent>
          <LeftTitle onMouseEnter={() => setHeroBg(codeBg)}>
            <Title className={heroBg === codeBg ? "active" : "inactive"}>
              Software Developer
            </Title>
          </LeftTitle>
          <RightTitle onMouseEnter={() => setHeroBg(aucklandBg)}>
            <Title className={heroBg === aucklandBg ? "active" : "inactive"}>
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
  padding: 0.5rem calc((100vw - 1720px) / 2);
  z-index: 10;

  @media screen and (max-width: 1440px) {
    padding: 0.5rem calc((100vw - 1300px) / 2);
  }

  .inactive {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
  }
`

export const LeftTitle = styled.div``
export const RightTitle = styled.div``
