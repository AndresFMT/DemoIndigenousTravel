import {styled} from '@mui/material/styles'
import Layout from 'src/core/layouts/Layout'

import {HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT} from 'src/config'
import {Page} from 'src/core/components'

import {TravelAbout} from 'src/sections/@travel/about'
import client from 'integrations/sanity.client';
import { groqPageQuery } from 'src/utils/pageQuery'
import {HeroImage, SectionText, BlankSpace} from 'src/sections/basic'
import { ReactElement } from 'react'
import { BlitzPage } from '@blitzjs/auth'

const RootStyle = styled('div')(({theme}) => ({
    paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}))


const AboutUsPage:BlitzPage = (props) => {
  return (
    <Page title="About Us">
      <RootStyle>
          { props.sections.length > 0 &&
            props.sections.map((section, index) => {
              const content = section.content.reduce((acc, cur) => {
                acc = {...acc,...cur};
                return acc;
              }, {});
              switch (section.type) {
                case 'heroImage':
                  return <HeroImage {...content} key={index} />;
                case 'sectionText':
                  return <SectionText {...content} key={index} />;
                default:
                  return <BlankSpace key={index} />
              }
            })
          }
        <TravelAbout/>
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

