import React from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
import {
  Typography,
  Container,
  Stack,
  Box,
  Button,
} from '@mui/material'
import { styled } from '@mui/material/styles';
import { SanityEnrichedImageObject, SanityColorProps } from 'src/@types/sanity';
import ImageBackground from 'src/core/components/ImageBackground';
import PortableTextRender from 'src/core/components/PortableText';
import { MotionViewport, varSlide } from 'src/core/components';

export interface PortableBlockProps {
  id: string;
  _type: string;
  name: string;
};

interface Props {
  heading?: string;
  richText?: PortableBlockProps[];
  image?: SanityEnrichedImageObject;
  className?: string;
  cta?: {
    text: string;
    link: string;
  }
};

const RootStyle = styled('section')(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
}));

const calculateBackgroundLuminance = (color?: SanityColorProps) => {
  if (color == undefined) {
    return 1;
  }
  return (0.299 * color.rgb.r + 0.587 * color.rgb.g + 0.114 * color.rgb.b) / 255;
}

const PortableBlock = (props: Props): JSX.Element => {
  const { heading, richText, image, cta } = props;

  const isBackgroundLight = calculateBackgroundLuminance(image?.imageOverlay) < 0.5;
  const fontColor = isBackgroundLight ? 'primary.contrastText' : 'primary.text';
  const fontWeight = isBackgroundLight ? '700' : '500';

  return (
    <RootStyle>
      <MotionViewport sx={{ width: '100%', height: '100%' }} >
      <ImageBackground image={image} />

      <Container maxWidth="lg">
        <Stack
          component={m.div}
          variants={varSlide().inUp}
          spacing={5}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          justifyContent="flex-start"
          sx={{ color: fontColor, fontWeight: fontWeight, width: '100%', py: { xs: 5, md: 5 }, px: { xs: 5, md: 15, lg: 20 } }}>
          <Typography variant="h3" sx={{ fontWeight: 100 }}>
            {heading}
          </Typography>
          <PortableTextRender body={richText} />
          {
            cta &&
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 5 }}>
              <Button href={cta.link} passHref={true} component={Link} variant="contained" color="primary" size="large">{cta.text}</Button>
            </Box>
          }
        </Stack>
      </Container>
      </MotionViewport>
    </RootStyle>
  );
};

export default PortableBlock;

