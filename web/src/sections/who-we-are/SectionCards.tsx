import { useState } from 'react';
import { styled } from '@mui/material/styles';

import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/core/components/animate';

import {
  Container,
  Card,
  Typography,
  CardContent,
  Grid,
  CardActions,
  Button,
  Box,
} from '@mui/material';

import { HoopImage, PortableText } from 'src/core/components';
import CardModal from './CardModal';
import { Content } from 'src/@types/sanity';

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(5),
  },
}));

type ModalContent = {
  name: string;
  jobTitle?: string;
  bioText: Element;
}

type SectionCardProps = {
  type: string;
  content: Array<Content>;
  backgroundColor?: {
    hex: string;
  }
};

const SectionCards = ( { content, backgroundColor }:SectionCardProps ) => {
  const sectionBackground = backgroundColor ? backgroundColor.hex : '#fff';
  const sectionColor = backgroundColor ? 'primary.contrastText' : 'primary.burgundy';
  const sectionSX = {
    backgroundColor: sectionBackground,
    color: sectionColor
  };

  const [ modalState, setModalState ] = useState( { open: false, content: {name: '', bioText: '', jobTitle: ''} } );
  const showCardModal = ( modalContent: ModalContent ) => {
    setModalState( {
      open: true,
      content: modalContent
    } );
  };

  const closeCardModal = () => {
    setModalState( { ...modalState, open: false, bioText: <></> } );
  };

  return (
    <RootStyle sx={sectionSX}>
      <MotionViewport>
        <Container maxWidth="sm">
          <m.div variants={varFade().inUp}>
            <Grid container columns={{ xs: 1, sm: 1, md: 2 }} spacing={{sm: 2, md:4}} justifyContent='space-between'>

              {content.map( ( card, index ) => {
                const {
                  name,
                  jobTitle,
                  bio,
                  image,
                  size = 'lg'
                } = card;

                if (!image) {
                  console.warn('Section Cards: No image provided, skipping card')
                  return null;
                }

                if (!name|| !bio) {
                  console.warn('Section Cards: Missing title or text data, skipping card')
                  return null;
                }

                const bioText = (<PortableText body={bio} />);

                switch ( size ) {
                  case 'lg':

                    return (
                      <Box sx={{ display: 'flex', marginBottom: 1, flexGrow: 1 }} key={index}>
                        <Card sx={{width: "100%"}}>
                          <CardContent>
                            <Grid container spacing={0} columns={{ xs: 2, sm: 2, md: 2 }}>
                              <Grid item xs={1}>
                                <HoopImage image={image} />
                              </Grid>
                              <Grid item xs={1}>
                                <Box sx={{marginLeft: 8}}>
                                  <Typography variant='h5' color="text.primary" gutterBottom>
                                    {name}
                                  </Typography>


                                  <Box sx={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 6,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    color: 'text.primary'
                                  }}  >
                                    {bioText}
                                  </Box>

                                  <CardActions sx={{paddingX: 0}}>
                                    <Button size='small' onClick={() => showCardModal({ name, bioText, jobTitle})} >Read More &gt;</Button>
                                  </CardActions>
                                </Box>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Box>
                    );

                  case 'sm':

                    return (
                      <Card sx={{ minWidth: 275, maxWidth: 325, margin: '10px 0px' }} key={index} raised>
                        <CardContent>
                          <Grid container direction='column' spacing={0}>
                            <Grid item sx={{ margin: '0 auto' }}>
                              <HoopImage {...image} />
                            </Grid>
                            <Grid item>
                              <Box sx={{ marginTop: 2 }}>
                                <Typography variant='subtitle1' color="text.primary" gutterBottom>
                                  {name}
                                </Typography>

                                <CardActions sx={{padding: 0}}>
                                  <Button size='small' onClick={() => showCardModal({ name, bioText, jobTitle})}>Read More &gt;</Button>
                                </CardActions>
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    );
                }
              })}

            </Grid>
          </m.div>
        </Container>
      </MotionViewport>

      <CardModal { ...modalState } handleClose={closeCardModal} />
    </RootStyle>
  );
};

export default SectionCards;

