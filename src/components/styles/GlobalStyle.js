import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 *{
    font-family: 'Titillium Web', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 body{
   @media screen and (max-width: 500px){
       width:fit-content;
    }
 }
`
