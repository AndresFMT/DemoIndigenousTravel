// @mui
import { styled } from '@mui/material/styles';
import { Container, Box, Stack, Typography, Grid } from '@mui/material';
import { SanityEnrichedImageObject } from 'src/@types/sanity';

import { PlayerWithImage } from 'src/core/components';
import { urlFor } from 'integrations/sanity.image';

import RootStyle from './RootStyle'
;
// ----------------------------------------------------------------------


const SectionContainer = styled('div')(() => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  overflow: 'hidden',
}));

// ----------------------------------------------------------------------

type Props = {
  heading?: string;
  kicker?: string;
  enableCTA?: boolean;
  text?: string;
  videoUrl?: string;
  image?: SanityEnrichedImageObject;
};

export default function VideoSection(props: Props) {
  const { heading, kicker, videoUrl, image} = props;
  if (videoUrl === undefined || image === undefined || image === null) {
    return null;
  }
  const placeholderImg = urlFor(image).url();

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
              px: { xs: 5, md: 15 },
              textAlign: { xs: 'left', md: 'center' },
            }}
          >
            <Typography variant="h3" sx={{ color: 'contrast.black', fontWeight: 900 }}>
              {heading}{<br />}
              <Box component="span" >
                {kicker ? kicker : ' '}
              </Box>
            </Typography>
            <Container sx={{ my: 10 }}>
              <Box >
                <PlayerWithImage videoPath={videoUrl} imgPath={placeholderImg} />
              </Box>
            </Container>
          </Stack>
        </Grid>
      </SectionContainer>
    </RootStyle>
  );
}

