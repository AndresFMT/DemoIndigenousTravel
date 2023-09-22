import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

import { HoopImage, PortableText, SanityImage } from 'src/core/components';
import Fallback from '../fallback';
import { Content } from 'src/@types/sanity';

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
  _type?: string;
  title?: string;
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
  const { content } = props;
  if (!content) {
    return null;
  }

  return (
    <RootStyle>
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Grid container spacing={3} sx={{ mt: 2 }}>
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
      </Container>
    </RootStyle>
  )
}

export default FlexSection;

