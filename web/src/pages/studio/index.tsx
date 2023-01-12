'use client'
import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import Layout from "src/core/layouts/Layout";

import {NextStudio} from 'next-sanity/studio';

import config from 'integrations/sanity.config';


function StudioPage() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return (
    <Layout>
      <Head>
      <title>Sanity Studio</title>
      </Head>

        <Suspense fallback={<div>Loading...</div>}>
          <NextStudio config={config} unstable_noAuthBoundary={false}/>
        </Suspense>
    </Layout>
  )
}

export default StudioPage;
