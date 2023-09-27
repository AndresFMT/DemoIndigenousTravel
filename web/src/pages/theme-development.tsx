import { styled } from '@mui/material/styles';
import { Grid, Stack, Typography } from '@mui/material';
// display a page that displays all components of our design system

import Layout from "src/core/layouts/Layout"
import { Box } from '@mui/system';
// Path: theme-development.tsx
// ----------------------------------------------------------------------
import {useTheme }from '@mui/material/styles';

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



export default function ThemeDevelopment() {

  const theme = useTheme();

  return (
    <RootStyle>
      <SectionContainer>
          <Grid container sx={{ zIndex: 22, position: 'relative' }}>
            <Stack
              spacing={5}
              alignItems={{ xs: 'flex-start', md: 'flex-start' }}
              justifyContent="center"
              sx={{
                border: 'red',
                py: { xs: 5, md: 15 },
                px: { xs: 5, md: 30 },
                textAlign: { xs: 'left', md: 'end' },
              }}
            >
              <Typography variant="h1" sx={{ color: 'primary.yellow' }}>
                Theme Development
              </Typography>
              <Typography variant="h2" sx={{ color: 'primary.green' }}>
               H2 Heading Theme Development
              </Typography>
              <Typography variant="h3" sx={{ color: 'primary.burgundy' }}>
                Display a page that displays all components of our design system
              </Typography>
              <Typography variant="h4" sx={{ color: 'primary.tan' }}>
                Display a page that displays all components of our design system
              </Typography>
              <Typography variant="h5" sx={{ color: 'primary.lighter' }}>
                Display a page that displays all components of our design system
              </Typography>
              <Typography variant="h6" sx={{ color: 'primary.light' }}>
                Display a page that displays all components of our design system
              </Typography>
              <Typography variant="body1" sx={{ color: 'primary.main' }}>
                Display a page that displays all components of our design system
              </Typography>
              <Typography variant="body1" sx={{ color: 'primary.dark' }}>
                Display a page that displays all components of our design system
              </Typography>
              <Typography variant="body1" sx={{ color: 'primary.darker' }}>
                Display a page that displays all components of our design system
              </Typography>
              <Typography variant="body1" sx={{ color: 'primary.text' }}>
                displays all components of our design system some plain text
              </Typography>
              <Typography variant="button" sx={{ color: 'primary.contrastText' }}>
                This is some contrast text
              </Typography>
              <Typography variant="caption" sx={{ color: 'secondary.blue' }}>
                Display a page that displays all components of our design system
              </Typography>
              <Typography variant="overline" sx={{ color: 'secondary.darkBrown' }}>
                Display a page that displays all components of our design system
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'secondary.brown' }}>
                Display a page that displays all components of our design system
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'secondary.orange' }}>
                Display a page that displays all components of our design system
              </Typography>
              <Typography variant="subtitle3" sx={{ color: 'secondary.lighter' }}>
                Display a page that displays all components of our design system
              </Typography>
            </Stack>
          </Grid>
      </SectionContainer>
      <SectionContainer>
        <Grid container sx={{ zIndex: 22, position: 'relative' }}>
          <Stack
            spacing={5}
            alignItems={{ xs: 'flex-start', md: 'flex-start' }}
            justifyContent="center"
            sx={{
              border: 'red',
              py: { xs: 5, md: 15 },
              px: { xs: 5, md: 30 },
              textAlign: { xs: 'left', md: 'end' },
            }}
            direction='column'
            >
            { Object.entries(theme.palette).map( ([key, value]) => {
              return (
              <Box sx={{ display: 'flex', flexDirection:"row"}} >
                <Typography variant="h2" sx={{ color: 'primary.main' }}>
                  {key}
                </Typography>
                  {Object.entries(value).map( ([key, value]) => {
                    return (
                      <ColorDisplay color={value} name={key} />
                    )
                  })}
              </Box>
              )
            })}
          </Stack>
        </Grid>
      </SectionContainer>
    </RootStyle>
  );
}

const ColorDisplay = (props) => {
  const { color, name } = props;
  return (
    <Box sx={{ bgcolor: color, height: 100, width: 100 }} >
      <Typography variant="h5" sx={{ color: 'primary.yellow' }}>
        {name}
      </Typography>
    </Box>
  )
}
ThemeDevelopment.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
}


