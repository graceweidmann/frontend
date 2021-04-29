import styled from 'styled-components'
import {Link} from 'react-router-dom'




export const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ImgWrap = styled.div`
color: red;
display: border-box;
width: 20px;
 height: 100%;
object-fit: contain;
display: border-box;
z-index: 10;
@media screen and (max-width = 768px) {
    display:block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size; 1.8rem;
    cursor: pointer; */
}
`


export const Navbar = styled.div`
  height: 7vh;
  background-color: var(--color3);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-around;
`;



 
export const NavLink = styled (Link)`
  /* height: 90%; */
  padding-top: 1%;
  text-decoration: none;
  &:visited {
    color: var(--color2);
  }
`;
export const NavItemWrapper = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
justify-items:center;
cursor: pointer;

align-items: baseline;
  justify-content: space-around;

`
