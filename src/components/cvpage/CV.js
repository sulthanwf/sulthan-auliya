import React from "react"
import styled from "styled-components"
import { ImLocation } from "@react-icons/all-files/im/ImLocation"
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt"
import { CgShapeCircle } from "@react-icons/all-files/cg/CgShapeCircle"

const CV = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>Sulthan Auliya</Title>
          <ContactDetails>
            <span>IT Graduate</span>
            <span>
              <ImLocation /> Invercargill, 9812
            </span>
            <span>
              <FaPhoneAlt /> 028 4225 214
            </span>
          </ContactDetails>
        </Header>
        <Body>
          <SideContent>
            <Details>
              <h2>
                <Circle />
                DETAILS
                <Circle />
              </h2>
              <p>162 Bowmont St, Appleby, 9812 Invercargill</p>
              <p>028 4255 214</p>
              <p>sulthanwf@gmail.com</p>
            </Details>
            <Links>
              <h2>
                <Circle />
                LINKS
                <Circle />
              </h2>
              <p>sulthanauliya.com</p>
              <p>linkedin.com/in/sulthanauliya</p>
            </Links>
            <Skills>
              <h2>
                <Circle />
                SKILLS
                <Circle />
              </h2>
              <p>Microsoft Office</p>
              <p>Windows OS</p>
              <p>Agile Software Development</p>
              <p>IT Support</p>
            </Skills>
            <Interests>
              <h2>
                <Circle />
                INTERESTS
                <Circle />
              </h2>
              <p>Business &amp; Financials</p>
              <p>Technologies &amp; Inovation</p>
              <p>Photography &amp; Videography</p>
              <p>Football</p>
            </Interests>
            <Languages>
              <h2>
                <Circle />
                LANGUAGES
                <Circle />
              </h2>
              <p>English</p>
              <p>Indonesian</p>
            </Languages>
          </SideContent>
          <MainContent>
            <Profile>
              <ProfileIcon></ProfileIcon>
            </Profile>
          </MainContent>
        </Body>
      </Container>
    </>
  )
}

export default CV

export const Container = styled.div`
  padding: 0.5rem calc((100vw - 1300px) / 2);
`

export const Header = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  font-size: clamp(48px, 5vw, 72px);
  padding: 1rem 0;
`

export const ContactDetails = styled.div`
  > span {
    padding: 0 1rem;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr;
`

//SIDE CONTENT STYLE
export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 2rem;
`

export const Details = styled.div`
  padding: 1rem 0;
`
export const Links = styled.div`
  padding: 1rem 0;
`
export const Skills = styled.div`
  padding: 1rem 0;
`
export const Interests = styled.div`
  padding: 1rem 0;
`
export const Languages = styled.div`
  padding: 1rem 0;
`

//MAIN CONTENT STYLE
export const MainContent = styled.div``

export const Profile = styled.div``
export const ProfileIcon = styled.div``

export const Circle = styled(CgShapeCircle)`
  width: 10px;
  vertical-align: middle;
  margin: 0 0.5rem;
`
