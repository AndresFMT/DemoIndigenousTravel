import {styled} from '@mui/material/styles'
import Layout from 'src/core/layouts/Layout'

import {HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT} from 'src/config'
import {Page} from 'src/core/components'

import {TravelAbout} from 'src/sections/@travel/about'

const RootStyle = styled('div')(({theme}) => ({
    paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}))

const AboutUsPage = () => {
  return (
    <Page title="About Us">
      <RootStyle>
        <TravelAbout/>
      </RootStyle>
    </Page>
  )
}

AboutUsPage.getLayout = function getLayout(page) {
  return <Layout >{page}</Layout>;
}

export default AboutUsPage;

