import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: transparent;
  white-space: nowrap;
  color: ${({ inverse }) => (inverse ? "#000" : "#fff")};
  padding: 5px 0;
  font-size: clamp(0.75rem, 2vw, 1.5rem);
  font-weight: 500;
  outline: none;
  border: ${({ inverse }) => (inverse ? "2px #000 solid" : "2px #fff solid")};
  width: clamp(150px, 25vw, 300px);
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: 0.3s !important;
  border-radius: none;

  &:hover {
    background: ${({ inverse }) => (inverse ? "#000" : "#fff")};
    color: ${({ inverse }) =>
      inverse ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"};
    mix-blend-mode: hard-light;
    transform: translateY(-2px);
  }
`
