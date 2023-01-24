import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import React from "react"
import { withBlitz } from "src/blitz-client"

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

import "app/core/styles/index.css";
import Layout from 'src/core/layouts/Layout';
import { SettingsProvider } from "src/contexts/SettingsContext";
import ThemeProvider from "src/theme";
import ThemeColorPresets from "src/core/components/ThemeColorPresets";
import { MotionLazyContainer } from "src/core/components";
import Settings from 'src/core/components/settings';
import ProgressBar from 'src/core/components/ProgressBar';


function RootErrorFallback({ error }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <div>Error: You are not authenticated</div>
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error.message || error.name}
      />
    )
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider>
          <ThemeProvider>
            <ThemeColorPresets>
              <MotionLazyContainer>
                <Layout>
                  <>
                    <Settings/>
                    <ProgressBar/>
                    {getLayout(<Component {...pageProps} />)}
                  </>
                </Layout>
              </MotionLazyContainer>
            </ThemeColorPresets>
          </ThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </ErrorBoundary>
  )
}

export default withBlitz(MyApp)
