import React  from 'react';

import {
  Typography,
  Container,
  Stack,
} from '@mui/material'

import { styled } from '@mui/material/styles';
import { PortableText, ImageBackground } from 'src/core/components';
import { SanityEnrichedImageObject, SanityColorProps} from 'src/@types/sanity';

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
  const { heading, richText, image} = props;

  const isBackgroundLight = calculateBackgroundLuminance(image?.imageOverlay) < 0.5;
  const fontColor = isBackgroundLight ?  'primary.contrastText': 'primary.text' ;
  const fontWeight = isBackgroundLight ? '700' : '500';

  return (
    <RootStyle>
      <ImageBackground image={image} />
      <Container maxWidth="lg">
        <Stack spacing={5} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="flex-start" sx={{ color: fontColor, fontWeight: fontWeight, width: '100%', py: { xs: 5, md: 5}, px: { xs: 5,md: 15, lg: 30}}}>
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            {heading}
          </Typography>
          <PortableText richText={richText} />
        </Stack>
      </Container>
    </RootStyle>
  );
};

export default PortableBlock;

