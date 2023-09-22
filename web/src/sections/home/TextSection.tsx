import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Img from 'next/image';
import Link from 'next/link';

import {
  Typography,
  Container,
  Stack,
  Box,
  Button,
  Link as MuiLink,
} from '@mui/material'
import { styled } from '@mui/material/styles';
import SanityImage from 'src/core/components/SanityImage';
import { SanityEnrichedImageObject, SanityColorProps } from 'src/@types/sanity';
import ImageBackground from 'src/core/components/ImageBackground';
import PortableTextRender from 'src/core/components/PortableText';

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
  overflow: 'hidden',
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
      <ImageBackground image={image} />

      <Container maxWidth="lg">
        <Stack spacing={5} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="flex-start" sx={{ color: fontColor, fontWeight: fontWeight, width: '100%', py: { xs: 5, md: 5 }, px: { xs: 5, md: 15, lg: 20 } }}>
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            {heading}
          </Typography>
          <PortableTextRender richText={richText} />
          {
            cta &&
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 5 }}>
              <Button href={cta.link} passHref={true} component={Link} variant="contained" color="primary" size="large">{cta.text}</Button>
            </Box>
          }
        </Stack>
      </Container>
    </RootStyle>
  );
};

export default PortableBlock;

