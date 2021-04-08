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
