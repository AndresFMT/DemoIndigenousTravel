import {  LazyLoadImageProps } from 'react-lazy-load-image-component';
// @mui
import { Theme } from '@mui/material/styles';
import { Box, BoxProps, SxProps } from '@mui/material';
import Image from 'next/image';

// TODO: implement urlFor to handle imageBuilder and take optional values to change ratio
// ----------------------------------------------------------------------

export type ImageRatio = '4/3' | '3/4' | '6/4' | '4/6' | '16/9' | '9/16' | '21/9' | '9/21' | '1/1';

type IProps = BoxProps & LazyLoadImageProps;

interface Props extends IProps {
  sx?: SxProps<Theme>;
  ratio?: ImageRatio;
  disabledEffect?: boolean;
  imageBuilder: any;
}

export default function SanityImage({
  ratio,
  disabledEffect = false,
  effect = 'blur',
  sx,
  imageBuilder,
  ...other
}: Props) {

  const masterImage = imageBuilder.width(1920).height(900).url();
  const desktopImage = imageBuilder.width(768).height(632).url();
  const tabletImage = imageBuilder.width(600).height(600).url();
  const mobileImage = imageBuilder.width(320).height(427).url();

  const srcset = [`${mobileImage} 320w`, `${tabletImage} 680w`, `${desktopImage} 768w`, `${masterImage} 1080w`]

  if (ratio) {
    return (
      <Box
        component="span"
        sx={{
          width: 1,
          height: 1,
          lineHeight: 1,
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
            position: 'absolute',
            backgroundSize: 'cover !important',
          },
          ...sx,
        }}
      >
        <picture>
          {srcset.map((src, index) => {
            const [url, media] = src.split(' ');
            return (
              <source
                key={`${media}-${index}`}
                media={`(min-width: ${media})`}
                srcSet={url}
              />
            )
          })}
          <Image
            src={mobileImage}
            alt={other.alt || 'unbranded image'}
          />
        </picture>
      </Box>
    );
  }

  return (
    <Box
      component="span"
      sx={{
        width: 1,
        height: 1,
        lineHeight: 0,
        display: 'block',
        overflow: 'hidden',
        backgroundSize: 'cover !important',
        ...sx,
      }}
    >

      <picture
        style={{ width: '100%' }}>
        {srcset.map((src, index) => {
          const [url, media] = src.split(' ');
          return (
            <source
              key={`${media}-${index}`}
              media={`(min-width: ${media})`}
              srcSet={url}
            />
          )
        })}
        <Image
          src={mobileImage}
          alt={other.alt || 'unbranded image'}
        />
      </picture>
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
