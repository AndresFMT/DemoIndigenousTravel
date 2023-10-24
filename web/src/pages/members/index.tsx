import { GetStaticProps } from 'next';
import type { ReactNode } from 'react';

import Layout from 'src/core/layouts/Layout'
import { Page } from 'src/core/components'
import { SanityPageProps } from 'src/@types/sanity';
import { Page as AppPage } from 'src/@types/app';

import Fallback from 'src/sections/fallback';
import * as HomepageContent from 'src/sections/home';

import { MembershipOffersSection }from 'src/sections/members';
import { groqPageQuery } from 'src/utils/pageQuery';
import client from 'integrations/sanity.client';

const Members:AppPage<SanityPageProps> = (props ) => {

  const { sections, title, description } = props

  return (
    <Page title={props.title || "Members"}>
        {
          sections && sections.map((item, index: number) => {
            const Component = HomepageContent[item._type as keyof typeof HomepageContent] || Fallback
            return <Component key={index} {...item} />
          })
        }
      <MembershipOffersSection />
    </Page>
  )
}

Members.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Members;

export const getStaticProps = (async (context) => {
  const  params  =  { slug: 'members'};
  const data = await client.fetch(groqPageQuery, params)
  return { props: { ...data } }
}) satisfies GetStaticProps<SanityPageProps>
