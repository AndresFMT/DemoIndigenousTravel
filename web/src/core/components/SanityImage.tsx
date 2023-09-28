import { LazyLoadImageProps } from 'react-lazy-load-image-component';
import Image from 'next/image';
// @mui
import { styled } from '@mui/material/styles';
import { Box, BoxProps} from '@mui/material';

import imageLoader, { urlFor, noFormatImageLoader } from 'integrations/sanity.image';

type IProps = BoxProps & LazyLoadImageProps;

interface Props extends IProps {
  image?: any;
  sx?: any;
  imageObjectFit?: any;
  fullWidth?: boolean;
}

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
}));

export default function SanityImage({ image, sx, fullWidth}: Props) {
  if (image == undefined) {
    return null;
  }

  const urlBuilder = urlFor(image);
  if ( image.hotspot ) {
    urlBuilder.focalPoint(image.hotspot.x, image.hotspot.y);
  }

  const loader = !!fullWidth ? imageLoader : noFormatImageLoader;
  const objectFit = !!fullWidth ? 'cover' : 'contain';

  return (
    <ImageContainer component={"div"} sx={sx}>
      <Image
        src={urlBuilder.url()}
        loader={loader}
        alt={image.asset.alt || 'hero section image'}
        fill
        placeholder={image.asset.metadata.lqip}
        style={{ objectFit: objectFit }}
      />
    </ImageContainer>

  );
}

