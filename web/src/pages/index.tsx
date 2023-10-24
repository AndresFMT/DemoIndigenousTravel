import { GetStaticProps } from "next";
import { groq } from 'next-sanity'

import client from 'integrations/sanity.client';
import Layout from "src/core/layouts/Layout"
import { Page } from "src/core/components"
import Fallback from 'src/sections/fallback'
import * as HomepageContent from 'src/sections/home'

import { SanityPageProps } from "src/@types/sanity";
import { Page as AppPage } from "src/@types/app";

const HomePage: AppPage<SanityPageProps> = (props) => {
  const { sections, title, description } = props

  return (
      <Page title={title || "ITM"} meta={description}>
        {
          sections && sections.map((item, index: number) => {
            const Component = HomepageContent[item._type as keyof typeof HomepageContent] || Fallback
            return <Component key={index} {...item} />
          })
        }
      </Page>
  )
}

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HomePage;

export const getStaticProps = (async () => {
  const data = await client.fetch(groq`
    *[ _type == "homepage" && _id == "homepage"][0]{
      title,
      description,
      sections[]-> {
        ...,
        _type,
        heading,
        kicker,
        text,
        enableCTA,
        cta,
        videoUrl,
        richText,
        content[] -> {
          ...,
        },
        image {
          ...,
          asset -> {
            ...,
            metadata
          }
        }
      }
    }
  `)
  return {
    props: {
      ...data
    },
  }
}) satisfies GetStaticProps<SanityPageProps>

