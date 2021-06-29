import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 
 html, body{
   font-family: 'Titillium Web', sans-serif;
   scroll-behavior: smooth;
   overflow:overlay;

   ::-webkit-scrollbar {
      width: 4px;
   }

   ::-webkit-scrollbar-track {
      background: transparent; 
   }
 
   ::-webkit-scrollbar-thumb {
      background-color: #fa9639; 
      border-radius: 10px;
   }

   ::-webkit-scrollbar-thumb:hover {
      background: #fff; 
   }
 }
`
