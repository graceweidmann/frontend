// globalStyles.js

// @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");

import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

  

/* Variables */
:root {
  --text-color-light: rgb(255, 255, 255);
  --text-color-grey: rgb(201, 201, 201);
  --primary-color-grey: 31, 58, 80;
  --primary-color-violet: 56, 17, 180;
  --primary-color-pink: 214, 113, 147;
  --primary-color-button: #1D2A73;
  --primary-color-button-hover: var(--primary-color-pink); 
  /* --primary-color-button-hover: lighten(var(--primary-color-button),15%); */
  --primary-color-button-text: white;
  --secondary-color-button: white;
  --secondary-color-button-text: #1D2A73;

  --font-weight-heavy: 900;
  --dynamic-font-size: calc(1.8em + 1vw);
  --dynamic-line-height: calc(1em + .4vw);
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: inherit;
  transition: inherit;
}

html { 
  font-size: 62.5%;
}


  
  body {
    font-family: Montserrat;
    font-size: var(--dynamic-font-size);
    font-style: normal;
    letter-spacing: 0em;
    text-align: center;
    padding: 0;
    line-height: var(--dynamic-line-height);
    margin: 0;
    background: white;
    box-sizing: border-box;
  }

  h2 {
    font-size: calc(1.8em + 1vw) !important;
    line-height: calc(1em + 1vw) !important;
  }


.App {
 
}

`;
 
export default GlobalStyle;