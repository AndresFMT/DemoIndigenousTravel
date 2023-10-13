import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'

import Layout from 'src/core/layouts/Layout'
import { Page } from 'src/core/components'
import client from 'integrations/sanity.client';

import { groqPageQuery, groqPageSlugsQuery } from 'src/utils/pageQuery';

import Fallback from 'src/sections/fallback';
import * as HomepageContent from 'src/sections/home'

import { SanityPageProps, Section} from "src/@types/sanity";
import { Page as AppPage } from "src/@types/app";

const DynamicPage: AppPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {

  const { sections, title, description } = props
  return (
      <Page title={title} meta={description}>
        {
          sections && sections.map((item:Section, index: number) => {
            const Component = HomepageContent[item._type as keyof typeof HomepageContent] || Fallback
            return <Component key={index} {...item} />
          })
        }
    </Page>
  )
}

export default DynamicPage;

DynamicPage.getLayout = (page:React.ReactNode) => {
  return <Layout>{page}</Layout>;
}

export const getStaticPaths = (async () => {
  const data = await client.fetch(groqPageSlugsQuery)
  const ignoredSlugs = ['membership', 'new-account-request'];
  const slugs = data.filter((item: { slug: {current: string, _type:string} }) => (!ignoredSlugs.includes(item.slug.current) ))
  .map((item: { slug: {current: string, _type:string} }) => {
    return (
      { params: { slug: item.slug.current } }
    )
  })

  return {
    paths: slugs,
    fallback: true,
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
  const  params  =  { slug: context.params?.slug };
  const data = await client.fetch(groqPageQuery, params)
  return { props: { ...data } }
}) satisfies GetStaticProps<SanityPageProps>
