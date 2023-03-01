import { Suspense } from "react"
import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
// @next/sanity
import {groq} from 'next-sanity'
import client from 'integrations/sanity.client';

import { Page } from "src/core/components"

import Fallback from 'src/sections/fallback'
import * as HomepageContent from 'src/sections/home'

type Props = {
  content: any
}

const HomePage: BlitzPage = ({content}:Props) => {
  return (
    <Suspense fallback="Loading...">
      <Page>
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
    const data = await client.fetch(groq`
      *[ _type == "homepage" && _id == "f28ba9e5-2eae-4a9f-a10f-0799c003f0b7"][0]{
        title,
        description,
        content[]->{
          ...,
          images[] -> {
          ...
          }
        }
      }
    `)
    return {
      props: {
        ...data
      }
    }
}

