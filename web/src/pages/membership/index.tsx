import {styled } from '@mui/material/styles';
import type {ReactNode} from 'react';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from 'src/config';
import Layout from 'src/core/layouts/Layout'
import { Page, MembershipForm } from 'src/core/components'
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

const MemberServicesPage:BlitzPage<SanityPageProps> = (props) => {
  return (
    <Page title={props.title}>
      <RootStyle>
          <DynamicGenericSections {...props} />
            <MembershipForm />
      </RootStyle>
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


