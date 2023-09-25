// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Grid } from '@mui/material';
import { m } from 'framer-motion';
// hooks
// routes
import Routes from 'src/routes';
// components
import { SanityImage, HoopButton, MotionContainer, TextAnimate, varFade} from 'src/core/components';
import { SanityEnrichedImageObject } from 'src/@types/sanity';

// ----------------------------------------------------------------------

const RootStyle = styled('section')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  aspectRatio: ' 9/16',
  [theme.breakpoints.up('md')]: {
    width: '100%',
    aspectRatio: '1/1',
  },
  [theme.breakpoints.up('lg')]: {
    width: '100%',
    aspectRatio: '16 / 7',
  },
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
  const { heading, kicker, image, enableCTA, text } = props;

  return (
    <RootStyle>
      <MotionContainer sx={{width: '100%', height: '100%'}}>
        <Grid container sx={{ zIndex: 22, position: 'relative', height: '100%' }}>
          <Stack
            spacing={5}
            alignItems={{ xs: 'flex-start', md: 'center' }}
            justifyContent="center"
            sx={{
              width: '100%',
              height: '100%',
              py: { xs: 5, md: 20 },
              px: { xs: 5, md: 20 },
              textAlign: { xs: 'left', md: 'center' },
            }}
          >

              <Typography variant="h1" sx={{ fontWeight: 900, color: 'primary.contrastText', textShadow: '1px 1px 2px #1e1e1e' }}>
                <Box component={m.div} variants={varFade().in} sx={{ color: '' }}>
                  {kicker}
                </Box>
                {heading && <TextAnimate text={heading}/>}
              </Typography>


            {enableCTA && <HoopButton
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
            right: 0,
            bottom: 0,
            zIndex: 11,
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        >
          {image ?
            <SanityImage
              image={image}
            /> : null
          }

        </Box>

        </MotionContainer>
    </RootStyle>
  );
}

