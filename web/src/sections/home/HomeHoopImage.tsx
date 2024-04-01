import { m } from 'framer-motion';
import { Box, Typography, Container, Stack } from '@mui/material';

import { HoopImage } from 'src/core/components';
import { MotionViewport, varFade } from 'src/core/components/animate';
import { HomepageContent } from 'src/@types/sanity';

import RootStyle from './RootStyle';

const HomeHoopImage = (props: HomepageContent ) => {

  const { images, heading, description } = props;
  return (
    <RootStyle>
      <MotionViewport>
        <Container maxWidth="lg">
          <m.div variants={varFade().inUp}>
            <Box sx={{ my: 3, mx: 'auto', maxWidth: 750 }}>
              <Typography variant="h2" sx={{ py: 2, color: 'primary.burgundy' }}>
                {heading}
              </Typography>
              <Typography variant="body1" >
                {description}
              </Typography>
            </Box>
          </m.div>

          <Stack direction="row" spacing={12} sx={{ my: 5, justifyContent: 'center' }}>

            {images?.length && images.map((imageData, index) => {
            const {image} = imageData;
              return (
                <HoopImage key={`hi${index}`} image={image} />
              )
            })}
          </Stack>
        </Container>
      </MotionViewport>
    </RootStyle>
  )
};


export default HomeHoopImage;

