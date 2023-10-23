import type { ReactNode } from 'react';

import Layout from 'src/core/layouts/Layout'
import { Page, NewAccountRequestForm } from 'src/core/components'
import client from 'integrations/sanity.client';
import { groqPageQuery } from 'src/utils/pageQuery';
import { SanityPageProps } from 'src/@types/sanity';
import { Page as AppPage } from 'src/@types/app';

const NewAccountRequestPage:AppPage<SanityPageProps> = (props ) => {
  return (
    <Page title={props.title || "New Account Request"}>
      <NewAccountRequestForm />
      <div className="min-h-10 w-full" />
    </Page>
  )
}

NewAccountRequestPage.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default NewAccountRequestPage;

export async function getStaticProps() {

  const params = { slug: 'new-account-request' };
  const data = await client.fetch(groqPageQuery, params)
  return {
    props: {
      ...data
    }
  }
}


