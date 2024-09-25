import dynamic from 'next/dynamic';
import { useContext } from 'react';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//Static Section
const ContactMap = dynamic(() => import('src/core/components/static-map'), { ssr: false });
import Iconify from 'src/core/components/iconify';
import { SiteSettingsContext } from 'src/contexts/SiteSettingsContext';

export const _offices = ['Winnipeg'].map((office, index) => ({
  id: '1lk34-12kjh20-1kj2h3kj',
  country: office,
  address: '100 – 300 Alpine Way, Headingley, MB R4H 0E1',
  phoneNumber: '21042304395',
  email: 'email@email.com',
  photo: `/static/contact/${index + 1}.jpg`,
  lat: 49.88531957670153,
  lng: -97.17762828465725,
}));

const OfficeInfo = () => {

  const {
    facebookLink,
    twitterLink,
    linkedinLink,
    instagramLink,
  } = useContext( SiteSettingsContext );

  const socialDefaults = [
  {
    value: 'facebook',
    label: 'FaceBook',
    icon: 'carbon:logo-facebook',
    color: '#1877F2',
    link: facebookLink || '#'
  },
  {
    value: 'instagram',
    label: 'Instagram',
    icon: 'carbon:logo-instagram',
    color: '#E02D69',
    link: instagramLink || '#'
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: 'carbon:logo-linkedin',
    color: '#007EBB',
    link: linkedinLink || '#',
  },
  {
    value: 'twitter',
    label: 'Twitter',
    icon: 'carbon:logo-twitter',
    color: '#00AAEC',
    link: twitterLink || '#'
  }
  ];
  return (
    <Container
      sx={{
        pt: { xs: 5, md: 5 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
        <Grid xs={12} md={6} lg={4}>
          <Typography
            variant="h2"
            sx={{
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Get In Touch
          </Typography>

          <Stack
            spacing={3}
            alignItems={{ xs: 'center', md: 'flex-start' }}
          >
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:email" width={24} sx={{ mr: 1 }} /> Email
              </Stack>

              <Link color="inherit" variant="body2" href="mailto:info@indigenoustourismmanitoba.ca">
                info@indigenoustourismmanitoba.ca
              </Link>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:location" width={24} sx={{ mr: 1 }} /> Address
              </Stack>

              <Typography variant="body2">
                100 - 300 Alpine Way, Headingley, MB, R4H 0E1
              </Typography>
            </Stack>

            <Divider sx={{ borderStyle: 'dashed', width: 1 }} />

            <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="overline">Follow Us</Typography>
              <Stack direction="row">
                {socialDefaults.map((social) => (
                  <IconButton key={social.value} color="inherit" href={social.link}>
                    <Iconify icon={social.icon} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid xs={12} md={6} lg={7}>
          <ContactMap offices={_offices} sx={{ borderRadius: 2 }} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default OfficeInfo;
