import { Suspense } from "react"
import { GetStaticProps } from "next";
import { groq } from 'next-sanity'

import client from 'integrations/sanity.client';
import Layout from "src/core/layouts/Layout"
import { Page } from "src/core/components"
import Fallback from 'src/sections/fallback'
import * as HomepageContent from 'src/sections/home'

import { HomepageContent as HomepageContentType } from "src/@types/sanity";

type Props = {
  description?: string;
  title?: string;
  content: HomepageContentType[];
}

const HomePage = (props: Props) => {
  const { content, title, description } = props
  const metadescription = (<meta name="description" content={description} />)

  return (
    <Suspense fallback="Loading...">
      <Page title={title || "ITM"} meta={metadescription}>
        {
          content && content.map((item, index: number) => {
            const Component = HomepageContent[item._type as keyof typeof HomepageContent] || Fallback
            return <Component key={index} {...item} />
          })
        }
      </Page>
    </Suspense>
  )
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;

export const getStaticProps = (async () => {
  const data = await client.fetch(groq`
    *[ _type == "homepage" && _id == "homepage"][0]{
      title,
      description,
      content[]-> {
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
}) satisfies GetStaticProps<Props>

