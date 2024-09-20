import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { Image, NewAccountRequestForm } from 'src/core/components';
import { useResponsive } from 'src/hooks';

import ContactRequestNewForm from 'src/core/components/ContactRequestNewForm';

// ----------------------------------------------------------------------


export default function ContactForm() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          {mdUp && (
            <Grid xs={12} md={6} lg={5}>
              <Image
                alt="contact"
                src="/assets/illustrations/illustration_courses_contact.svg"
                sx={{ maxWidth: 260 }}
              />
            </Grid>
          )}

          <Grid xs={12} md={12} lg={12}>
            <Stack
              spacing={2}
              sx={{
                mb: 5,
                textAlign: { xs: 'center', md: 'center' },
              }}
            >
              <Typography variant="h3">Drop Us A Line</Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                We normally respond within 2 business days
              </Typography>
            </Stack>
          </Grid>    
        </Grid>
        <div className="min-h-10 w-full">
          <ContactRequestNewForm />
        </div>
      </Container>
    </Box>
  );
}
