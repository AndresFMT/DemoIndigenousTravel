import { m } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { MotionViewport, varFade } from 'src/core/components/animate';
import {
  Container,
  Card,
  Typography,
  CardContent,
  Grid,
  CardActions,
  Button
} from '@mui/material';
import { Section } from 'src/@types/sanity';
import Image from 'next/image';
import { Box } from '@mui/system';

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
    color: sectionColor
  };

  return (
    <RootStyle sx={sectionSX}>
      <MotionViewport>
        <Container maxWidth="lg">
          <m.div variants={varFade().inUp}>

            {content.map( ( card, index ) => {
              const {
                title,
                text
              } = card;

              // @TODO: split into large card and small
              return (
                <Card sx={{ minWidth: 275, maxWidth: 650, margin: '0 auto' }} key={index}>
                  <CardContent>
                    <Grid container spacing={0}>
                      <Grid item>
                        <Image src="https://placekitten.com/200" width={200} height={200} />
                      </Grid>
                      <Grid item>
                        <Box sx={{marginLeft: 5}}>
                          <Typography variant='h3' color="text.primary" gutterBottom>
                            {title}
                          </Typography>

                          <Typography variant='body1' color="text.primary" gutterBottom>
                            {text}
                          </Typography>

                          <CardActions sx={{paddingX: 0}}>
                            <Button size='small'>Read More &gt;</Button>
                          </CardActions>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              );
            })}

          </m.div>
        </Container>
      </MotionViewport>
    </RootStyle>
  );
};

export default SectionCards;

