import React from 'react';
import {
  HeroContainer,
  HeroBg,
  HeroBgImg,
  HeroP,
  HeroH1,
  HeroBtnWrapper,
  HeroContent,
} from './registerElements';
import { Button, Button2 } from './../../components/ButtonElements';

export default function Register() {

  // const onHover = () => {
  //   setHover(!hover);
  // };

  return (
    <HeroContainer>
      <HeroBg>
      <HeroBgImg /> 
      </HeroBg>
      <HeroContent>
        <HeroH1></HeroH1>
        <HeroP>
          
        </HeroP>
        <HeroBtnWrapper>
        <Button
           to="/register1"
          
            primary="true"
            primaryBtnTextColor="true"
          >registrieren
          </Button>
          <Button2
            to="Login"
          >oder anmelden
          </Button2>
        </HeroBtnWrapper>
        
      </HeroContent>
    </HeroContainer>
    
  );
}
