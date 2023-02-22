
import { styled } from '@mui/material/styles';

import Hoop from 'src/core/components/Hoop';
import HoopButton from 'src/core/components/HoopButton';

import { Container, Grid, Button } from '@mui/material';

const RootStye = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    height: '100vh',
  },
}));

export default function HomeHoop(props: any) {
  const { heading, kicker, imageUrl } = props;

  return (
    <RootStye sx={{
      height: 1,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
    >
      <Container sx={{ height: 1, }} >
        <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
          <HoopButton>
            Explore
          </HoopButton>
        </Grid>
      </Container>
    </RootStye>
  );
}
