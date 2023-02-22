import { Suspense } from "react"
import Layout from "src/core/layouts/Layout"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
// @next/sanity
import {groq} from 'next-sanity'
import client from 'integrations/sanity.client';

import { useRouter } from 'next/router';
import { Page } from "src/core/components"

import Fallback from 'src/sections/fallback'
import * as HomepageContent from 'src/sections/home'
import HomeHoop from 'src/sections/home/HomeHoop'

const HomePage: BlitzPage = (props) => {
  console.log(props)
  const { content } = props
  return (
    <Suspense fallback="Loading...">
      <Page>
        <HomeHoop/>
        {
          content.map((item, index:number) => {
            const Component = HomepageContent[item._type] || Fallback
            return <Component key={index} {...item} />
          })
        }
      </Page>
    </Suspense>
  )
}

HomePage.getLayout = function getLayout(page) {
  return <Layout >{page}</Layout>;
};

export default HomePage;

export async function getStaticProps() {
    const heroData = await client.fetch(groq`
      *[ _type == "homepage" && _id == "f28ba9e5-2eae-4a9f-a10f-0799c003f0b7"][0]{
        title,
        description,
        'content': content[]-> {
          _type,
          heading,
          kicker,
          'imageUrl': mainImage.asset->url
        }
      }
    `)
    return {
      props: {
        ...heroData
      }
    }
}

