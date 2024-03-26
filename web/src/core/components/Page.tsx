import Head from 'next/head';
import Script from 'next/script';
import { forwardRef } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from 'src/config';
// ----------------------------------------------------------------------
type PageProps = {
  children: React.ReactNode;
  meta?: string;
  title: string;
};

const BoxStyle = styled(Box)(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  display: 'grid',
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
    gap: theme.spacing(10),

  },
}));

const Page = forwardRef<HTMLDivElement, PageProps>(({ children, meta, title }, ref) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="description" content={meta} />

      {/*<!-- Google tag (gtag.js) -->*/}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WCHFVCKNFZ"></Script>
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-WCHFVCKNFZ');
      `}
      </Script>

      {/*<!-- Google tag (gtag.js) -->*/}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XHXHMKDPOL"></Script>
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XHXHMKDPOL');
      `}
      </Script>

    </Head>

      {/*<!-- Google tag (gtag.js) -->*/}
      <Script async id="gtm-load" src="https://www.googletagmanager.com/gtag/js?id=G-WCHFVCKNFZ"></Script>
      <Script id="gtm-dataLayer-init">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-WCHFVCKNFZ');
      `}
      </Script>
      {/*<!-- Google tag (gtag.js) -->*/}
      <Script async id="gtm-load" src="https://www.googletagmanager.com/gtag/js?id=G-XHXHMKDPOL"></Script>
      <Script id="gtm-dataLayer-init">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XHXHMKDPOL');
      `}
      </Script>
    <BoxStyle ref={ref} >
      {children}
    </BoxStyle>
  </>
));

export default Page;
