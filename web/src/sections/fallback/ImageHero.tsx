// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Grid } from '@mui/material';
// hooks
// routes
import Routes from 'src/routes';
// components
import { SanityHeroImage, HoopButton } from 'src/core/components';
import { SanityEnrichedImageObject } from 'src/@types/sanity';

// ----------------------------------------------------------------------

const RootStyle = styled('section')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    width: '100%',
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

export default function ImageHero(props: Props) {
  const {heading, kicker, image, enableCTA, text } = props;
  console.log('FallbackImageHero', props);

  return (
    <RootStyle>
      <SectionContainer>
          <Grid container sx={{ zIndex: 22, position: 'relative' }}>
            <Stack
              spacing={5}
              alignItems={{ xs: 'flex-start', md: 'center' }}
              justifyContent="center"
              sx={{
                width: '100%',
                py: { xs: 5, md: 15 },
                px: { xs: 5, md: 30 },
                textAlign: { xs: 'left', md: 'center' },
              }}
            >
              <Typography variant="h1" sx={{fontWeight: 500, color: 'grey.0', textShadow: '1px 1px 2px #1e1e1e'}}>
                  {heading}{<br/>}
                <Box component="span" sx={{ fontWeight: '900' }}>
                  {kicker ? kicker : ' '}
                </Box>
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
              position: 'absolute',
            }}
          >
            {image ?
              <SanityHeroImage
                image={image}
              /> : null
            }
          </Box>
      </SectionContainer>

    </RootStyle>
  );
}

