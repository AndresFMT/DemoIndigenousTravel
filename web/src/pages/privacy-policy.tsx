import { ReactElement, Suspense } from 'react';
import Layout from 'src/core/layouts/Layout';

import { Page } from "src/core/components"

import { Typography, Container} from '@mui/material';

import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from 'src/config';

import { HomepageContent as HomepageContentType } from "src/@types/sanity";
import { styled } from '@mui/material/styles';

const RootStyle = styled('section')(({theme}) => ({
  overflow: 'hidden',
  position: 'relative',
  marginTop: HEADER_MOBILE_HEIGHT,
  marginBottom: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    width: '100%',
    marginTop: HEADER_DESKTOP_HEIGHT,
    marginBottom: HEADER_DESKTOP_HEIGHT,
  },
}));

type Props = {
  description?: string;
  title?: string;
  content: HomepageContentType[];
}

const PrivacyPolicyPage = (props: Props) => {
  return (
    <Suspense fallback="Loading...">
      <Page title={'Privacy Policy'}>
        <RootStyle>
        <Container>
          <Typography variant="h1">Privacy Policy of Indigenous Tourism Manitoba</Typography>

          <Typography variant="body1">Indigenous Tourism Manitoba operates the https://www.indigenoustourismmanitoba.ca website, which provides the SERVICE.</Typography>

          <Typography variant="body1">This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Indigenous Tourism Manitoba website.</Typography>

          <Typography variant="body1">If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</Typography>

          <Typography variant="body1">The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at https://www.indigenoustourismmanitoba.ca, unless otherwise defined in this Privacy Policy.</Typography>

          <Typography variant="h3">Information Collection and Use</Typography>

          <Typography variant="body1">For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</Typography>

          <Typography variant="h3">Log Data</Typography>

          <Typography variant="body1">We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer&apos;s Internet Protocol (&quot;IP&quot;) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</Typography>

          <Typography variant="h3">Cookies</Typography>

          <Typography variant="body1">Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer&apos;s hard drive.</Typography>

          <Typography variant="body1">Our website uses these &quot;cookies&quot; to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</Typography>

          <Typography variant="h3">Service Providers</Typography>

          <Typography variant="body1">We may employ third-party companies and individuals due to the following reasons:</Typography>

          <ul>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>

          <Typography variant="body1">We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</Typography>

          <Typography variant="h3">Security</Typography>

          <Typography variant="body1">We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</Typography>

          <Typography variant="h3">Links to Other Sites</Typography>

          <Typography variant="body1">Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</Typography>

          <Typography variant="body1">Children&apos;s Privacy</Typography>

          <Typography variant="body1">Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</Typography>

          <Typography variant="h3">Changes to This Privacy Policy</Typography>

          <Typography variant="body1">We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</Typography>

          <Typography variant="body1">Our Privacy Policy was created with the help of the <a href="https://www.privacypolicytemplate.net">Privacy Policy Template</a>.</Typography>

          <Typography variant="h3">Contact Us</Typography>

          <Typography variant="body1">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</Typography>
          </Container>
        </RootStyle>
      </Page>
    </Suspense>
  )
}

PrivacyPolicyPage.getLayout = function getLayout(page:ReactElement) {
  return <Layout>{page}</Layout>
}

export default PrivacyPolicyPage;
