import styled from 'styled-components';

const Card = styled.div `
display: flex;
width: 100%;
height:var(--card-height);
border-radius:5%;
background-color: var(--color3);
justify-content: center;
cursor:pointer-events;
&:hover {
    color: var(--color4);  
  }
  &:visited {
    color: var(--color2);
  }
`
export default Card;