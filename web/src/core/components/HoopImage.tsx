import { m } from 'framer-motion';
import { Box, Typography } from '@mui/material';

import { Image } from 'src/core/components';
import { default as AnimatedHoop } from 'src/core/components/AnimatedHoop';
import { urlFor } from 'integrations/sanityImage';
import { SanityEnrichedImageObject } from 'src/@types/sanity';

import { useInteractiveMapContext } from 'src/contexts/InteractiveMapContext';

type Props = {
  image: SanityEnrichedImageObject;
  backgroundColor?: {
    hex: string;
    rgb: Color;
  };
  headingOverlay?: string;
  textOverlay?: string;
  imageSize?: number;
}

type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
}

const createColorString = ({ r, g, b, a }: Color) => {
  const red = r;
  const green = g;
  const blue = b;
  const alpha = a;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

const variants = {
  hidden: { rotate: 360 },
  hover: () => {
    return {
      scale: 1.05,
    };
  },
  tap: () => {
    return {
      scale: 0.95,
      transition: {
        scale: { type: "spring", duration: 0.2, bounce: 0.4 },
      }
    };

  },
  visible: () => {
    const delay = 1 + 16 * 0.03;
    return {
      rotate: 0,
      transition: {
        rotate: { delay, type: "spring", duration: 1.4, bounce: 0 },
      }
    };
  }
}

const HoopImage = ({ image, backgroundColor, headingOverlay, textOverlay, imageSize }: Props) => {

  const { openMap } = useInteractiveMapContext();
  const size = imageSize ? imageSize : 290;
  const hoopSize = size + 200;
  const imageUrlBuilder = urlFor(image);
  const imageUrl = imageUrlBuilder.width(size).height(size).url();

  const backgroundColorString = backgroundColor ? createColorString(backgroundColor.rgb) : undefined;

  const handleClick = () => {
    console.log('clicked opening map')
    setTimeout(() => {
      openMap();
    } , 250);
  }

  return (
    <Box
      component={'div'}
      onClick={handleClick}
      sx={{
        padding: '20px',
        position: 'relative',
      }}
    >
      <Box component={'span'} sx={{ '& svg, & svg *': { width: '100%' } }}>
        <Image src={imageUrl} alt={''} backgroundColor={backgroundColorString} sx={{ clipPath: 'circle(50%)' }} >
          <Typography variant="h3">{headingOverlay}</Typography>
          <Typography variant="body1">{textOverlay}</Typography>
        </Image>
      </Box>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        whileHover={'hover'}
        whileTap={'tap'}
        variants={variants}
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

