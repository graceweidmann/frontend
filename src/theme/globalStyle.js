// globalStyles.js

// @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  

/* Variables */
:root {
  font-family: Montserrat;
  --font-weight-heavy: 900;
  --primary-color-grey: 31, 58, 80;
  --dynamic-font-size: calc(1.8em + 1vw);
  --dynamic-line-height: calc(1em + .4vw);
  --media-S: 600px;
  --color1: #FFFFFF;
  --color2: #1D2A73;
  --color3: #F5EBDD;
  --color4: linear-gradient(261.83deg, #FFB7D5 22.27%, rgba(255, 255, 255, 0) 89.6%),
linear-gradient(0deg, #FFBE21, #FFBE21);
  --color5: linear-gradient(236.96deg, #FFB7D5 30.3%, rgba(255, 255, 255, 0) 101.13%),
linear-gradient(0deg, #FFBE21, #FFBE21);
  --color6: #E5E5E5;
  --color7: #EDD4D0;
  --color8: #3EC1F3;
  color: var( --color2);
  --card-height: 30vh;
  --page-padding: 1.7em;
}
/* *,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit; */
  font-family: inherit;
  transition: inherit;
}

html { 

  
  body {
    font-family: Montserrat;
    font-size: 62.5%;
    font-style: normal;
    letter-spacing: 0em;
    text-align: center;
    padding: 0;
    margin: 0;
    background: white;
    box-sizing: border-box;
    color: var(--color2);
  
  }
`;
export default GlobalStyle;
