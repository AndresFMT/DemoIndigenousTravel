// scroll bar
import 'simplebar/src/simplebar.css'

//lightbox
import 'react-image-lightbox/style.css'

//slick-carousel
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import 'react-lazy-load-image-component/src/effects/black-and-white.css'

import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import React from "react"
import { withBlitz } from "src/blitz-client"

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';


import "app/core/styles/index.css";
import { SettingsProvider } from "src/contexts/SettingsContext";
import ThemeProvider from "src/theme";
import ThemeColorPresets from "src/core/components/ThemeColorPresets";
import { MotionLazyContainer } from "src/core/components";
import Settings from 'src/core/components/settings';
import ProgressBar from 'src/core/components/ProgressBar';
import RtlLayout from "src/core/components/RtlLayout";

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
  console.log('pageProps', pageProps)
  console.log('Component', Component)
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SettingsProvider>
            <ThemeProvider>
              <ThemeColorPresets>
                <MotionLazyContainer>
                  <RtlLayout>
                    <>
                      <Settings/>
                      <ProgressBar/>
                      {getLayout(<Component {...pageProps} />)}
                    </>
                  </RtlLayout>
                </MotionLazyContainer>
              </ThemeColorPresets>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </ErrorBoundary>
    </>
  )
}

export default withBlitz(MyApp)
