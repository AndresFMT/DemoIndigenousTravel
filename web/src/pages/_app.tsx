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

import React from "react"

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


import { SiteSettingsProvider } from 'src/contexts/SiteSettingsContext';


function MyAppWrapper( { Component, pageProps }: any ) {
  const { siteSettings } = pageProps;

  const getLayout = Component.getLayout || ( ( page: any ) => page )
  if (Component.hasOwnProperty('isStudio') === true) {
    return (
      <>
        {getLayout(<Component {...pageProps} />)}
      </>
    )
  }

  return (
    <>
      <SiteSettingsProvider value={siteSettings} >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <SettingsProvider>
              <ThemeProvider>
                <ThemeColorPresets>
                  <MotionLazyContainer>
                    <RtlLayout>
                      <>
                        <Settings />
                        <ProgressBar />
                        {getLayout(<Component {...pageProps} />)}
                      </>
                    </RtlLayout>
                  </MotionLazyContainer>
                </ThemeColorPresets>
              </ThemeProvider>
            </SettingsProvider>
          </LocalizationProvider>
      </SiteSettingsProvider>
    </>
  )
}

export default MyAppWrapper
