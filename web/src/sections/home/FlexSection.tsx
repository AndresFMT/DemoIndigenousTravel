import { Container, Box } from '@mui/material';
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

  const paddingY = hasImage ? { xs: 4, md: 5 } : { xs: 4, md:  0};
  const overflow = hasImage ? 'hidden' : 'visible';
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ py: paddingY, overflow: overflow, position: 'relative', borderRadius: {'xs':0 ,'md':5} }}>
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          sx={{ color: textColor, px: {xs: 3, md: 5},fontWeight: fontWeight, textAlign: { xs: 'center', md: 'left' }}}
          justifyContent="space-between"
        >
          {content.map((item, index, array) => {
            const layout = Math.round(12 / array.length);
            const Content = getContentElement(item._type);
            return (
              <Grid container alignContent={'center'} xs={12} md={6} lg={5} key={index}>
                { index == 0 && !hasImage && <Box
                  sx={{
                    mb: 2,
                    width: 24,
                    height: 3,
                    borderRadius: 3,
                    bgcolor: 'primary.main',
                    mx: { xs: 'auto', md: 0 },
                  }}
                />}
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

