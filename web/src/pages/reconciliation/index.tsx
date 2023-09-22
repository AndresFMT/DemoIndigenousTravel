import { Suspense, ReactElement } from 'react';

import { Page } from 'src/core/components';
import Layout from 'src/core/layouts/Layout';
import client from 'integrations/sanity.client';
import { groqPageQuery } from 'src/utils/pageQuery';
import { DynamicGenericSections } from 'src/sections/basic';

import { SanityPageProps } from 'src/@types/sanity';

const ReconciliationPage = (props:SanityPageProps) => {
  return (
    <Suspense fallback="Loading...">
        <Page title={props.title}>
          <DynamicGenericSections {...props} />
        </Page>
    </Suspense>
  );
};

ReconciliationPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {

  const params = { slug: 'reconciliation-old' };
  const data = await client.fetch(groqPageQuery, params)
  return {
    props: {
      ...data
    }
  }
}

export default ReconciliationPage;

