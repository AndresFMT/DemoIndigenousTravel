import { m } from 'framer-motion';
import { Box, Grid, Typography, Stack } from '@mui/material';

import { Image } from 'src/core/components';

import { urlFor } from 'integrations/sanity.image';
import { MotionViewport, varFade } from 'src/core/components/animate';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import RootStyle from './RootStyle';
type Props = {
  sx?: any;
  title?: string;
  description?: string;
  image: SanityImageSource;
  backgroundColor?: { hex: string };
};

const ImageBreak = ({ title, description, image, backgroundColor, ...other }: Props) => {

  const { hex } = backgroundColor || { hex: '#A69D88' };
  const imageBuilder = urlFor(image);

  const masterImage = imageBuilder.width(1920).height(800).url();

  return (
    <RootStyle>
      <MotionViewport>
        <Stack sx={{ background: hex }}>
          <m.div variants={varFade().inUp}>
            <Image src={masterImage}
              alt={''}
              {...other} />
          </m.div>
          <Grid item xs={12} sm={6} sx={{
            background: hex,
            px: { xs: 5, md: 30 },

          }}>
            <Box sx={{ my: 3, mx: 'auto', maxWidth: 750 }}>
              <Typography variant="h2" component="h2" sx={{ py: 2, color: 'primary.contrastText' }}>
                <Box component={'span'}>
                  {title}
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: 'primary.contrastText' }}>
                {description}
              </Typography>
            </Box>
          </Grid>

        </Stack>

      </MotionViewport>
    </RootStyle>
  );
}

export default ImageBreak;

