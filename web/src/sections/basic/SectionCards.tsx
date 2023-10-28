import { ReactElement, useState } from 'react';
import { styled } from '@mui/material/styles';

import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/core/components/animate';

import {
  Container,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { HoopImage, PortableText, CardModal } from 'src/core/components';

import { HomepageContent as HomepageContentType } from "src/@types/sanity";

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
  bioText: ReactElement | string;
}

const SectionBioCards = ({ content}: HomepageContentType) => {
  if (!content) {
    console.warn('Section Cards: No content provided, skipping section')
    return null;
  }

  const [modalState, setModalState] = useState<{ open: boolean, content: ModalContent }>({ open: false, content: { name: '', bioText: '', jobTitle: '' } });
  const showCardModal = (modalContent: ModalContent) => {
    setModalState({
      open: true,
      content: modalContent
    });
  };

  const closeCardModal = () => {
    setModalState({ ...modalState, open: false });
  };

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container columns={{ xs: 1, sm: 1, md: 2 }} spacing={{ sm: 2, md: 4 }} justifyContent='space-between'>

          {content.map((card, index) => {
            const {
              name,
              jobTitle,
              bio,
              image,
            } = card;

            if (!image) {
              console.warn('Section Cards: No image provided, skipping card')
              return null;
            }

            if (!name || !bio) {
              console.warn('Section Cards: Missing title or text data, skipping card')
              return null;
            }

            const isOdd = index % 2 === 0;
            const imagePosition = isOdd ? 1 : 2;
            const bioPosition = isOdd ? 2 : 1;
            const variants = [varFade().inUp, varFade().inLeft, varFade().inRight];


            const bioText = (<PortableText body={bio} />);

            return (
              <Box sx={{ display: 'flex', marginBottom: 1, flexGrow: 1 }} key={`${name}${index}`}>
                <MotionViewport>
                  <Card >
                    <CardContent>
                      <Grid container direction={'row'} spacing={5} columns={{ xs: 2, sm: 4, md: 8}}>

                        <Grid component={m.div} variants={variants[imagePosition]} xs={2} md={4} order={imagePosition} direction={'row'}>
                          <HoopImage image={image} />
                        </Grid>
                        <Grid component={m.div} variants={variants[bioPosition]} xs={2} md={4} order={bioPosition} direction={'column'}>
                          <Typography variant='h3' color="text.primary" >
                            {name}
                          </Typography>
                          <Typography variant='subtitle1' color="text.secondary" gutterBottom>
                            {jobTitle}
                          </Typography>


                          <Box sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            lineClamp: 4,
                            WebkitBoxOrient: 'vertical',
                            width: '60%',
                            maxHeight: '200px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            color: 'text.primary',
                          }}  >
                            {bioText}
                          </Box>

                          <CardActions sx={{ paddingX: 0 }}>
                            <Button size='small' onClick={() => showCardModal({ name, bioText, jobTitle })} >Read More &gt;</Button>
                          </CardActions>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </MotionViewport>
              </Box>
            );

          })}

        </Grid>
      </Container>

      <CardModal {...modalState} handleClose={closeCardModal} />
    </RootStyle>
  );
};

export default SectionBioCards;

