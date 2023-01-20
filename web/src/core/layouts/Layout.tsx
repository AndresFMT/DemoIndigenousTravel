import Head from "next/head"
import React, { FC } from "react"
import useSWR from 'swr';
import { BlitzLayout } from "@blitzjs/next"

import {Header} from '../components';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  const { data, error, isLoading } = useSWR('/api/sanity-nav', fetcher);

  return (
    <>
      <Head>
        <title>{title || "web"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header transparent={false} data={data} isLoading={isLoading} error={error}/>
      {children}
      
    </>
  )
}

export default Layout
