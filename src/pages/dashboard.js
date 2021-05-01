import React from 'react';
import styled from 'styled-components';
import Card from '../components/card';
import DashbordImg from '../images/heroBg.png';

import Navigation from '../components/navbar/navbar';
import { Grid, Container, GridItem} from "../components/grid/gridElements";
import {Wrapper, h1, h2, p } from '../theme/styles';

const H1 = styled (h1)`
text-align:left;
`;
const H2 = styled (h2)`
text-align:left;
line-height: .5;
`;

const P = styled (p)`
text-align:left;
`;
const DashboardWrapper = styled (Wrapper)`
height: 90vh;
`;

const HeaderWrapper = styled.div`
text-justify:left;
margin-left:1.7em;
margin-top: 7.1em;
`;
const DashImg = styled.img`
/*unique styling for this dashboard picture */
    width: 73%;
    height: auto;
    object-fit: cover;
    overflow: hidden;
    object-position: 0 100%  ;
`;

export default function Dashboard () {
    return (
      <div>
        <DashboardWrapper>
    <HeaderWrapper>
      <H1>Guten <br />
        Morgen, <br />
        Name</H1>
        </HeaderWrapper>
    <Container bckColor='transparent'>
    <Grid columns={12} gapRow={0} gapColumn={0}>
        <GridItem start={1} end={9}>
        <H2>Dein Workout heute</H2>
        </GridItem>
        <GridItem start={9} end={12}>
        <P>Trainingsplan</P>
        </GridItem>
        <GridItem start={1} end={12}>
        <Card>
      <DashImg src={DashbordImg} alt="Image" /> 
     </Card>  
        </GridItem>
        <GridItem start={1} end={12}>
        <P>Titel des Workouts</P>
        <P>Titel des Programm</P>
        <P>XXX kcal · 26 Min. · Beweglichkeit</P>
   </GridItem>
      </Grid>
     </Container>
    </DashboardWrapper>
  <Navigation />
  </div>
)
    };