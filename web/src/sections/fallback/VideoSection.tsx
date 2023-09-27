import dynamic from 'next/dynamic'
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Grid } from '@mui/material';
import { SanityEnrichedImageObject } from 'src/@types/sanity';

import {VideoPlayerProps} from 'src/core/components/VideoPlayer';
const VideoPlayer = dynamic<VideoPlayerProps>(() => import("src/core/components/VideoPlayer"), { ssr: false });
// ----------------------------------------------------------------------

const RootStyle = styled('section')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  padding: theme.spacing(5, 0),
  [theme.breakpoints.up('md')]: {
    width: '100%',
    padding: theme.spacing(0, 0, 5, 0),
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


export default function VideoSection(props: Props) {
  const { heading, kicker, videoUrl } = props;

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
              px: { xs: 5, md: 15},
              textAlign: { xs: 'left', md: 'center' },
            }}
          >
            <Typography variant="h3" sx={{ color: 'contrast.black', fontWeight: 900 }}>
              {heading}{<br />}
              <Box component="span" >
                {kicker ? kicker : ' '}
              </Box>
            </Typography>
            <VideoPlayer src={videoUrl} />
          </Stack>
        </Grid>

      </SectionContainer>
    </RootStyle>
  );
}

