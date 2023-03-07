import { Suspense } from 'react';
import { styled } from '@mui/material/styles';

import { Page } from 'src/core/components';
import Layout from 'src/core/layouts/Layout';
import client from 'integrations/sanity.client';
import {HeroImage, SectionText, BlankSpace} from 'src/sections/basic';
import { groqPageQuery } from 'src/utils/pageQuery';

const RootStyles = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    height: '100vh',
    paddingTop: theme.spacing(15),
  },
}));

const ReconcilliationPage = (props) => {
  return (
    <Suspense fallback="Loading...">
      <RootStyles>
        <Page title={props.title}>
          { props.sections.length > 0 &&
            props.sections.map((section, index) => {
              const content = section.content.reduce((acc, cur) => {
                acc = {...acc,...cur};
                return acc;
              }, {});
              switch (section.type) {
                case 'heroImage':
                  return <HeroImage {...content} key={index} />;
                case 'sectionText':
                  return <SectionText {...content} key={index} />;
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

ReconcilliationPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {

  const params = { slug: 'reconciliation' };
  const data = await client.fetch(groqPageQuery, params)
  return {
    props: {
      ...data
    }
  }
}

export default ReconcilliationPage;

