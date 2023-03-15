import { LazyLoadImageProps } from 'react-lazy-load-image-component';
import { SanityEnrichedImageObject } from 'src/@types/sanity';
// @mui
import { Theme } from '@mui/material/styles';
import { Box, BoxProps, SxProps } from '@mui/material';
import Img from 'next/image';

import { urlFor } from 'integrations/sanityImage';

// ----------------------------------------------------------------------

type IProps = BoxProps & LazyLoadImageProps;


interface Props extends IProps {
  sx?: SxProps<Theme>;
  disabledEffect?: boolean;
  image: SanityEnrichedImageObject;
}

/**
 * The properties of a hero image should stay relatively the same whenver used. Don't use this component for anything else.
 */
export default function SanityHeroImage({
  disabledEffect = false,
  effect = 'blur',
  sx,
  image,
  ...other
}: Props) {

  const imageWidth = Math.round(image.asset.metadata.dimensions.width * (image.hotspot?.width || 1));
  const imageHeight = Math.round(imageWidth * 9 / 16);
  const sanityImageUrl = urlFor(image).height(imageHeight).url();

  return (
    <Box
      component="span"
      sx={{
        width: '100%',
        height: '100%',
        lineHeight: 0,
        display: 'block',
        overflow: 'hidden',
        backgroundSize: 'cover !important',
        ...sx,
      }}
    >
      <Img
        src={sanityImageUrl}
        style={{ width: '100%', height: 'auto' }}
        width={imageWidth}
        height={imageHeight}
        sizes="(max-width: 800px) 100vw, 800px"
        alt={other.alt || 'hero section image'}
        placeholder="blur"
        blurDataURL={`url(${image.asset.metadata.lqip})`}
        unoptimized
      />
    </Box>
  );
}

