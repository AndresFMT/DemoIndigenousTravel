import { m } from 'framer-motion';
import { LazyLoadImageProps } from 'react-lazy-load-image-component';
import Image from 'next/image';
// @mui
import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

import imageLoader, { urlFor, noFormatImageLoader } from 'integrations/sanity.image';

type IProps = BoxProps & LazyLoadImageProps;

interface Props extends IProps {
  image?: any;
  sx?: any;
  imageObjectFit?: any;
  selected?: boolean;
}

const ImageContainer = styled(Box)(() => ({
  position: 'absolute',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'end',
  bottom: '0',
  width: '100%',
  height: '100%',
  zIndex: -1,
}));

export default function ListImage({ image, sx }: Props) {
  if (image == undefined) {
    return null;
  }

  const urlBuilder = urlFor(image);
  if (image.hotspot) {
    urlBuilder.focalPoint(image.hotspot.x, image.hotspot.y);
  }


  return (
    <ImageContainer sx={sx} >
      <Box component={m.div}
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '80%',
          height: '100%',
          zIndex: 101,
          background: 'linear-gradient(90deg, rgba(97, 0, 0, 1) 0%, rgba(97, 20, 20, 0.6) 25%, rgba(181,172,172,0.2) 100%)'
        }} />
      <Box component={m.div}
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: 101,
          background: 'linear-gradient(150deg, rgba(97, 0, 0, 0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(203,128,14,0.1) 100%)'
        }} />
      <Image
        src={urlBuilder.url()}
        loader={noFormatImageLoader}
        width={500}
        height={200}
        alt={image.asset.alt || 'list item operator primary image'}
        placeholder={image.asset.metadata.lqip}
        style={{ objectFit: 'cover', zIndex: 2, width: '80%'  }}

      />
    </ImageContainer>

  );
}

