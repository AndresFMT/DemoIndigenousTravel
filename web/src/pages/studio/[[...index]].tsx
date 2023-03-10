import { ReactElement } from 'react'
import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { NextStudioHead } from 'next-sanity/studio/head'
import { StudioLayout, StudioProvider } from 'sanity'
import config from 'integrations/sanity.config'
// import { GlobalStyles } from '@mui/material'
// import { useTheme } from '@sanity/ui'


export default function StudioPage() {
  // const theme = useTheme();
  // const styles = {
  //   html: { backgroundColor: theme.sanity.color.base.bg },
  // }
          // <GlobalStyles styles={styles}/>
  return (
    <>
      <Head>
        <NextStudioHead favicons={false} />
      </Head>

      <NextStudio config={config}>
        <StudioProvider config={config}>
          <StudioLayout />
        </StudioProvider>
      </NextStudio>
    </>
  )
}

StudioPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
