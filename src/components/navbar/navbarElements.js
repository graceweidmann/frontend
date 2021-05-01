import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const ImgWrap = styled.div`
color: red;
display: flex;
width: 20px;
height: 100%;
justify-items: center;
align-items: center;
justify-content: space-around;
@media screen and (max-width = 768px) {
    display:block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, 50%);
    font-size; 1.8rem;
    cursor: pointer; 
}
`

export const Navbar = styled.div`
  height: 8vh;
  background-color: var(--color3);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top:5px;
  display: flex;
  justify-items: center;
  justify-content: space-around;
  z-index:100;
`;

export const NavLink = styled (Link)`
 height: 90%; 
  padding-top: 1%;
  text-decoration: none;
  &:visited {
    color: var(--color2);
    align-items: baseline;
  }
`;
/*for Navigation menu options: to display Menu icon and text below*/
export const NavItemWrapper = styled.div `
display:flex;
flex-direction:column;
align-content: space-evenly;
align-items:center;
text-align:center;
cursor: pointer;
justify-content: space-around;


    

`
