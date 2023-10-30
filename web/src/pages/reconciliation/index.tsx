import { BlitzPage } from '@blitzjs/next';
import { Suspense, ReactElement } from 'react';
import { styled } from '@mui/material/styles';

import { Page } from 'src/core/components';
import Layout from 'src/core/layouts/Layout';
import client from 'integrations/sanity.client';
import { groqPageQuery } from 'src/utils/pageQuery';
import { DynamicGenericSections } from 'src/sections/basic';

import { SanityPageProps } from 'src/@types/sanity';

const RootStyles = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
  },
}));

const ReconciliationPage: BlitzPage<SanityPageProps>= (props) => {
  return (
    <Suspense fallback="Loading...">
      <RootStyles>
        <Page title={props.title}>
          <DynamicGenericSections {...props} />
        </Page>
      </RootStyles>
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
    },
    revalidate: 300
  }
}

export default ReconciliationPage;

