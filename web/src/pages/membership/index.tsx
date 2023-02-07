import {styled } from '@mui/material/styles';
import type {ReactNode} from 'react';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from 'src/config';
import Layout from 'src/core/layouts/Layout'
import {Page} from 'src/core/components'
import {MarketingServicesHero} from 'src/sections/@marketing'



const RootStyle = styled('div')(({theme}) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  }
}))


const MemberServicesPage = () => {
  return (
    <Page title="Member Services">
      <RootStyle>
        <MarketingServicesHero/>
      </RootStyle>
    </Page>
  )
}

export default MemberServicesPage;

MemberServicesPage.getLayout = (page:ReactNode) => {
  return <Layout>{page}</Layout>;
};

