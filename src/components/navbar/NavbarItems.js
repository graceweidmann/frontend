import React from "react";
import { 
  NavLink,
  Img,
  ImgWrap,
  NavItemWrapper
} from './navbarElements';

export default function NavbarMenuOptions ({
    img, alt, label, link}) {

    return (
      <>
    <NavItemWrapper>
      <ImgWrap><Img src={(img).default} alt={alt} type= 'SVG'/> </ImgWrap> 
      <NavLink to={link}> {label}</NavLink>
    </NavItemWrapper>
  </>
   )  
 }