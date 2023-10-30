import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { HoopImage, PortableText, SanityImage, ImageBackground} from 'src/core/components';
import Fallback from '../fallback';
import { Content } from 'src/@types/sanity';

import { getBackgroundLuminance } from 'src/utils/getBackgroundLuminance';

import RootStyle from './RootStyle';

type Props = {
  content?: Content[];
  _id?: string;
  _type: string;
  title?: string;
  image?: any;
}

const getContentElement = (type: string| undefined) => {
  if (!type) {
    return Fallback;
  }
  return {
    'hoopImage': HoopImage,
    'richTextContent': PortableText,
    'imageContent': SanityImage,
  }[type] || Fallback;
}

const FlexSection = (props: Props) => {
  const { content, _type, image } = props;
  if (!content || !_type) {
    return null;
  }

  const isBackgroundDark = getBackgroundLuminance( image?.imageOverlay) < 0.5;
  const textColor = isBackgroundDark ? 'primary.contrastText' : 'primary.text';
  const fontWeight = isBackgroundDark ? '700': '500';
  const hasImage = image && image.asset && image.asset.url;

  const paddingY = hasImage ? { xs: 2, md: 5 } : { xs: 1, md:  0};
  const overflow = hasImage ? 'hidden' : 'visible';
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ py: paddingY, overflow: overflow, position: 'relative', borderRadius: (theme)=> theme.shape.borderRadius }}>
        <Grid container spacing={3} sx={{ color: textColor, fontWeight: fontWeight}}>
          {content.map((item, index, array) => {
            const layout = Math.round(12 / array.length);
            const Content = getContentElement(item._type);
            return (
              <Grid display="flex" justifyContent="center" alignItems="center" xs={layout} key={index}>
                <Content {...item} />
              </Grid>
            )
          })}
        </Grid>
      <ImageBackground image={image}/>
      </Container>
    </RootStyle>
  )
}

export default FlexSection;

