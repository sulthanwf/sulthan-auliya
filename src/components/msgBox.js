import React from "react"
import styled from "styled-components"
import { ButtonB } from "./Button"

const MsgBox = props => {
  const handleClick = () => {
    props.toggle()
  }

  return (
    <>
      <MsgBoxContainer>
        <h3>Thank you for your message</h3>
        <ButtonB onClick={handleClick}>OK</ButtonB>
      </MsgBoxContainer>
    </>
  )
}

export default MsgBox

export const MsgBoxContainer = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fa7d09;
  width: clamp(400px, 20vw, 20vw);
  height: 20vh;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
`
