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

import { SanityEnrichedImageObject, SanityColorProps } from 'src/@types/sanity';
import ImageBackground from 'src/core/components/ImageBackground';
import PortableTextRender from 'src/core/components/PortableText';
import { MotionViewport, varSlide } from 'src/core/components';
import RootStyle from './RootStyle';

export interface PortableBlockProps {
  id: string;
  _type: string;
  name: string;
};

export interface SanityPDFObject {
  _type: string;
  asset: {
    _ref: string; // Reference to the PDF asset in Sanity
  };
}

interface Props {
  heading?: string;
  richText?: PortableBlockProps[];
  image?: SanityEnrichedImageObject;
  className?: string;
  cta?: {
    text: string;
    link: string;
  }
  textWidth?: string;
  pdf?: SanityPDFObject;
};


const calculateBackgroundLuminance = (color?: SanityColorProps) => {
  if (color == undefined) {
    return 1;
  }
  return (0.299 * color.rgb.r + 0.587 * color.rgb.g + 0.114 * color.rgb.b) / 255;
}

const PortableBlock = (props: Props): JSX.Element => {
  const { heading, richText, image, cta, textWidth, pdf} = props;

  const isBackgroundLight = calculateBackgroundLuminance(image?.imageOverlay) < 0.5;
  const fontColor = isBackgroundLight ? 'primary.contrastText' : 'primary.text';
  const fontWeight = isBackgroundLight ? '700' : '500';

  return (
    <RootStyle>
      <MotionViewport >
        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            borderRadius: (theme) => theme.shape.borderRadius,
            overflow: 'hidden',
            Width : '100%',
            py: { xs: 2, md: 5 },
          }}>
          <Stack
            component={m.div}
            variants={varSlide().inUp}
            spacing={5}
            alignItems={{ xs: 'flex-start', md: 'center' }}
            justifyContent="flex-start"
            sx={{ color: fontColor, fontWeight: fontWeight, width: '100%' }}>
            {
              heading && (
              <Typography variant="h3" component={'div'} sx={{ fontWeight: 900, pt: {xs: 2, md: 5}}}>
                {heading}
              </Typography>)
            }
            <Box maxWidth={textWidth || 'lg'} >
              <PortableTextRender body={richText} />
            </Box>
            {
              cta &&
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 5 }}>
                <Button href={cta.link} passHref={true} component={Link} variant="contained" color="primary" size="large">{cta.text}</Button>
              </Box>
            }
          </Stack>
        </Container>
      </MotionViewport>
        <ImageBackground image={image} sx={{width: '100%'}} />
    </RootStyle>
  );
};

export default PortableBlock;

