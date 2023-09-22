import type { ReactNode } from 'react';

import Layout from 'src/core/layouts/Layout'
import { Page, NewAccountRequestForm } from 'src/core/components'
import client from 'integrations/sanity.client';
import { groqPageQuery } from 'src/utils/pageQuery';
import { SanityPageProps } from 'src/@types/sanity';

const NewAccountRequestPage = (props: SanityPageProps) => {
  return (
    <Page title={props.title}>
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


