import React, { FC } from 'react';
import { Routes } from '@blitzjs/next';

import NextLink from 'next/link';
import { useTheme } from '@mui/material/styles';
import { AppBar, Button, Container, Box, Link, Stack, Divider} from '@mui/material';

import { useOffSetTop, useResponsive } from 'src/hooks';

import { HEADER_DESKTOP_HEIGHT } from 'src/config';
import { ToolbarStyle, ToolbarShadowStyle } from './HeaderToolbarStyle';
import { Logo, Label } from 'src/core/components';
import { NavDesktop,  NavMobile} from 'src/core/layouts/nav';
import Searchbar from 'src/core/components/Searchbar';
import LanguagePopover from 'src/core/components/LanguagePopover';

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
      newFormat.child = {}
      newFormat.child['items'] = nav.subNavLists[0].navItems.reduce(navItemsChildrenReducer, []);
      newFormat.child['order'] = i;
      newFormat.child['subheader'] = "Common";
      newFormat.child['cover'] = `https://via.placeholder.com/200/#efefef`;
      newFormat.children = [newFormat.child];
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

  console.log(navItems);

  return navItems;
};

const Header = ({transparent}) => {

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

          <Box sx={{ flexGrow: 1 }} />

          <Stack spacing={2} direction="row" alignItems="center">
            <Searchbar
              sx={{
                ...(isScrolling && { color: 'text.primary' }),
              }}
            />

            <LanguagePopover
              sx={{
                ...(isScrolling && { color: 'text.primary' }),
              }}
            />

            <Divider orientation="vertical" sx={{ height: 24 }} />

          </Stack>

          {!isDesktop && (
            <NavMobile
              navConfig={navConfig}
              sx={{
                ml: 1,
                ...(isScrolling && { color: 'text.primary' }),
              }}
            />
          )}

        </Container>
      </ToolbarStyle>

      {isScrolling && <ToolbarShadowStyle />}
    </AppBar>
  );
}

export default Header;

