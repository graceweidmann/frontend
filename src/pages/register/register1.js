import styled from 'styled-components';
import GlobalStyle from './../../theme/globalStyle';

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


const CenterP = styled(HeroP) `
margin-top:30vh;
`;
const BottomBtnWrapper = styled(HeroBtnWrapper) `
margin-top: 30vh;
`;

export default function Register1() {
 
return (
    <HeroContainer>  
      <HeroContent>
        
   <form>   
   <CenterP> Schön dass du dabei bist! <br/>
Wie heißt du?</CenterP>
    <input type="text" name="name" />
  <BottomBtnWrapper>   
  <Button
            primary="true"
            primaryBtnTextColor="true"
            input type="submit" 
            value="Submit"
          >weiter
          </Button>
  <Button />
  </BottomBtnWrapper>
</form>
   </HeroContent>
</HeroContainer>
  );
}
