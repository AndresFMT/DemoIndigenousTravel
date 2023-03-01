
import { Suspense } from 'react';
import { styled } from '@mui/material/styles';

import { Page } from 'src/core/components';
import Layout from 'src/core/layouts/Layout';

const RootStyles = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    height: '100vh',
    paddingTop: theme.spacing(15),
  },
}));

const WhoWeArePage = (props) => {
  return (
    <Suspense fallback="Loading...">
      <RootStyles>
        <Page>
          <h1>WhoWeArePage</h1>
          <p>Find me in ./web/pages/WhoWeArePage.tsx</p>
        </Page>
      </RootStyles>
    </Suspense>
  );
};

WhoWeArePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default WhoWeArePage;

