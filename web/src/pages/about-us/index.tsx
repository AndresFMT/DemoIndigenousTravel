import {styled} from '@mui/material/styles'
import Layout from 'src/core/layouts/Layout'

import {HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT} from 'src/config'
import {Page} from 'src/core/components'

import client from 'integrations/sanity.client';
import { groqPageQuery } from 'src/utils/pageQuery'
import {DynamicGenericSections} from 'src/sections/basic'
import { ReactElement } from 'react'
import { BlitzPage } from '@blitzjs/auth'

import { SanityPageProps } from 'src/@types/sanity';

const RootStyle = styled('div')(({theme}) => ({
    paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}))

const AboutUsPage:BlitzPage<SanityPageProps>= (props) => {
  return (
    <Page title="About Us">
      <RootStyle>
        <DynamicGenericSections {...props} />
      </RootStyle>
    </Page>
  )
}

AboutUsPage.getLayout = function getLayout(page:ReactElement) {
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

