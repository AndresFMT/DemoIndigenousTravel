import Head from 'next/head';
import Script from 'next/script';
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

      {/*<!-- Google tag (gtag.js) -->*/}
      <Script async id="gtm-load" src="https://www.googletagmanager.com/gtag/js?id=G-Q51RT4RSMW"></Script>
      <Script id="gtm-dataLayer-init">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Q51RT4RSMW');
      `}
      </Script>
    <Box ref={ref} >
      {children}
    </Box>
  </>
));

export default Page;
