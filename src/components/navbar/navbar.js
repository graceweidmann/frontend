import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Icon,
  Navbar, 
  NavLink
} from './navbarElements';
import {
  Home, 
  Browse, 
  Profile
} from './navItems';
import NavbarItems from './NavbarItems';

export default function Navigation () {

  return (
  <Navbar>
   
    <NavbarItems {...Home}  />
    <NavbarItems {...Browse} />
    <NavbarItems {...Profile} />

  </Navbar>
);
}


