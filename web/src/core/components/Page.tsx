import Head from 'next/head';
import { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, meta, title }:any, ref) => (
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
