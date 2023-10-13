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

type Props = {
  title?: string;
  description?: string;
  sections: SanityPageProps[];
};



export default function DynamicPage(props: InferGetStaticPropsType<typeof getStaticProps>) {

  const { sections, title, description } = props
  const metadescription = (<meta name="description" content={description} />)
  return (
      <Page title={title|| "ITM"} meta={metadescription}>
        {
          sections && sections.map((item:Section, index: number) => {
            const Component = HomepageContent[item._type as keyof typeof HomepageContent] || Fallback
            return <Component key={index} {...item} />
          })
        }
    </Page>
  )
}

DynamicPage.getLayout = (page:React.ReactNode) => {
  return <Layout>{page}</Layout>;
}

export const getStaticPaths = (async () => {

  const data = await client.fetch(groqPageSlugsQuery)
  const slugs = data.map((item: { slug: {current: string, _type:string} }) => {
    return (
      { params: { slug: item.slug.current } }
    )
  })

  return {
    paths: slugs,
    fallback: true, // false or "blocking"
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
console.log('static Props! ', context);
  const  params  =  { slug: context.params?.slug };
  const data = await client.fetch(groqPageQuery, params)
  return { props: { ...data } }
}) satisfies GetStaticProps<Props>
