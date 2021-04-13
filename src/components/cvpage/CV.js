import React from "react"
import styled from "styled-components"
import { ImLocation } from "@react-icons/all-files/im/ImLocation"
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt"
import { CgShapeCircle } from "@react-icons/all-files/cg/CgShapeCircle"
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt"
import { FaBriefcase } from "@react-icons/all-files/fa/FaBriefcase"
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap"
import { VscReferences } from "@react-icons/all-files/vsc/VscReferences"
import { Link } from "gatsby"

const CV = () => {
  return (
    <>
      <Container>
        <Header>
          <HeaderLink to="/">
            <Title>Sulthan Auliya</Title>
          </HeaderLink>
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
              <ProfileIcon>
                <FaUserAlt />
              </ProfileIcon>
              <ProfileTitle>
                <h2>PROFILE</h2>
              </ProfileTitle>
              <ProfileContent>
                <p>
                  I am a graduate software developer who has been passionate
                  about IT industry from early on in my life. I am interested in
                  learning new technologies, complex thinking, problem solving
                  and also creative work. I have less than a year experience
                  working in Software Development. Mainly, I have been
                  developing websites and web application that uses various web
                  development technologies.
                </p>
              </ProfileContent>
            </Profile>

            <WorkExperience>
              <WEIcon>
                <FaBriefcase />
              </WEIcon>
              <WETitle>
                <h2>EMPLOYMENT HISTORY</h2>
              </WETitle>
              <WEContent>
                <h3>Intern at Efco Ltc, Auckland</h3>
                <h3 className="work-duration">February 2021 - Present</h3>
                <ul>
                  <li>Reviewing website designs, </li>
                  <li>
                    Provide feedback and suggestion to the new website design,
                  </li>
                  <li>
                    Requirements gathering by researching features & functions
                    of finance companies website.
                  </li>
                </ul>
                <h3 className="position">
                  Web Developer Intern at Nykma, Auckland
                </h3>
                <h3 className="work-duration">October 2020 - February 2021</h3>
                <ul>
                  <li>
                    Develop a front-end website for Nykma's product (svagg)
                    using web development technologies such as HTML, SASS,
                    Bulma, Typescript and Jinja,
                  </li>
                  <li>Attend weekly scrum meeting,</li>
                  <li>Create issues and manage Kanban board on GitLab.</li>
                </ul>
                <h3 className="position">
                  Web Developer Intern at University Putra Malaysia, Kuala
                  Lumpur
                </h3>
                <h3 className="work-duration">April 2018 - July 2018</h3>
                <ul>
                  <li>
                    Develop the universities' accommodation management system
                    using web development technologies such as HTML, PHP,
                    Bootstrap, and Javascript,
                  </li>
                  <li>
                    Write a progress report as part of the project
                    documentation,
                  </li>
                  <li>Attend progress meeting with clients.</li>
                </ul>
              </WEContent>
            </WorkExperience>

            <Education>
              <EducationIcon>
                <FaGraduationCap />
              </EducationIcon>
              <EducationTitle>
                <h2>Education</h2>
              </EducationTitle>
              <EducationContent>
                <h3>Graduate Diploma in Information Technology</h3>
                <h3 className="institution">Aspire2 International, Auckland</h3>
                <h3 className="duration">February 2020 - February 2021</h3>
                <h3 className="qualification">
                  Diploma in Information Technology
                </h3>
                <h3 className="institution">International Islamic College</h3>
                <h3 className="duration">December 2015 - June 2018</h3>
              </EducationContent>
            </Education>

            <References>
              <ReferencesIcon>
                <VscReferences />
              </ReferencesIcon>
              <ReferencesTitle>
                <h2>REFERENCES</h2>
              </ReferencesTitle>
              <ReferencesContent>
                <h3>References available upon request</h3>
              </ReferencesContent>
            </References>
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
  grid-template-areas: "sidecontent maincontent";
  grid-template-columns: 25% 1fr;

  @media screen and (max-width: 768px) {
    grid-template-areas:
      "sidecontent"
      "maincontent";
    grid-template-columns: 1fr;
  }
`

//SIDE CONTENT STYLE
export const SideContent = styled.div`
  grid-area: sidecontent;
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
export const MainContent = styled.div`
  grid-area: maincontent;
`

//---PROFILE SECTION
export const Profile = styled.div`
  display: grid;
  grid-template-areas:
    "icon title"
    "line content";
  grid-template-columns: 30px 1fr;
  height: min-content;
`
export const ProfileIcon = styled.div`
  grid-area: icon;
  place-self: center;
  padding: 1rem 1rem 0 1rem;
  svg {
    width: 22px;
    height: 100%;
  }
`
export const ProfileTitle = styled.div`
  grid-area: title;
  padding: 1rem 1rem 0 1rem;
`
export const ProfileContent = styled.div`
  grid-area: content;
  padding: 0 1rem 1rem 1rem;
  p {
    text-align: justify;
  }
`

//---WORK EXPERIENCE SECTION
export const WorkExperience = styled.div`
  display: grid;
  grid-template-areas:
    "icon title"
    "line content";
  grid-template-columns: 30px 1fr;
  height: min-content;
`
export const WEIcon = styled.div`
  grid-area: icon;
  place-self: center;
  padding: 1rem 1rem 0 1rem;
  svg {
    width: 22px;
    height: 100%;
  }
`
export const WETitle = styled.div`
  grid-area: title;
  padding: 1rem 1rem 0 1rem;
`
export const WEContent = styled.div`
  grid-area: content;
  padding: 0 1rem 1rem 1rem;

  .position {
    padding: 1rem 0 0 0;
  }
  .work-duration {
    color: #575757;
  }
  ul {
    padding: 0 0 0 2.5rem;
  }
`

//---EDUCATION SECTION
export const Education = styled.div`
  display: grid;
  grid-template-areas:
    "icon title"
    "line content";
  grid-template-columns: 30px 1fr;
  height: min-content;
`
export const EducationIcon = styled.div`
  grid-area: icon;
  place-self: center;
  padding: 1rem 1rem 0 1rem;
  svg {
    width: 22px;
    height: 100%;
  }
`
export const EducationTitle = styled.div`
  grid-area: title;
  padding: 1rem 1rem 0 1rem;
`
export const EducationContent = styled.div`
  grid-area: content;
  padding: 0 1rem 1rem 1rem;

  .qualification {
    padding: 1rem 0 0 0;
  }
  .institution {
    font-weight: normal;
  }
  .duration {
    color: #575757;
  }
`

//---REFERENCES SECTION
export const References = styled.div`
  display: grid;
  grid-template-areas:
    "icon title"
    "line content";
  grid-template-columns: 30px 1fr;
  height: min-content;
`
export const ReferencesIcon = styled.div`
  grid-area: icon;
  place-self: center;
  padding: 1rem 1rem 0 1rem;
  svg {
    width: 22px;
    height: 100%;
  }
`
export const ReferencesTitle = styled.div`
  grid-area: title;
  padding: 1rem 1rem 0 1rem;
`
export const ReferencesContent = styled.div`
  grid-area: content;
  padding: 0 1rem 1rem 1rem;
`

export const Circle = styled(CgShapeCircle)`
  width: 10px;
  vertical-align: middle;
  margin: 0 0.5rem;
`
export const HeaderLink = styled(Link)`
  color: #000;
  text-decoration: none;
`
