import React from "react"
import styled from "styled-components"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { CgUnsplash } from "@react-icons/all-files/cg/CgUnsplash"

const CornerLinks = () => {
  return (
    <CornerLinksContainer>
      <SocMedLink
        href="https://www.linkedin.com/in/sulthanauliya"
        target="_blank"
      >
        <FaLinkedinIn />
      </SocMedLink>
      <SocMedLink href="https://github.com/sulthanwf" target="_blank">
        <FaGithub />
      </SocMedLink>
      <SocMedLink href="https://unsplash.com/@swafie" target="_blank">
        <CgUnsplash />
      </SocMedLink>
      <VerticalLine />
    </CornerLinksContainer>
  )
}

export default CornerLinks

export const CornerLinksContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  font-size: clamp(25px, 2.5vw, 50px);
  padding: 0 calc((100vw - 1300px) / 2);

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const VerticalLine = styled.div`
  width: 50%;
  height: 150px;
  border-right: 2px white solid;
`

export const SocMedLink = styled.a`
  transition: 0.2s;
  padding: 0 0.25rem;
  color: #fff;
  :visited {
    color: #fff;
  }
  :hover {
    color: #fa9639;
  }
`
