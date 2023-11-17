import { useState, useContext } from 'react';
import NextLink from 'next/link';
// icons
import chevronDown from '@iconify/icons-carbon/chevron-down';
import chevronRight from '@iconify/icons-carbon/chevron-right';
// @mui
import { styled, alpha } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import {
  Box,
  Grid,
  Link,
  Stack,
  Divider,
  Collapse,
  Container,
  Typography,
  LinkProps,
} from '@mui/material';
// hooks
import { useResponsive } from 'src/hooks';
// components
import { Logo, Iconify, SocialsButton } from 'src/core/components';
//
import { PageLinks } from 'src/core/layouts/nav/NavConfig';

import { SiteSettingsContext } from 'src/contexts/SiteSettingsContext';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  background: theme.palette.footer.background,
  color: theme.palette.footer.text,
  margin: theme.spacing(10, 0, 0),
}));

const LinkStyle = styled((props: LinkProps) => <Link {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body1,
    marginTop: theme.spacing(1),
    color: theme.palette.text.footer.secondary,
    '&:hover': {
      color: theme.palette.text.footer.primary,
    },
  })
);

// ----------------------------------------------------------------------

export default function Footer() {
  const {
    facebookLink,
    twitterLink,
    linkedinLink,
    instagramLink
  } = useContext(SiteSettingsContext);

  const isDesktop = useResponsive('up', 'md');
  const lists = PageLinks.filter((list) => list.subheader !== 'Coming Soon');
  const renderLists = isDesktop
    ? lists
    : lists.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  const initialYear = 2023;
  const year = new Date().getFullYear();
  const isCurrentYear = initialYear === year;
  const displayYear = isCurrentYear ? year : `${initialYear} - ${year}`;

  return (
    <RootStyle>
      <Divider />
      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
          <Grid item xs={12} md={4}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <Stack alignItems="flex-start" spacing={3}>
                <Logo textColor={'#fff'} />
                <Typography variant="h6" sx={{ color: 'text.footer.secondary' }}>
                  Adventure To Understanding
                </Typography>
              </Stack>

              <Stack spacing={2}>
                <SocialsButton sx={{
                  color: 'footer.background',
                  bgcolor: 'text.footer.secondary',
                  '&:hover': {
                    bgcolor: alpha('#fff', 0.8),
                  },
                }}
                  links={{
                    facebookLink,
                    twitterLink,
                    instagramLink,
                    linkedinLink
                  }}
                />
              </Stack>

            </Stack>
          </Grid>

          <Grid item xs={12} md={8}>
            {isDesktop ? (
              <Masonry columns={2} spacing={4}>
                {renderLists.map((list) => (
                  <ListDesktop key={list.subheader} list={list} />
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {renderLists.map((list) => (
                  <ListMobile key={list.subheader} list={list} />
                ))}
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2.5}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="body3" sx={{ color: 'text.secondary' }}>
            © {displayYear}. All rights reserved
          </Typography>
          <Typography variant="body3" sx={{ color: 'text.secondary' }}>
            <Link href="https://indigpro.ca/" variant="body3" sx={{ color: 'text.secondary' }}>
              Website Proudly Built in Treaty One Territory by IndigPro
            </Link>
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center">
            <NextLink href="/privacy-policy" passHref>
              <Link variant="body3" sx={{ color: 'text.secondary' }}>
                Privacy Policy
              </Link>
            </NextLink>
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type ListProps = {
  list: {
    subheader: string;
    items?: {
      title: string;
      path: string;
    }[];
  };
};

function ListDesktop({ list }: ListProps) {
  const { subheader, items } = list;

  return (
    <Stack alignItems="flex-start" sx={{ pb: { md: 1 } }}>
      <Typography variant="h6" sx={{ color: 'text.footer.secondary' }}>{subheader}</Typography>
      {items?.map((link) => (
        <LinkStyle key={link.title} href={link.path}>
          {link.title}
        </LinkStyle>
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------


function ListMobile({ list }: ListProps) {
  const { subheader, items } = list;

  const [expand, setExpand] = useState(false);

  const onExpand = () => {
    setExpand(!expand);
  };

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="h6"
        onClick={onExpand}
        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        {subheader}
        <Iconify
          icon={expand ? chevronDown : chevronRight}
          sx={{ width: 20, height: 20, ml: 0.5 }}
        />
      </Typography>

      <Collapse in={expand} sx={{ width: 1 }}>
        <Box
          sx={{
            display: 'grid',
            rowGap: 1,
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          {items?.map((link) => (
            <LinkStyle key={link.title} href={link.path}>
              {link.title}
            </LinkStyle>
          ))}
        </Box>
      </Collapse>
    </Stack>
  );
}
