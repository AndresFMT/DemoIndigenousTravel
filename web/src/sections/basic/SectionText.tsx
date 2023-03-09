import { m } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';

import { MotionViewport, varFade } from 'src/core/components/animate';
import { urlFor } from 'integrations/sanityImage';

import { Section, ReducedContent } from 'src/@types/sanity';
import Image from 'next/image';

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(5),
  },
}));


const SectionText: React.FC<Section> = ({content, backgroundColor}) => {

  const reducedContent: ReducedContent = content.reduce((acc, cur) => {
    acc = { ...acc, ...cur };
    return acc;
  }, {} as ReducedContent);

  const image = reducedContent.image;
  const imageBuilder = image ? urlFor(image).auto('format').fit('max') : null;

  const sectionBackground = backgroundColor ? backgroundColor.hex : '#fff';
  const sectionColor = backgroundColor ? 'primary.contrastText' : 'primary.burgundy';

  const sectionSX = {
    backgroundColor: sectionBackground,
    color: sectionColor,
  };


  const {
    heading,
    headingColor,
    text,
    textColor,
  } = reducedContent;

  return (
    <RootStyle sx = { sectionSX } >
      <MotionViewport>
        <Container maxWidth="lg">
          <m.div variants={varFade().inUp}>
            <Box sx={{ my: 10, mx: 'auto', maxWidth: 750 , position: 'relative'}}>
              <Box sx={{ width: '160px', height: '200px', position: 'absolute', display: 'inline-block', top: 0, right: '50%', transform: 'translateY(-100%)' }}>
                <Image src="/bead_graphic.svg" alt="ribbon" />
              </Box>
            </Box>
            <Box sx={{ my: 3, mx: 'auto', maxWidth: 750, color: 'text.primary'}}>
              <Typography variant="h2" sx={{ py: 2, color: headingColor?.hex }}>
                {heading}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: '800', color: textColor?.hex}} >
                {text}
              </Typography>
            </Box>
          </m.div>
        </Container>
      </MotionViewport>
    </RootStyle >
  );
};

export default SectionText;
