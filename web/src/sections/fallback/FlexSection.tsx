import { m } from 'framer-motion';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

import { HoopImage, PortableText, SanityImage } from 'src/core/components';
import Fallback from '../fallback';
import { Content } from 'src/@types/sanity';
import { MotionViewport, varFade } from 'src/core/components';

const RootStyle = styled('section')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
}));

type Props = {
  content?: Content[];
  _id?: string;
  _type: string;
  title?: string;
}

const getContentElement = (type: string | undefined, variants) => {
  if (!type) {
    return Fallback;
  }
    const Component = {
      'hoopImage': HoopImage,
      'richTextContent': PortableText,
      'imageContent': SanityImage,
    }[type] || Fallback;
  return Component
  }

const FlexSection = (props: Props) => {
  const { content, _type } = props;
  if (!content || !_type) {
    return null;
  }

  return (
    <RootStyle>
      <MotionViewport>
        <Container maxWidth="md" sx={{ py: 5 }}>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {content.map((item, index, array) => {
              let variants:any = varFade().inUp;
              if (index === 0) {
                variants = varFade().inLeft;
              } else if (index === array.length - 1) {
                variants = varFade().inRight;
              }

             console.log('item', item._type, item);

              const layout = Math.round(12 / array.length);
              const Content = getContentElement(item._type, variants);
              return (
                <Grid display="flex" justifyContent="center" alignItems="center" xs={layout} key={index}>
                  <m.div variants={variants}>
                  <Content {...item} />
    </m.div>
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

