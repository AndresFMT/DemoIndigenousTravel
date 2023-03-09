import { m } from 'framer-motion';
import { Box, Typography } from '@mui/material';

import { Image } from 'src/core/components';
import { default as AnimatedHoop } from 'src/core/components/AnimatedHoop';
import { urlFor } from 'integrations/sanityImage';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type Props = {
  image: SanityImageSource;
  backgroundColor?: {
    hex: string;
    rgb: Color;
  };
  headingOverlay?: string;
  textOverlay?: string;

}

type Color =  {
  r: number;
  g: number;
  b: number;
  a: number;
}

const createColorString = ({r,g,b,a}: Color) => {
  const red = r;
  const green = g;
  const blue = b;
  const alpha = a;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

const HoopImage = ({ image, backgroundColor, headingOverlay, textOverlay}: Props) => {
  const imageSize = 290;
  const hoopSize = imageSize + 200;
  const imageUrlBuilder = urlFor(image);
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

  const backgroundColorString = backgroundColor ? createColorString(backgroundColor.rgb): undefined;

  return (
    <Box
      component={'div'}
      sx={{
        padding: '20px',
        position: 'relative',
      }}
    >
      <Box component={'span'} sx={{  '& svg, & svg *': { width: '100%' } }}>
        <Image src={imageUrl} alt={''} backgroundColor={backgroundColorString} sx={{ clipPath: 'circle(50%)' }} >
          <Typography variant="h3">{headingOverlay}</Typography>
          <Typography variant="body1">{textOverlay}</Typography>
        </Image>
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

export default HoopImage;

