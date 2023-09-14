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

// leaflet
import 'leaflet/dist/leaflet.css'

import React from "react"
import dynamic from 'next/dynamic'

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
import { InteractiveMapProvider } from "src/contexts/InteractiveMapContext";


import { SiteSettingsProvider } from 'src/contexts/SiteSettingsContext';
const InteractiveMap = dynamic(() => import('src/core/components/map/InteractiveMap'), { ssr: false });


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
                      <InteractiveMapProvider>
                      <>
                        <Settings />
                        <ProgressBar />
                        <InteractiveMap />
                        {getLayout(<Component {...pageProps} />)}
                      </>
                      </InteractiveMapProvider>
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
