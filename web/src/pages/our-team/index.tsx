import { ReactElement } from 'react'

import client from 'integrations/sanity.client';

import Layout from 'src/core/layouts/Layout'
import { Page } from 'src/core/components'
import { groqPageQuery } from 'src/utils/pageQuery'
import Fallback from 'src/sections/fallback';
import * as HomepageContent from 'src/sections/home'

import { HomepageContent as HomepageContentType } from "src/@types/sanity";

type Props = {
  title?: string;
  description?: string;
  sections: HomepageContentType[];
};

const OurTeamPage = (props: Props) => {

  const { sections, title, description } = props;

  const metadescription = (<meta name="description" content={description} />)

  return (
      <Page title={title || "ITM"} meta={metadescription}>
        {
          sections && sections.map((item, index: number) => {
            const Component = HomepageContent[item._type as keyof typeof HomepageContent] || Fallback
            return <Component key={index} {...item} />
          })
        }
      </Page>
  )
}

OurTeamPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout >{page}</Layout>;
}

export async function getStaticProps() {

  const params = { slug: 'our-team' };
  const data = await client.fetch(groqPageQuery, params)
  return {
    props: {
      ...data
    },
    revalidate: 300
  }
}

export default OurTeamPage;

