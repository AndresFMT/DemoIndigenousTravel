import { BlitzPage } from "@blitzjs/next"
import { ReactElement } from 'react';
import { Suspense } from 'react';
import { styled } from '@mui/material/styles';

import { Page } from 'src/core/components';
import Layout from 'src/core/layouts/Layout';

import client from 'integrations/sanity.client';
import { DynamicGenericSections } from 'src/sections/basic';
import { groqPageQuery } from 'src/utils/pageQuery';

import { SanityPageProps } from 'src/@types/sanity';

const RootStyles = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
  },
}));

const WhatWeDoPage: BlitzPage<SanityPageProps> = (props) => {
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

WhatWeDoPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {

  const params = { slug: 'what-we-do' };
  const data = await client.fetch(groqPageQuery, params)
  return {
    props: {
      ...data
    }
  }
}

export default WhatWeDoPage;
