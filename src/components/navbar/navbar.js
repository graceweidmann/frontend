import React from 'react'
import { 
  Navbar
} from './navbarElements';
import {
  Home, 
  Browse, 
  Profile
} from './navData';
import NavbarItems from './NavbarItems';

export default function Navigation () {

  return (
  <Navbar>
   
    <NavbarItems {...Home}  />
    <NavbarItems {...Browse} />
    <NavbarItems {...Profile} />
{}
  </Navbar>
);
}


