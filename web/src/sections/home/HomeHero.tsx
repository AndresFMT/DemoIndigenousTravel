// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Grid } from '@mui/material';
// hooks
// routes
import Routes from 'src/routes';
// components
import { SanityImage, HoopButton } from 'src/core/components';

import { urlFor } from 'integrations/sanityImage';

import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from 'src/config';

// ----------------------------------------------------------------------

const RootStyle = styled('section')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  marginTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    width: '100%',
    marginTop: HEADER_DESKTOP_HEIGHT,
  },
}));

const SectionContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
}));

// ----------------------------------------------------------------------

export default function HomeHero(props: any) {

  console.log('HomeHero props', props);
  const { heading, kicker, image } = props;

  const imageBuilder = urlFor(image);

  const masterImage = imageBuilder.width(1920).height(900).url();
  const desktopImage = imageBuilder.width(768).height(632).url();
  const tabletImage = imageBuilder.width(600).height(600).url();
  const mobileImage = imageBuilder.width(320).height(427).url();

  return (
    <RootStyle>
      <SectionContainer>
          <Grid container spacing={3} sx={{ zIndex: 22, position: 'absolute', marginBottom: { xs: 'unset', md:'50%'} }}>
            <Stack
              spacing={3}
              alignItems={{ xs: 'flex-start', md: 'flex-start' }}
              justifyContent="center"
              sx={{
                py: { xs: 5, md: 15 },
                px: { xs: 5, md: 30 },
                textAlign: { xs: 'left', md: 'left' },
              }}
            >
              <Typography variant="h2" sx={{ typography: 'hero' }}>
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {heading}
                </Box>
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                {kicker ? kicker : ' '}
              </Typography>

              <HoopButton
                color="inherit"
                variant="contained"
                sx={{ background: 'primary.darker', transform: { xs: 'scale(0.8)', md: 'scale(0.9)' } }}
                href={Routes.reconcilliation}
              >
                Experience
              </HoopButton>
            </Stack>
          </Grid>


          {/* Background */}
          <Box
            component="div"
            sx={{
              top: 0,
              left: 0,
              zIndex: 11,
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
          >
            {masterImage ?
              <SanityImage
                srcset={[`${mobileImage} 320w`, `${tabletImage} 680w`, `${desktopImage} 768w`, `${masterImage} 1080w`]}
                src={mobileImage}
              /> : null
            }
          </Box>
      </SectionContainer>

    </RootStyle>
  );
}

