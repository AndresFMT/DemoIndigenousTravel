import React, { FC } from 'react';
import { Routes } from '@blitzjs/next';

import { useTheme } from '@mui/material/styles';
import { AppBar, Container, Box, Link } from '@mui/material';

import { useOffSetTop, useResponsive } from 'src/hooks';

import { HEADER_DESKTOP_HEIGHT } from 'src/config';
import { ToolbarStyle, ToolbarShadowStyle } from './HeaderToolbarStyle';
import { Logo, Label } from 'src/core/components';
import { NavDesktop } from '../nav';


const navItemsChildrenReducer = (accumulator, currentValue, index, array) => {
    const newValue = {
        title: currentValue.title,
        path: currentValue.href
    };
    
    return [...accumulator, newValue];
}

const navItemsCallback = (nav,i) => {
let newFormat = {};    
  newFormat['title'] = nav.title;
  if (!nav.subNavLists.length){
      newFormat['path'] = nav.href;
  } else {
      console.log(nav.subNavLists[0].navItems);
      newFormat.children = {}
      newFormat.children['items'] = nav.subNavLists[0].navItems.reduce(navItemsChildrenReducer, nav.subNavLists[0].navItems);
      newFormat.children['order'] = i;
      newFormat.children['subheader'] = nav.title;
      newFormat.children['cover'] = `https://via.placeholder.com/200/#efefef`;
  }
  return newFormat
};

const sanitizeTestData = () => {
  const sanityData = `
  {"ms":135,"result":[{"_id":"bcda8da2-0319-48ce-86ca-2e356862906c","name":"Header","navItems":[{"href":"experience","subNavLists":[{"name":"Experience","navItems":[{"href":"experience","title":"Experience"}]},{"name":"Experience","navItems":[{"href":"experience","title":"Experience"},null]}],"title":"Experience"},{"href":"discover","subNavLists":[{"name":"Discover","navItems":[{"href":"our-stories","title":"Our Stories"},{"href":"things-to-do","title":"Things To Do"},{"href":"places-to-go","title":"Places To Go"}]}],"title":"Discover"},{"href":"explore","subNavLists":[{"name":"Explore","navItems":[{"href":"hudson-bay","title":"Hudson Bay"},{"href":"the-shield","title":"The Shield"},{"href":"the-plains","title":"The Plains"}]}],"title":"Explore"},{"href":"event-calendar","subNavLists":[],"title":"Event Calendar"}]}]}
  `;
  const mockData = JSON.parse(sanityData);
  const topLayer = mockData.result[0];  

  const navItems = topLayer.navItems.map(navItemsCallback);

  return navItems; 
};

// const notNavConfig = [
//   { title: 'Home', path: '/' },
//   // { title: 'Components', path: Routes.componentsUI },
//   {
//     title: 'Pages',
//     path: Routes.PagesPage(),
//     children: [PageLinks[0], PageLinks[4], PageLinks[1], PageLinks[3], PageLinks[2], PageLinks[5]],
//   },
//   { title: 'Documentation', path: Routes.docs },
// ];

const HeaderLayout = ({data, isLoading, error, transparent}) => {

  const theme = useTheme();
  const navConfig = sanitizeTestData();
  
  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT);

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle disableGutters transparent={transparent} scrolling={isScrolling}>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <Box sx={{ lineHeight: 0, position: 'relative' }}>
            <Logo onDark={transparent && !isScrolling} />

            <Link href="/" >
              <Label
                color="info"
                sx={{
                  ml: 0.5,
                  px: 0.5,
                  top: -14,
                  left: 64,
                  height: 20,
                  fontSize: 11,
                  cursor: 'pointer',
                  position: 'absolute',
                }}
              >
                v1.4
              </Label>
            </Link>
          </Box>

          {isDesktop && (
            <NavDesktop
              isScrolling={isScrolling}
              isTransparent={transparent}
              navConfig={navConfig}
            />
          )}

        </Container>
      </ToolbarStyle>

      {isScrolling && <ToolbarShadowStyle />}
    </AppBar>
  );
}

export default HeaderLayout;

