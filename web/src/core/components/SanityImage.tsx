import { LazyLoadImageProps } from 'react-lazy-load-image-component';
import Image from 'next/image';
// @mui
import { Box, BoxProps} from '@mui/material';

import imageLoader, { urlFor } from 'integrations/sanity.image';

type IProps = BoxProps & LazyLoadImageProps;

interface Props extends IProps {
  image?: any;
}

export default function SanityImage({ image }: Props) {
  if (image == undefined) {
    return null;
  }

  const { x: fpx, y: fpy } = image.hotspot || { x: 0.5, y: 0.5 };

  return (
    <Box component={"div"} style={{ height: '100%', position: 'relative' }}>
      <Image
        src={urlFor(image).focalPoint(fpx, fpy).url()}
        loader={imageLoader}
        alt={image.asset.alt || 'hero section image'}
        fill
        placeholder={image.asset.metadata.lqip}
        style={{ objectFit: 'cover' }}
      />
    </Box>

  );
}

