import { LazyLoadImageProps } from 'react-lazy-load-image-component';
import Img from 'next/image';

import { SanityEnrichedImageObject } from 'src/@types/sanity';
// @mui
import { Theme } from '@mui/material/styles';
import { Box, BoxProps, SxProps } from '@mui/material';

import imageLoader, {urlFor} from 'integrations/sanity.image';

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

  if (image === null || image.asset === null) {
    return null;
  }

  const { x: fpx, y: fpy } = image.hotspot || { x: 0.5, y: 0.5 };
  const sanityImageUrl = urlFor(image).focalPoint(fpx, fpy)

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
        src={sanityImageUrl.url()}
        fill={true}
        loader={imageLoader}
        alt={other.alt || 'hero section image'}
        placeholder={image.asset.metadata.lqip}
        style={{objectFit: 'cover'}}
      />
    </Box>
  );
}

