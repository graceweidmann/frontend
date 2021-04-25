import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
// import GlobalStyle from '../theme/globalStyle';
// import { Button, Button2 } from './components/button';
import {BrowserRouter as Router} from 'react-router-dom'
import React, { useState } from 'react';

import {
  HeroContainer,
  HeroBg,
  HeroBgImg,
  HeroP,
  HeroH1,
  HeroBtnWrapper,
  HeroContent,
  ArrowForward,
  ArrowRight,
} from './registerElements';
import { Button, Button2 } from './ButtonElements';
// /home/grace/webdevelopment/frontend/src/components/ButtonElements.js
// /home/grace/webdevelopment/frontend/src/pages/register/register.js
export default function Register1() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
    
      <HeroContent>
        <HeroH1>Register1</HeroH1>
        <HeroP>
        Schön dass du dabei bist! Wie heißt du?
        </HeroP>

        <HeroBtnWrapper>
        <Button
            to="Register1"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            primaryBtnTextColor="true"
          >weiter
          </Button>
          <Button2
            to="Login"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >oder anmelden
          </Button2>
        </HeroBtnWrapper>
        
      </HeroContent>
    </HeroContainer>
  );
}
