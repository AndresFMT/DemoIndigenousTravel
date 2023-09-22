import type { ReactNode } from 'react';

import Layout from 'src/core/layouts/Layout'
import { Page, MembershipForm } from 'src/core/components'
import client from 'integrations/sanity.client';

import { groqPageQuery } from 'src/utils/pageQuery';

import Fallback from 'src/sections/fallback';
import * as HomepageContent from 'src/sections/home'

import { HomepageContent as HomepageContentType } from "src/@types/sanity";
type Props = {
  title?: string;
  description?: string;
  sections: HomepageContentType[];
};
const MemberServicesPage = (props:Props) => {
  const { sections, title, description } = props
  const metadescription = (<meta name="description" content={description} />)
  return (
      <Page title={title|| "ITM"} meta={metadescription}>
        {
          sections && sections.map((item, index: number) => {
            const Component = HomepageContent[item._type as keyof typeof HomepageContent] || Fallback
            return <Component key={index} {...item} />
          })
        }
            <MembershipForm />
      <div className="min-h-10 w-full" />
    </Page>
  )
}

MemberServicesPage.getLayout = (page:ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default MemberServicesPage;

export async function getStaticProps() {

  const params = { slug: 'membership' };
  const data = await client.fetch(groqPageQuery, params)
  return {
    props: {
      ...data
    }
  }
}

