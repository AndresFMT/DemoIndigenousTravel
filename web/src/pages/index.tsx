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
  content: {
    _type: string
    [key: string]: any
  }[]
}

const HomePage: BlitzPage<Props> = ({content}) => {
  return (
    <Suspense fallback="Loading...">
      <Page title={'Who We Are'}>
        {
          content.map((item, index:number) => {
            const Component = HomepageContent[item._type as keyof typeof HomepageContent] || Fallback
            return <Component key={index} {...item} />
          })
        }
      </Page>
    </Suspense>
  )
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};


export default HomePage;

export async function getStaticProps() {
    const data = await client.fetch(groq`
      *[ _type == "homepage" && !(_id in path('drafts.**'))][0]{
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

