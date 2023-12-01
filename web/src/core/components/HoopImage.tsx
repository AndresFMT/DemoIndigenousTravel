import { m } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import { useRouter } from 'next/router';

import { Image } from 'src/core/components';
import { default as AnimatedHoop } from 'src/core/components/AnimatedHoop';
import { urlFor } from 'integrations/sanity.image';
import { SanityEnrichedImageObject, SanityColorProps} from 'src/@types/sanity';

import { useInteractiveMapContext } from 'src/contexts/InteractiveMapContext';

type Props = {
  image?: SanityEnrichedImageObject;
  backgroundColor?: SanityColorProps;
  headingOverlay?: string;
  textOverlay?: string;
  imageSize?: number;
  link?: string;
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

const calculateBackgroundLuminance = (color?: SanityColorProps) => {
  if (color == undefined) {
    return 1;
  }
  return (0.299 * color.rgb.r + 0.587 * color.rgb.g + 0.114 * color.rgb.b) / 255;
}

const HoopImage = ({ image, backgroundColor, headingOverlay, textOverlay, imageSize, link}: Props) => {
  const { getRandomOperator } = useInteractiveMapContext();
  const router = useRouter();
  const size = imageSize ? imageSize : 290;
  const hoopSize = size * 1.2;

  let imageUrl;
  if (!image) {
    return null;
  } else {
    const imageUrlBuilder = urlFor(image);
    imageUrl = imageUrlBuilder.width(size).height(size).url();
  }
  const backgroundColorString = backgroundColor ? createColorString(backgroundColor.rgb) : undefined;

  const isBackgroundLight = calculateBackgroundLuminance(backgroundColor) < 0.5;
  const fontColor = isBackgroundLight ? 'primary.contrastText' : 'primary.text';
  const fontWeight = isBackgroundLight ? '700' : '500';

  const handleClick = () => {
    console.log('clicked opening map')
    setTimeout(() => {
      if (link?.includes('so=random')) {
        const randomOperator = getRandomOperator();
        router.query.so = randomOperator;
      }
      router.query.imv = 'true';
      router.push(router, undefined, { scroll: false})
    } , 500);
  }

  return (
    <Box
      component={'div'}
      onClick={handleClick}
      className={'hoop-image'}
      sx={{
        position: 'relative',
        width: hoopSize,
        height: hoopSize,
        my: {xs: 5, md: 2},
      }}
    >
      <Box component={'div'} sx={{ display: 'flex','& svg, & svg *': { width: '100%' }, width: '100%' , height: '100%',color: fontColor, fontWeight: fontWeight, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          src={imageUrl}
          alt={''}
          overlay={backgroundColorString}
          useIntersectionObserver
          sx={{ clipPath: 'circle(50%)', height: size, width: size }}
          ratio="1/1"
          placeholdersrc={image?.asset?.metadata?.lqip}
        >
        </Image>
        <Box sx={{
          position: 'absolute',
          padding: '10px',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center' }}>
          <Typography variant="h3">{headingOverlay}</Typography>
          <Typography variant="body1" sx={{textAlign: 'center', padding: '10px'}}>{textOverlay}</Typography>
        </Box>
      </Box>
      <Tooltip
        placement="left-start"
        followCursor={true}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title="Open Map"
      >
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
      </Tooltip>
    </Box>
  )
}

export default HoopImage;

