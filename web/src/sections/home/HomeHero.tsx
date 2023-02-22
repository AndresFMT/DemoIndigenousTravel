import { useRef } from 'react';
// icons
import launchIcon from '@iconify/icons-carbon/launch';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, Container, Typography, Grid } from '@mui/material';
// hooks
import { useBoundingClientRect } from 'src/hooks';
// routes
import Routes from 'src/routes';
// components
import { Image, Iconify } from 'src/core/components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    height: '100vh',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero(props:any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  const {heading, kicker, imageUrl} = props;

  return (
    <RootStyle sx={{
      height: 1,
      background: `linear-gradient(0deg,rgba(56,52,45,0.7), rgba(237,167,61,0.7)), url("${imageUrl}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      }}
    >
      <Container sx={{height: 1,}}
      >
        <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
          <Grid item xs={12} md={5}>
            <Stack
              spacing={5}
              alignItems={{ xs: 'center', md: 'flex-start' }}
              justifyContent="center"
              sx={{
                py: 15,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h1">
              { heading }
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {''} ZONE
                </Box>
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                { kicker }
              </Typography>

              <Button
                color="inherit"
                size="large"
                variant="contained"
                endIcon={<Iconify icon={launchIcon} />}
                target="_blank"
                rel="noopener"
                href={Routes.figmaPreview}
              >
                Experience
              </Button>

            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

    </RootStyle>
  );
}

