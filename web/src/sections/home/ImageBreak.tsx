import { m } from 'framer-motion';
import { Box, Grid, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Image } from 'src/core/components';

import { urlFor } from 'integrations/sanityImage';
import { MotionViewport, varFade } from 'src/core/components/animate';

type Props = {
  sx?: any;
  title?: string;
  description?: string;
  image: any;
  background?: { hex: string };
};

const RootStyle = styled('section')(({ theme }) => ({
  paddingY: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    paddingY: theme.spacing(5),
  },
}));

const ImageBreak = ({ title, description, image, background, ...other }: Props) => {

  const { hex } = background || { hex: '#A69D88' };
  const { hotspot } = image;
  const imageBuilder = urlFor(image).withOptions(image.crop).focalPoint(hotspot?.x, hotspot?.y).fit('crop').crop('focalpoint');

  const masterImage = imageBuilder.width(1920).height(800).url();
  const desktopImage = imageBuilder.width(768).height(632).url();
  const tabletImage = imageBuilder.width(600).height(600).url();
  const mobileImage = imageBuilder.width(320).height(427).url();




  return (
  <MotionViewport>
    <RootStyle>
      <Stack sx={{ background: hex }}>
        <m.div variants={varFade().inUp}>
          <Image imageBuilder={imageBuilder} src={masterImage}
            {...other} />
        </m.div>
        <Grid item xs={12} sm={6} sx={{
          background: hex,
          px: { xs: 5, md: 30 },

        }}>
          <Box sx={{ my: 3, mx: 'auto', maxWidth: 750}}>
            <Typography variant="h2Ubuntu" component="h2" sx={{ py: 2, color: 'primary.contrastText'}}>
              <Box component={'span'}>
                {title}
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ color: 'primary.contrastText'}}>
              {description}
            </Typography>
          </Box>
        </Grid>

      </Stack>

    </RootStyle>
    </MotionViewport>
  );
}

export default ImageBreak;

