import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "src/core/layouts/Layout"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import { useRouter } from 'next/router';
import { Page } from "src/core/components"
import {
  HomeHero,
  HomeNewStart,
  // HomeDemoPages,
  HomeForDesigner,
  HomeCombination,
  HomeAdvertisement,
  HomeFeatureHighlights,
  HomeFlexibleComponents,

} from 'src/sections/home';
/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */


const HomePage: BlitzPage = () => {
  return (
    <Suspense fallback="Loading...">
      <Page>
        <HomeHero />
        <HomeNewStart />

        <HomeFlexibleComponents />

        <HomeFeatureHighlights />

        <HomeForDesigner />

        <HomeCombination />

        <HomeAdvertisement />

      </Page>
    </Suspense>
  )
}

HomePage.getLayout = function getLayout(page) {
  return <Layout >{page}</Layout>;
};

export default HomePage;

