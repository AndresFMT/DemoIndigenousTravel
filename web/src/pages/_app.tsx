// scroll bar
import 'simplebar/src/simplebar.css'

//slick-carousel
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

/* lightbox */
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import 'react-lazy-load-image-component/src/effects/black-and-white.css'

// leaflet
import 'leaflet/dist/leaflet.css'

import React from "react"
import type { ReactNode } from "react"
import client from 'integrations/sanity.client';
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { Page } from "src/@types/app"

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
import { Operator } from 'src/@types/sanity'
const InteractiveMap = dynamic(() => import('src/core/components/map/InteractiveMap'), { ssr: false });

type Props = AppProps & {
  Component: Page;
  operators: Operator[];
  siteSettings: {
    title: string;
    description: string;
    facebookLink: string;
    instagramLink: string;
    linkedinLink: string;
    twitterLink: string;
  }
}

function MyAppWrapper({ Component, pageProps, operators, siteSettings }: Props) {

  const getLayout = Component.getLayout || ((page: ReactNode) => page)
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
                    <InteractiveMapProvider operators={[...operators]}>
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


MyAppWrapper.getInitialProps = async () => {

  const data = await client.fetch(`{
    'operators': *[_type == 'operator' && defined(slug) && defined(name) && defined(images) && defined(description) && defined(region) && defined(location) && defined(coordinates) && !(_id in path('drafts.**'))]{
      name,
      slug,
      'image': images[0] {
        ...,
        asset -> {
          ...,
          metadata
        }
      },
      location,
      coordinates,
      region,
      description,
      _id
    },
    'siteSettings': *[_type == 'siteSettings'][0]{...}
    }
  `)
  return { ...data }

}

