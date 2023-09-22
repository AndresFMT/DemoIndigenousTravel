import type { ReactNode } from 'react';

import Layout from 'src/core/layouts/Layout'
import { Page, MembershipForm } from 'src/core/components'
import client from 'integrations/sanity.client';

import { DynamicGenericSections } from 'src/sections/basic';
import { groqPageQuery } from 'src/utils/pageQuery';
import { SanityPageProps } from 'src/@types/sanity';

const MemberServicesPage = (props:SanityPageProps) => {
  return (
    <Page title={props.title}>
          <DynamicGenericSections {...props} />
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


