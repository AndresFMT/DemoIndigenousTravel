import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Stack, Typography, Box, TextField } from '@mui/material';
// display a page that displays all components of our design system

import Layout from "src/core/layouts/Layout"
// Path: theme-development.tsx
// ----------------------------------------------------------------------
import { useTheme } from '@mui/material/styles';

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

  const [testText, setTestText] = useState('The quick brown fox jumps over the lazy dog');

  return (
    <RootStyle>
      <SectionContainer>
        <Grid container sx={{ zIndex: 22, position: 'relative' }}>
          <Stack
            spacing={2}
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
            <TextField
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              label="Primary"
              variant="outlined"
              multiline
              maxRows={2}
              sx={{ color: 'primary.main', width: '80%'}} />

            {Object.entries(theme.typography).map(([key, value], index) => {
              if (key === 'pxToRem' || key === 'fontFamily' || typeof value !== 'object') {
                return null;
              }
              if (key === 'fontFamily') {
                return (
                  <>
                    <Typography variant="body1" sx={{ color: 'primary.text'  }}>
                      {key}{value}
                    </Typography>
                      <pre><code>{JSON.stringify(value, null, 2)}</code></pre>
                  </>

                )
              }
              return (
                <Box key={`${index}-${key}`} sx={{ display: 'flex', flexDirection: "column", alignItems: 'start' }} >
                  <Typography variant="h3" sx={{ color: 'primary.text', textTransform: 'uppercase' }}>
                    {key}
                  </Typography>
                  <Stack direction={"row"} spacing={2}>
                    <Typography variant={key} {...value} >
                      {testText}
                    </Typography>
                  </Stack>
                </Box>
              )
            })}
          </Stack>
        </Grid>
      </SectionContainer>
      <SectionContainer>
        <Grid container sx={{ zIndex: 22, position: 'relative' }}>
          <Stack
            spacing={2}
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
            {Object.entries(theme.palette).map(([key, value], index) => {
              if (typeof value !== 'object') {
                return null;
              }
              return (
                <Box key={`${index}-${key}`} sx={{ display: 'flex', flexDirection: "column", alignItems: 'start' }} >
                  <Typography variant="h3" sx={{ color: 'primary.text', textTransform: 'uppercase' }}>
                    {key}
                  </Typography>
                  <Stack direction={"row"} sx={{ border: '1px solid' ,borderColor: 'rgba(129,135,204,1)', borderRadius:'8px', padding: theme.spacing(2)}}>
                    {Object.entries(value).map(([key, value], index) => {

                      return (
                        <ColorDisplay key={`${index}-${key}`} color={value} name={key} />
                      )
                    })}
                  </Stack>
                </Box>
              )
            })}
          </Stack>
        </Grid>
      </SectionContainer>
    </RootStyle>
  );
}

const ColorDisplay = (props: any) => {
  const { color, name } = props;
  return (
    <Box >
      <Box sx={{ background: color, height: 100, width: 100, border: '1px solid', borderColor: 'grey.50' }} >
      </Box>
      <Typography variant="body1" sx={{ color: color }}>
        {name}
      </Typography>
    </Box>
  )
}
ThemeDevelopment.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
}


export function getStaticProps () {
  const title = 'Theme Development';
  const description = 'Theme Development';
  return {
    props : {
      notFound: process.env.NODE_ENV === 'production',
    }
  };
}
