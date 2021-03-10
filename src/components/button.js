import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: transparent;
  white-space: nowrap;
  color: #fff;
  padding: 5px 0;
  font-size: clamp(0.75rem, 2vw, 1.5rem);
  font-weight: 500;
  outline: none;
  border: 2px #fff solid;
  width: clamp(150px, 25vw, 300px);
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: 0.3s !important;
  border-radius: none;

  &:hover {
    background: #fff;
    color: rgba(0, 0, 0, 0.3);
    mix-blend-mode: hard-light;
    transform: translateY(-2px);
  }
`
