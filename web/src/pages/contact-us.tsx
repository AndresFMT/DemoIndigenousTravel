import Layout from 'src/core/layouts/Layout';

import { Page } from 'src/core/components';
import { ContactForm, OfficeInfo } from 'src/sections/contact';


// ----------------------------------------------------------------------

export default function ContactUsPage() {
  return (
    <Page title={"Contact Us"}>
      <OfficeInfo />
      <ContactForm />
    </Page>
  );
}

ContactUsPage.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
}

