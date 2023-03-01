import { m, AnimatePresence } from 'framer-motion';
import { Box, Grid, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Hoop, Image } from 'src/core/components';
import { MotionViewport, varFade } from 'src/core/components/animate';

import { default as AnimatedHoop } from 'src/core/components/AnimatedHoop';

import { urlFor } from 'integrations/sanityImage';

const RootStyle = styled('section')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(5),
  },
}));

const HoopImage = (props) => {
  const { image } = props;
  const imageSize = 290;
  const hoopSize = 290;
  const imageUrlBuilder = urlFor(image.image);
  const imageUrl = imageUrlBuilder.width(imageSize).height(imageSize).url();

  const whileHover = {
    rotate: [0, 15, 0],
    scale: 1.05,
    transition: {
      duration: 15,
      loop: Infinity,
      type: 'spring',
    }
  }

  return (
    <Box
      component={'div'}
      sx={{
        minHeight: '290px',
        minWidth: '290px',
        px: 4,
        py: 4,
        position: 'relative',
      }}
    >
      <Box component={'span'} sx={{ padding: '10px', '& svg, & svg *': { width: '100%' } }}>
        <Image src={imageUrl} sx={{ clipPath: 'circle(50%)' }} />
      </Box>
      <m.div
        whileHover={whileHover}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
        }}
      >
        <AnimatedHoop size={hoopSize} sx={{ height: '100%', width: '100%' }} />
      </m.div>

    </Box>
  )

}

const HomeHoopImage = (props) => {

  const { images, heading, description, kicker, redirectUrl } = props;
  return (
    <MotionViewport>
      <RootStyle>

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

          <Stack direction="row" spacing={12} sx={{ justifyContent: 'center' }}>

            {images.map((image, index) => {
              return (
                <HoopImage key={`hi${index}`} image={image} />
              )
            })}
          </Stack>
        </Container>
      </RootStyle>
    </MotionViewport>
  )
};


export default HomeHoopImage;

