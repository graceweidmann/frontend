
import GlobalStyle from '../../theme/globalStyle';

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
} from './registerElements';

import { Button, Button2 } from '../../components/ButtonElements';

export default function Register1() {
 
  return (
    <HeroContainer>
    
      <HeroContent>
        <HeroH1></HeroH1>
       
        <p>Schön dass du dabei bist! <br/>
Wie heißt du?</p>
        


        <HeroBtnWrapper>
      
        </HeroBtnWrapper>
        
      </HeroContent>
    </HeroContainer>
  );
}
