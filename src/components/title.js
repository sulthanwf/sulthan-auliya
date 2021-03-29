import styled from "styled-components"

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: ${({ hero }) =>
    hero ? "clamp(3rem, 6vw, 5rem)" : "clamp(2.2rem, 6vw, 6rem)"};
  text-shadow: ${({ hero }) =>
    hero ? "3px 3px 6px rgba(0, 0, 0, 0.35)" : "none)"};
  cursor: none;
`
