import { ReactElement } from 'react'

import client from 'integrations/sanity.client';

import Layout from 'src/core/layouts/Layout'
import { Page } from 'src/core/components'
import { groqPageQuery } from 'src/utils/pageQuery'
import { DynamicGenericSections } from 'src/sections/basic'

import { SanityPageProps } from 'src/@types/sanity';

const AboutUsPage = (props: SanityPageProps) => {
  return (
    <Page title="About Us">
      <DynamicGenericSections {...props} />
    </Page>
  )
}

AboutUsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout >{page}</Layout>;
}

export async function getStaticProps() {

  const params = { slug: 'about-us' };
  const data = await client.fetch(groqPageQuery, params)
  return {
    props: {
      ...data
    }
  }
}

export default AboutUsPage;

