import dynamic from 'next/dynamic';

import Layout from 'src/core/layouts/Layout';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const ContactMap = dynamic(() => import('src/core/components/static-map'), { ssr: false });
import Iconify from 'src/core/components/iconify';
import { Page } from 'src/core/components';

import { ContactForm, OfficeInfo } from 'src/sections/contact';


// ----------------------------------------------------------------------

export default function ContactUsPage() {
  return (
    <Page title={"Contact Us"}>
      <OfficeInfo />
      <ContactForm />
    </Page>
  );
}

ContactUsPage.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
}

