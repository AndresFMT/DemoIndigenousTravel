import React, {FC} from 'react';
import { Routes } from '@blitzjs/next';
import styled from 'styled-components';

// header need to knows
// logo for home page linking
// section left
// section middle 
// section right
// section groups
// logged in or not
//
//
// mvp 
// text logo
// categories -- non dynamic
// login

const Header = styled.header`

`; 

const NavList = styled.nav`

`;

const HeaderLayout = () => {
  
  return (

    <Header>
      <a href={Routes.Home()}>
        <h2>H.</h2>
      </a>

      <NavList>
        
      </NavList>
      
    </Header>
  )
}

export default HeaderLayout;

