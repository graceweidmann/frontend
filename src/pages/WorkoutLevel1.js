import {React} from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Grid, Container, GridItem} from "../components/grid/gridElements";
import { h2 } from '../theme/styles';
import Card from '../components/card';
import { ReactComponent as Heart } from '../images/heart.svg';

import { ImgWrap } from '../components/navbar/navbarElements';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 5%;
  align-items: center; 
  `;
const Status  = styled.div`
display: flex;
float: right;
`;

const WorkoutLink = styled (Link)`
 text-decoration: none;
  &:hover {
    color: var(--color4);  
  }
  &:visited {
    color: var(--color5);
  }
`;
const WorkoutTitle  = styled(h2)`
display:flex;
align-items: center;
justify-content: space-around;
cursor: pointer;
height: calc(var(--card-height)*.75);
text-align: center;
`;
export default function Workout ({ 
    favorite, status, workoutPic, workoutTitle, workoutLink}) {      
    return (
  <div>
      
    <CardWrapper>
    <Card>
    <Container bckColor='transparent'>
    <Grid columns={12} gapRow={0} gapColumn={0}>
        <GridItem start={1} end={2}>
        <ImgWrap><Heart/> </ImgWrap> 
        </GridItem>
        <GridItem start={11} end={12}>
        <Status>{status}</Status>
        </GridItem>
        <GridItem start={1} end={12}>
        <WorkoutLink to= '/' >
       <WorkoutTitle > {workoutTitle} </WorkoutTitle>
       </WorkoutLink>
        </GridItem>
      </Grid>
     </Container>
    </Card>
    </CardWrapper>
    </div>
 );
    }