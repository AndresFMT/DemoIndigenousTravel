import { useRef } from 'react';
import Slider from 'react-slick';
import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, List, Link, Stack, ListItem, ListSubheader } from '@mui/material';
// config
import { HEADER_DESKTOP_HEIGHT } from 'src/config';
//
import { Image, CarouselDots, CarouselArrows } from 'src/core/components';
import { DialogAnimate, MotionContainer, varFade } from 'src/core/components/animate';

// ----------------------------------------------------------------------
import {
  ListItemProps,
  ListSubheaderProps,
} from '@mui/material';
// config
// @types
import { NavDesktopMenuProps } from 'src/@types/layout';

interface SubLinkStyleProps extends ListItemProps {
  active?: boolean;
}

const SubLinkStyle = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'active',
})<SubLinkStyleProps>(({ active, theme }) => {

  const activeBullet = {
    content: '""',
    display: 'block',
    position: 'absolute',
    left: -12,
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
  };

  return ({
    ...theme.typography.body3,
    padding: 0,
    width: 'auto',
    cursor: 'pointer',
    color: theme.palette.text.secondary,
    transition: theme.transitions.create('color'),
    '&:hover': {
      color: theme.palette.text.primary,
      opacity: 0.8,
      backgroundColor: 'transparent',
      '&::before': activeBullet
    },
    ...(active && {
      ...theme.typography.subtitle3,
      color: theme.palette.text.primary,
      '&::before': activeBullet
    }),
  })
});

const ListSubheaderStyled = styled((props: ListSubheaderProps) => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.h5,
  marginBottom: theme.spacing(2.5),
  color: theme.palette.text.primary,
}));

// ----------------------------------------------------------------------

export default function NavDesktopMenu({
  lists,
  isOpen,
  onClose,
  isScrolling,
}: NavDesktopMenuProps) {
  const router = useRouter();

  const theme = useTheme();

  const carouselRef = useRef<Slider | null>(null);

  const carouselList = lists && lists.filter((list) => list.subheader !== 'Common');

  const commonList = lists && lists.filter((list) => list.subheader === 'Common')[0];

  const minList = lists && lists.length > 5;

  const carouselSettings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots(),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <DialogAnimate
      hideBackdrop
      maxWidth={false}
      open={isOpen}
      onClose={onClose}
      sx={{}}
      variants={
        varFade({
          distance: 80,
          durationIn: 0.16,
          durationOut: 0.24,
          easeIn: 'easeIn',
          easeOut: 'easeOut',
        }).inRight
      }
      PaperProps={{
        sx: {
          m: 0,
          maxWidth: 1,
          position: 'absolute',
          borderRadius: '0 !important',
          top: isScrolling ? HEADER_DESKTOP_HEIGHT - 20 : HEADER_DESKTOP_HEIGHT,
          // Fix scroll on window
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        },
      }}
    >
      <Grid container columns={15} spacing={4}>
        <Grid item xs={12}>
          <Box sx={{ position: 'relative', px: 2, py: 6 }}>
            <Slider ref={carouselRef} {...carouselSettings}>
              {carouselList.map((list) => {
                const { subheader, items, cover } = list;
                if (typeof items === 'undefined') return null;

                const path = items.length > 0 ? items[0]?.path : '';

                return (
                  <List key={subheader} disablePadding sx={{ px: 2 }} component={MotionContainer}>
                    <m.div variants={varFade({ distance: 80 }).inLeft}>
                      <ListSubheaderStyled>{subheader}</ListSubheaderStyled>
                    </m.div>

                    {cover ? (
                      <NextLink href={path || '#'} passHref>
                        <Box
                          component={m.a}
                          variants={varFade({ distance: 80 }).inLeft}
                          sx={{ display: 'block' }}
                        >
                          <Image
                            alt={cover}
                            src={cover}
                            sx={{
                              mb: 2.5,
                              minHeight: 80,
                              borderRadius: 1.5,
                              cursor: 'pointer',
                              transition: theme.transitions.create('opacity'),
                              border: (theme) => `solid 1px ${theme.palette.divider}`,
                              '&:hover': { opacity: 0.8 },
                            }}
                          />
                        </Box>
                      </NextLink>
                    ) : (
                      <Box
                        sx={{
                          mb: 2.5,
                          height: 132,
                          borderRadius: 1.5,
                          display: 'flex',
                          typography: 'h5',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'text.disabled',
                          bgcolor: 'background.neutral',
                        }}
                      >
                        Coming Soon!
                      </Box>
                    )}

                    <Stack spacing={1.5} alignItems="flex-start">
                      {items?.map((item) => {
                        const { title, path } = item;

                        const active = router.pathname === path || router.asPath === path;

                        return <LinkItem key={title} title={title} href={path} active={active} />;
                      })}
                    </Stack>
                  </List>
                );
              })}
            </Slider>

            {minList && (
              <CarouselArrows
                onNext={handleNext}
                onPrevious={handlePrevious}
                sx={{
                  top: -28,
                  position: 'relative',
                  justifyContent: 'flex-end',
                }}
              />
            )}
          </Box>
        </Grid>

        {/* Common List */}
        <Grid
          item
          xs={3}
          sx={{
            borderLeft: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          <List disablePadding sx={{ py: 6 }} component={MotionContainer}>
            <ListSubheaderStyled>{commonList?.subheader}</ListSubheaderStyled>
            <Stack spacing={1.5} alignItems="flex-start">
              {commonList?.items.map((item) => {
                const { title, path } = item;
                const active = router.pathname === path;

                return <LinkItem key={title} title={title} href={path} active={active} />;
              })}
            </Stack>
          </List>
        </Grid>
      </Grid>
    </DialogAnimate>
  );
}

// ----------------------------------------------------------------------

type LinkItemProps = {
  title: string;
  href: string;
  active: boolean;
};

function LinkItem({ title, href, active }: LinkItemProps) {
  return (
    <NextLink key={title} href={href} passHref>
      <Link
        color="inherit"
        underline="hover"
        component={m.a}
        variants={
          varFade({
            distance: 12,
            durationIn: 0.16,
            durationOut: 0.12,
            easeIn: 'easeIn',
          }).inRight
        }
      >
        <SubLinkStyle active={active}>
          {title}
        </SubLinkStyle>
      </Link>
    </NextLink>
  );
}

