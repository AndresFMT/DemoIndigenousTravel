import React from 'react';

import NextLink from 'next/link';
import { AppBar, Container, Box } from '@mui/material';

import { useOffSetTop, useResponsive } from 'src/hooks';

import { HEADER_DESKTOP_HEIGHT } from 'src/config';
import { ToolbarStyle, ToolbarShadowStyle } from 'src/core/layouts/header/HeaderToolbarStyle';
import { Logo } from 'src/core/components';
import { NavDesktop,  NavMobile, navConfig} from 'src/core/layouts/nav';

type ListProps = {
  transparent?: boolean;
};

const Header = ({transparent}: ListProps) => {

  const isDesktop = useResponsive('up', 'md');


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
              <Logo  isScrolling={isScrolling} sx={{}}/>

            </NextLink>
          </Box>

          {isDesktop && (
            <NavDesktop
              isScrolling={isScrolling}
              isTransparent={transparent}
              navConfig={navConfig}
            />

          )}

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

