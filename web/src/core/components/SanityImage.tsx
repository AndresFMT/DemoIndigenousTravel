import {  LazyLoadImageProps } from 'react-lazy-load-image-component';
// @mui
import { Theme } from '@mui/material/styles';
import { Box, BoxProps, SxProps } from '@mui/material';
import Image from 'next/image';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';

import { sanityImageProp } from 'integrations/sanityImage';
// ----------------------------------------------------------------------

export type ImageRatio = '4/3' | '3/4' | '6/4' | '4/6' | '16/9' | '9/16' | '21/9' | '9/21' | '1/1';

interface SanityMetaDataObject extends SanityImageObject {
  asset: {
    metadata: {
    lqip: string;
    };
  };
}

type IProps = BoxProps & LazyLoadImageProps;

interface Props extends IProps {
  sx?: SxProps<Theme>;
  ratio?: ImageRatio;
  disabledEffect?: boolean;
  image: SanityMetaDataObject;
}

export default function SanityImage({
  ratio,
  disabledEffect = false,
  effect = 'blur',
  sx,
  image,
  ...other
}: Props) {

  const imageProps = sanityImageProp(image);


  if (ratio) {
    return (
      <Box
        component="span"
        sx={{
          lineHeight: 1,
      width: '100%',
      height: '100%',
          display: 'block',
          overflow: 'hidden',
          position: 'relative',
          background: 'black',

          pt: getRatio(ratio),
          '& .wrapper': {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            lineHeight: 0,
            backgroundSize: 'cover !important',
          },
          ...sx,
        }}
      >
          <Image
            {...imageProps}
            style={{ width: '100%', height: 'auto' }} // layout="responsive" prior to Next 13.0.0
            sizes="(max-width: 800px) 100vw, 800px"
            alt={other.alt || 'unbranded image'}
            placeholder="blur"
            blurDataURL={image.asset.metadata.lqip}
          />
      </Box>
    );
  }

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
        <Image
          {...imageProps}
          style={{ width: '100%', height: 'auto' }} // layout="responsive" prior to Next 13.0.0
			sizes="(max-width: 800px) 100vw, 800px"
          alt={other.alt || 'hero section image'}
          placeholder="blur"
			blurDataURL={image.asset.metadata.lqip}
        />
    </Box>
  );
}

// ----------------------------------------------------------------------

function getRatio(ratio = '1/1') {
  return {
    '4/3': 'calc(100% / 4 * 3)',
    '3/4': 'calc(100% / 3 * 4)',
    '6/4': 'calc(100% / 6 * 4)',
    '4/6': 'calc(100% / 4 * 6)',
    '16/9': 'calc(100% / 16 * 9)',
    '9/16': 'calc(100% / 9 * 16)',
    '21/9': 'calc(100% / 21 * 9)',
    '9/21': 'calc(100% / 9 * 21)',
    '1/1': '100%',
  }[ratio];
}
