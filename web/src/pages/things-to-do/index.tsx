import { GetStaticProps } from 'next';

import { groqPageQuery } from 'src/utils/pageQuery';
import client from 'integrations/sanity.client';

import Layout from 'src/core/layouts/Layout';
import { Page } from 'src/core/components';

import * as Sections from 'src/sections/things-to-do';
import Fallback from 'src/sections/fallback';

import { SanityPageProps } from "src/@types/sanity";
import { Page as AppPage } from "src/@types/app";

const ThingsToDoPage: AppPage<SanityPageProps> = (props) => {
  const { title, description, sections } = props;
  const metadescription = (<meta name="description" content={description} />)

  return (
    <Page title={`${title} | ITM`} meta={metadescription}>

      {sections && sections.map((section, index) => {
        const Component = Sections[section._type as keyof typeof Sections] || Fallback
        return <Component key={index} {...section} />

      })
      }
    </Page>
  )
}

export default ThingsToDoPage;

ThingsToDoPage.getLayout = (page) => {
  return (<Layout>{page}</Layout>)
};


export const getStaticProps: GetStaticProps = async () => {

  const params = { slug: 'things-to-do' };
  const data = await client.fetch(groqPageQuery, params);

  return {
    props: {
      ...data
    },
    revalidate: 300
  }
}

