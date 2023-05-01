// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Grid } from '@mui/material';
// hooks
// routes
import Routes from 'src/routes';
// components
import { SanityHeroImage, HoopButton } from 'src/core/components';


import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from 'src/config';
import { SanityEnrichedImageObject } from 'src/@types/sanity';

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

const SectionContainer = styled('div')(() => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
}));

// ----------------------------------------------------------------------

type Props = {
  heading?: string;
  kicker?: string;
  image?: SanityEnrichedImageObject;
  enableCTA?: boolean;
  text?: string;
  videoUrl?: string;
};

export default function HomeHero({heading, kicker, image, enableCTA, text, videoUrl}: Props) {


  const Video = videoUrl ? (<video autoPlay muted loop style={{width: '100%'}} src={videoUrl} id="myVideo">
              <source src={videoUrl} type="video/mp4" />
            </video>) : null;

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

              { enableCTA && <HoopButton
                color="inherit"
                variant="contained"
                sx={{ background: 'primary.darker', transform: { xs: 'scale(0.8)', md: 'scale(0.9)' } }}
                href={Routes.reconciliation}
              >
                {text}
              </HoopButton>
              }
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
            {image ?
              <SanityHeroImage
                image={image}
              /> : null
            }

            {Video}
          </Box>
      </SectionContainer>

    </RootStyle>
  );
}

