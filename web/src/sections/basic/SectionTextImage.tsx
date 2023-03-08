import { m } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Stack} from '@mui/material';

import { MotionViewport, varFade } from 'src/core/components/animate';
import { HoopImage } from 'src/core/components';

import { urlFor } from 'integrations/sanityImage';

import { Section, ReducedContent, HoopImage as HoopImageType} from 'src/@types/sanity';

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(5),
  },
}));

const SectionTextImage: React.FC<Section> = ({content, backgroundColor}) => {

  const reducedContent: ReducedContent = content.reduce((acc, cur) => {
    if (cur.type == 'hoopImage' ) {
      if  (!acc.hoopImages) {
        acc.hoopImages = [];
      }
      acc.hoopImages.push(cur as HoopImageType);
    } else {
      acc = { ...acc, ...cur };
    }
    return acc;
  }, {} as ReducedContent);

  const image = reducedContent.image;


  const backgroundImageUrl = image ? urlFor(image).url() : null;
  const sectionBackground = backgroundColor ? backgroundColor.hex : 'primary.main';
  const sectionColor = backgroundColor ? 'primary.contrastText' : 'primary.burgundy';

  const sectionSX = {
    backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : null,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: sectionBackground,
    color: sectionColor,
  };

   const {
    heading,
    headingColor,
    text,
    textColor,
    hoopImages,
  } = reducedContent;

  return (
    <RootStyle sx = { sectionSX } >
      <MotionViewport>
        <Container maxWidth="lg">
          <m.div variants={varFade().inUp}>
            <Box sx={{ my: 3, mx: 'auto', maxWidth: 750 }}>
              <Typography variant="h2" sx={{ py: 2, color: headingColor }}>
                {heading}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: '800', color: textColor}} >
                {text}
              </Typography>
            </Box>
          </m.div>
          <Stack direction="row" spacing={12} sx={{ justifyContent: 'center', my: 5}}>
            { hoopImages && hoopImages.map((hoopimage, index) => {
            if (!hoopimage.image) return null;
              return (
                <HoopImage key={`hi${index}`} {...hoopimage} />
              )
            })}
          </Stack>
        </Container>
      </MotionViewport>
    </RootStyle >
  );
};

export default SectionTextImage;

