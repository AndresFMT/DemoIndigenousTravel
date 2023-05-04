import { m } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { MotionViewport, varFade } from 'src/core/components/animate';
import { Box, Container, Typography } from '@mui/material';
import { Section } from 'src/@types/sanity';
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

const SectionCards: React.FC<Section> = ( { content, backgroundColor } ) => {
  console.log( "cards content", content );

  const sectionBackground = backgroundColor ? backgroundColor.hex : '#fff';
  const sectionColor = backgroundColor ? 'primary.contrastText' : 'primary.burgundy';
  const sectionSX = {
    backgroundColor: sectionBackground,
    color: sectionColor,
  };

  return (
    <RootStyle sx={sectionSX}>
      <MotionViewport>
        <Container maxWidth="lg">
          <m.div variants={varFade().inUp}>

            <Typography variant="body1" sx={{ fontWeight: '800', color: '000'}} >
              {content[0].text}
            </Typography>

          </m.div>
        </Container>
      </MotionViewport>
    </RootStyle>
  );
};

export default SectionCards;

