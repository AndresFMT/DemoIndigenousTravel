import Head from 'next/head';
import { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------
type PageProps = {
  children: React.ReactNode;
  meta?: React.ReactNode;
  title: string;
};

const Page = forwardRef<HTMLDivElement, PageProps>(({ children, meta, title }, ref) => (
  <>
    <Head>
      <title>{`${title} | ITM`}</title>
      {meta}
    </Head>

    <Box ref={ref} >
      {children}
    </Box>
  </>
));

export default Page;
