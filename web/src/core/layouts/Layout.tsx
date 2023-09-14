import Head from "next/head"
import dynamic from 'next/dynamic';
import React, {ReactNode} from "react"

import { BlitzLayout } from "@blitzjs/next"

const Header = dynamic(() => import('./header/Header'), { ssr: false });
const HeaderSimple = dynamic(() => import('./header/HeaderSimple'), { ssr: false });
const Footer = dynamic(() => import('./footer/Footer'), { ssr: false });
const FooterSimple = dynamic(() => import('./footer/FooterSimple'), { ssr: false });

type LayoutProps = {
  children?: ReactNode;
  title?: string;
  transparentHeader?:  boolean;
  disabledHeader?: boolean;
  disabledFooter?: boolean;
  simpleHeader?: boolean;
  simpleFooter?: boolean;
}

const Layout: BlitzLayout<LayoutProps> = ({
  title,
  children,
  transparentHeader,
  disabledHeader,
  disabledFooter,
  simpleHeader,
  simpleFooter,
}) => {

  return (
    <>
      <Head>
        <title>{title || "web"}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {disabledHeader ? null : (
        <>
          {simpleHeader ? (
            <HeaderSimple transparent={transparentHeader} />
          ) : (
            <Header transparent={transparentHeader} />
          )}
        </>
      )}
      {children}
      {disabledFooter ? null : <>{simpleFooter ? <FooterSimple /> : <Footer />}</>}
    </>
  )
}

export default Layout;

