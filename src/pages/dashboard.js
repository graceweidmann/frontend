import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../theme/globalStyle';
import Card from '../components/card.js';
import DashbordImg from '../images/heroBg.png'
import {
    HeroContainer,
    HeroBg,
    HeroBgImg,
    HeroP,
    HeroH1,
    HeroBtnWrapper,
    HeroContent,
  } from './register/registerElements';
import Navigation from '../components/navbar/navbar';
// import { Card } from '../components/browseElements';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2.5%;
  align-items: center;
  
  
  
`;
const Grid= styled.div`
display: grid;
max-width: 100vw;
max-height: 90vh;
text-align: left;
padding: 0 1em ;
`;

const Row = styled.div`
  display: flex;
 
`;

const Col = styled.div`
flex: ${( props ) => props.size};
flex-direction: row;
`;

const Header = styled.div`
margin-left:1.7em;
margin-top: 7.1em;
`;
const H1 = styled.div`
  font-size: 3.6em;
  font-weight:700;
`;

const H2 = styled.div`
  font-size: 2.4em;
  line-height: 2.926em;
  font-weight:700;
  `;

const SmallText = styled.div`
  font-size: 0.75em;
  line-height: 1.5em;
  font-weight: 400;
  text-justify: left;

`;
const DashImg = styled.img`
/*unique to this dashboard picture */
    width: 73%;
    height: auto;
    object-fit: cover;
    overflow: hidden;
    object-position: 0 100%  ;

    
`;

const ImgContainer = styled.div `
    position: absolute;
    top: 40vh;
    left: auto;
    width: 100%;
    
    overflow: hidden;
    
`;

export default function Dashboard () {
    return (
      <div>
  <Grid>
    <Header>
    <row>
      <Col size={1}>
      <H1>Guten <br />
        Morgen, <br />
        Name</H1>
      </Col>
    </row>
    <row>
      <Col size={2}>
      <H2>Dein Workout heute</H2>
      </Col>
      
      <Col size={1}>
      <SmallText>Trainingsplan</SmallText>
      </Col>
    </row>

    <row>
      <Col size={1}>
      <Card>
      <DashImg src={DashbordImg} alt="Image" />
      
     </Card>  
     </Col>
    </row>

    <row>
      <Col size={1}>
      <SmallText>Titel des Workouts</SmallText>
      <SmallText>Titel des Programm</SmallText>
      <SmallText>XXX kcal · 26 Min. · Beweglichkeit</SmallText>
      </Col>
     </row>
     
    </Header>
  </Grid>
  
  <Navigation />
  </div>
)
    };