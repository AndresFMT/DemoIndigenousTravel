import { m } from 'framer-motion';
import { Container, BoxProps} from '@mui/material';
import { LazyLoadImageProps } from 'react-lazy-load-image-component';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

import { HoopImage, MotionViewport, PortableText, SanityImage, varFade } from 'src/core/components';
import Fallback from '../fallback';
import { Section as SectionProps } from 'src/@types/sanity';
import { getBackgroundLuminance } from 'src/utils/getBackgroundLuminance';

const RootStyle = styled('section')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
}));

type IProps = BoxProps & LazyLoadImageProps;

interface ImageOverrideProps extends IProps {
  image?: any;
  sx?: any;
  imageObjectFit?: any;
  fullWidth?: boolean;
}

const ImageOverride = (props:ImageOverrideProps ) => {
  return (
    <SanityImage {...props} sx={{top: 0, bottom: 0, height: '100%'}}/>
  )
}

const getContentElement = (type: string | undefined) => {
  if (!type) {
    return Fallback;
  }
  return {
    'hoopImage': HoopImage,
    'richTextContent': PortableText,
    'imageContent': ImageOverride,
  }[type] || Fallback;
}

const FlexSection = (props: SectionProps) => {
  const { content, _type, image } = props;
  if (!content || !_type) {
    return null;
  }

  const isBackgroundDark = getBackgroundLuminance( image?.imageOverlay);
  const textColor = isBackgroundDark ? 'primary.contrastText' : 'primary.text';
  const fontWeight = isBackgroundDark ? 'fontWeightBold': 'fontWeightRegular';

  return (
    <RootStyle>
      <MotionViewport>
        <Container maxWidth="md" sx={{ py: 5 }}>
          <Grid container spacing={3} sx={{ mt: 2, color: textColor, fontWeight: fontWeight }}>
            {content.map((item, index, array) => {
              let variants: any = varFade().inUp;
              if (index === 0) {
                variants = varFade().inLeft;
              } else if (index === array.length - 1) {
                variants = varFade().inRight;
              }
              const layout = Math.round(12 / array.length);
              const Content = getContentElement(item._type);
              return (
                <Grid component={m.div} variants={variants} display="flex" justifyContent="center" alignItems="center" xs={layout} key={index}>
                  <Content {...item} />
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </MotionViewport>
    </RootStyle>
  )
}

export default FlexSection;

