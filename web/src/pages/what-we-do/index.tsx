import { BlitzPage } from "@blitzjs/next"
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { ReactElement } from 'react';
import { Suspense } from 'react';
import { styled } from '@mui/material/styles';

import { Page } from 'src/core/components';
import Layout from 'src/core/layouts/Layout';

import client from 'integrations/sanity.client';
import {HeroImage, SectionText, BlankSpace} from 'src/sections/basic';
import {groqPageQuery} from 'src/utils/pageQuery';

const RootStyles = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
  },
}));

const CodeStyle = styled('pre')(({ theme }) => ({
  fontSize: '0.87rem',
  fontWeight: 500,
  lineHeight: 1,
  background: theme.palette.background.paper,
}));


type Props = {
  title: string;
  description: string;
  sections: Array<Section>;
};

type Section = {
  type: string;
  content: Array<Content>;
  backgroundColor?: string;
};

type Content = {
  type: string;
  image?: SanityImageSource;
  title?: string;
  heading?: string;
  text?: string;
}



const WhatWeDoPage: BlitzPage<Props> = (props) => {

  return (
    <Suspense fallback="Loading...">
      <RootStyles>
        <Page title={props.title}>
          { props.sections.length > 0 &&
            props.sections.map((section, index) => {
            console.log(section)
              if (section.content == null) return <BlankSpace key={index} />

              const content = section.content.reduce((acc, cur) => {
                acc = {...acc,...cur};
                return acc;
              }, {});
              switch (section.type) {
                case 'heroImage':
                  return <HeroImage {...content} key={index} />;
                case 'sectionText':
                  return <SectionText {...content} backgroundColor={section.backgroundColor} key={index} />;
                default:
                  return <BlankSpace key={index} />
              }
            })
          }
        </Page>
      </RootStyles>
    </Suspense>
  );
};

WhatWeDoPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// groq query for the page document with a matching name

export async function getStaticProps() {

  const params = { slug: 'what-we-do' };
  const data = await client.fetch(groqPageQuery, params)
  return {
    props: {
      ...data
    }
  }
}

export default WhatWeDoPage;
