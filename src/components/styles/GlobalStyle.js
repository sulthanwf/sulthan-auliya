import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 *{
    font-family: 'Titillium Web', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
 }
 body{
    overflow:overlay;
   ::-webkit-scrollbar {
      width: 5px;
   }

   ::-webkit-scrollbar-track {
      background: none; 
   }
 
   ::-webkit-scrollbar-thumb {
      background: #fa9639; 
      border-radius: 10px;
   }

   ::-webkit-scrollbar-thumb:hover {
      background: #fff; 
   }
 }
`
