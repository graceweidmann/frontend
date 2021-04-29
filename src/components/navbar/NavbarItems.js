import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Navbar, 
  NavLink,
  Img,
  ImgWrap,
  NavItemWrapper
} from './navbarElements';

export default function NavbarItemsData ({
    img, alt, label, link}) {

    return (
        <>
    <NavItemWrapper>
        <ImgWrap><Img src={img} alt={alt} type= 'SVG'/> </ImgWrap>
        <NavLink to={link}> {label}</NavLink>
    </NavItemWrapper>
  </>
   )  
 }