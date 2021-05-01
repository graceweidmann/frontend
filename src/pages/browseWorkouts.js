import React from 'react';
import styled from 'styled-components';
import { h2, p } from '../theme/styles';import {
  Workout1, 
  Workout2
} from './workoutData';
import Navigation from '../components/navbar/navbar';
import  WorkoutLevel1 from './WorkoutLevel1';


const BrowseWrapper = styled.div`
  background-color: ${(props) => props.bckColor};
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: space-around;
  padding: var(--page-padding);
  `;

const BrowseH2  = styled(h2)`
display:flex;
height: 10vh;
display:flex;
align-items: center;
cursor: pointer;
text-align: left;
`;
const P  = styled(p)`
text-align: left;
line-height: 5;
`;
export default function BrowseWorkouts() {
  return (
 <div>
<BrowseWrapper>
      <BrowseH2>  Browse </BrowseH2>
      <P>Filter</P>
      <WorkoutLevel1 {...Workout1}  /> 
      <WorkoutLevel1 {...Workout2}  /> 
      <WorkoutLevel1 {...Workout1}  /> 
      <WorkoutLevel1 {...Workout2}  /> 
    </BrowseWrapper>
  <Navigation />
</div>
);
}