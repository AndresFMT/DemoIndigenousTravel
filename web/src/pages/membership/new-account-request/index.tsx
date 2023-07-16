import {styled } from '@mui/material/styles';
import type {ReactNode} from 'react';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from 'src/config';
import Layout from 'src/core/layouts/Layout'
import { Page, NewAccountRequestForm} from 'src/core/components'
import client from 'integrations/sanity.client';

import { DynamicGenericSections } from 'src/sections/basic';
import { groqPageQuery } from 'src/utils/pageQuery';
import { BlitzPage } from '@blitzjs/next';
import { SanityPageProps } from 'src/@types/sanity';

const RootStyle = styled('div')(({theme}) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  }
}))

const NewAccountRequestPage:BlitzPage<SanityPageProps> = (props) => {
  return (
    <Page title={props.title}>
      <RootStyle>
          <DynamicGenericSections {...props} />
            <NewAccountRequestForm/>
      </RootStyle>
      <div className="min-h-10 w-full" />
    </Page>
  )
}

NewAccountRequestPage.getLayout = (page:ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default NewAccountRequestPage;

export async function getStaticProps() {

  const params = { slug: 'new-account-request' };
  const data = await client.fetch(groqPageQuery, params)
  return {
    props: {
      ...data
    },
    revalidate: 300
  }
}


