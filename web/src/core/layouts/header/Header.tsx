import React from 'react';
import { Routes } from '@blitzjs/next';

import NextLink from 'next/link';
import { useTheme } from '@mui/material/styles';
import { AppBar, Button, Container, Box, Link, Stack, Divider} from '@mui/material';

import { useOffSetTop, useResponsive } from 'src/hooks';

import { HEADER_DESKTOP_HEIGHT } from 'src/config';
import { ToolbarStyle, ToolbarShadowStyle } from './HeaderToolbarStyle';
import { Logo, Label } from 'src/core/components';
import { NavDesktop,  NavMobile, navConfig} from 'src/core/layouts/nav';
import Searchbar from 'src/core/components/Searchbar';

const Header = ({transparent}) => {

  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT);

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle disableGutters transparent={transparent} scrolling={isScrolling}>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'space-between',
            justifyContent: 'space-between',
            maxWidth: '1440px !important',
          }}
        >
          <Box sx={{ lineHeight: 0, position: 'relative' }}>
            <NextLink href="/" >
              <Logo onDark={transparent && !isScrolling} sx={{}}/>

            </NextLink>
          </Box>

          {isDesktop && (
            <NavDesktop
              isScrolling={isScrolling}
              isTransparent={transparent}
              navConfig={navConfig}
            />
          )}

          <Stack spacing={2} direction="row" alignItems="center">

            <Divider orientation="vertical" sx={{ height: 24 }} />

            <Searchbar
              sx={{
                ...(isScrolling && { color: 'text.primary' }),
              }}
            />

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

