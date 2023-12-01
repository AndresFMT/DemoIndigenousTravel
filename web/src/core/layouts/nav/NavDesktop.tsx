import { useState, useEffect, MouseEventHandler } from 'react';
// icons
import chevronDown from '@iconify/icons-carbon/chevron-down';
import chevronUp from '@iconify/icons-carbon/chevron-up';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Stack, LinkProps } from '@mui/material';
// components
import { Iconify } from 'src/core/components';
import { NavProps, NavItemDesktopProps } from 'src/@types/layout';

//
import NavDesktopMenu from './NavDesktopMenu';

// ----------------------------------------------------------------------

interface RootLinkStyleProps extends LinkProps {
  open?: boolean;
  active?: boolean;
  scrolling?: boolean;
  transparent?: boolean;
}

const RootLinkStyle = styled(NextLink, {
  shouldForwardProp: (prop) =>
    prop !== 'active' && prop !== 'scrolling' && prop !== 'transparent' && prop !== 'open',
})<RootLinkStyleProps>(({ active, scrolling, transparent, open, theme }) => {
  const dotActiveStyle = {
    '&:before': {
      top: 0,
      width: 6,
      height: 6,
      bottom: 0,
      left: -14,
      content: '""',
      display: 'block',
      margin: 'auto 0',
      borderRadius: '50%',
      position: 'absolute',
      backgroundColor: theme.palette.primary.main,
    },
  };
  return {
    ...theme.typography.subtitle2,
    fontWeight: theme.typography.fontWeightMedium,
    display: 'flex',
    color: 'inherit',
    position: 'relative',
    alignItems: 'center',
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      opacity: 0.72,
      textDecoration: 'none',
    },
    ...(active && {
      ...dotActiveStyle,
      color: theme.palette.primary.burgundy,
      ...(transparent && { color: theme.palette.common.white }),
      ...(scrolling && { color: theme.palette.text.primary }),
    }),
    ...(open && {
      color: theme.palette.primary.main,
    }),
  };
});
const RootMapLinkStyle = styled(Link, {
  shouldForwardProp: (prop) =>
    prop !== 'active' && prop !== 'scrolling' && prop !== 'transparent' && prop !== 'open',
})<RootLinkStyleProps>(({ active, scrolling, transparent, open, theme }) => {
  const dotActiveStyle = {
    '&:before': {
      top: 0,
      width: 6,
      height: 6,
      bottom: 0,
      left: -14,
      content: '""',
      display: 'block',
      margin: 'auto 0',
      borderRadius: '50%',
      position: 'absolute',
      backgroundColor: theme.palette.primary.main,
    },
  };
  return {
    ...theme.typography.subtitle2,
    fontWeight: theme.typography.fontWeightMedium,
    display: 'flex',
    color: 'inherit',
    position: 'relative',
    alignItems: 'center',
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      opacity: 0.72,
      textDecoration: 'none',
    },
    ...(active && {
      ...dotActiveStyle,
      color: theme.palette.primary.burgundy,
      ...(transparent && { color: theme.palette.common.white }),
      ...(scrolling && { color: theme.palette.text.primary }),
    }),
    ...(open && {
      color: theme.palette.primary.main,
    }),
  };
});
// ----------------------------------------------------------------------

export default function NavDesktop({ isScrolling, isTransparent, navConfig }: NavProps) {
  return (
    <Stack
      direction="row"
      spacing={6}
      sx={{
        ml: 6,
        mr: 6,
        color: 'primary.burgundy',
        ...(isTransparent && {
          color: 'inherit',
        }),
        ...(isScrolling && {
          color: 'primary.burgundy',
        }),
      }}
    >
      {navConfig.map((link) => (
        <NavItemDesktop
          key={link.title}
          item={link}
          isScrolling={isScrolling}
          isTransparent={isTransparent}
        />
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------


function NavItemDesktop({ item, isScrolling, isTransparent }: NavItemDesktopProps) {
  const { title, path, children } = item;

  const router = useRouter();
  const { pathname, query, asPath, replace } = router;

  const [open, setOpen] = useState(false);

  const isActiveRoot = path === pathname || (path !== '/' && asPath.includes(path));

  useEffect(() => {
    const handleRouteChange: (url: string, props: {shallow: boolean})=> void = (url, {shallow})=> {
      setOpen(false);
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      )
    };
    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }

  }, [router]);

  const handleOpen: MouseEventHandler = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  if (children) {
    return (
      <>
        <RootLinkStyle
          onClick={handleOpen}
          open={open}
          scrolling={isScrolling}
          transparent={isTransparent}
          href="#"
          legacyBehavior
        >
          {title}
          <Iconify
            icon={open ? chevronUp : chevronDown}
            sx={{
              ml: 0.5,
              width: 16,
              height: 16,
            }}
          />
        </RootLinkStyle>

        <NavDesktopMenu
          lists={children}
          isOpen={open}
          onClose={handleClose}
          isScrolling={isScrolling}
        />
      </>
    );
  }

  if (title === 'Map') {
    return (
      <RootMapLinkStyle key={title} onClick={(e) => { e.preventDefault(); replace({ pathname, query: { ...query,'imv': 'true' } }, undefined, { shallow: true }); }}>
        {title}
      </RootMapLinkStyle>
    );
  }


  return (
    <RootLinkStyle key={title} href={path} active={isActiveRoot} scrolling={isScrolling} transparent={isTransparent} legacyBehavior>
      {title}
    </RootLinkStyle>
  );
}

