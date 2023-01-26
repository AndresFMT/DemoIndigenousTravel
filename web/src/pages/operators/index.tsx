import { Suspense, useState } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
// import { usePaginatedQuery } from "@blitzjs/rpc";
import { useRouter } from "next/router";
import Layout from "src/core/layouts/Layout";
// import getOperators from "src/operators/queries/getOperators";
import client from 'integrations/sanity.client';
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Page,
  FavoriteButton,
  TextMaxLine,
} from "src/core/components";


import { Skeleton, Divider, Stack, Card, Typography, Box } from '@mui/material';

import {HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT} from 'src/config';

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));


// ----------------------------------------------------------------------
// const ITEMS_PER_PAGE = 100;

function OperatorListItemSkeleton({ ...other }) {
  return (
    <Card {...other}>
      <Skeleton variant="rectangular" sx={{ width: 1, height: 240 }} />

      <Stack spacing={1} sx={{ p: 3 }}>
        <Skeleton variant="text" sx={{ height: 20, width: 50 }} />
        <Skeleton variant="text" sx={{ height: 20, width: 1 }} />
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack direction="row" justifyContent="space-between" sx={{ p: 3 }}>
        <Skeleton variant="text" sx={{ height: 20, width: 100 }} />
        <Skeleton variant="text" sx={{ height: 20, width: 50 }} />
      </Stack>
    </Card>
  );
}

const OperatorListItem = ({ operator }) => {
  const { id, name, slug, location, favorited, coverImg } = operator;

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = (event) => {
    setFavorite(event.target.checked);
  };

  return (
    <Card>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: 1.5,
          pl: 2,
          pr: 1.5,
          top: 0,
          width: 1,
          zIndex: 9,
          position: 'absolute',
        }}
      >
        <Stack
          spacing={0.5}
          direction="row"
          sx={{
            px: 1,
            borderRadius: 0.75,
            typography: 'subtitle2',
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          }}
        >
          {'ol price placeholder'}
        </Stack>

        <FavoriteButton
          checked={favorite}
          onChange={handleChangeFavorite}
          sx={{ color: 'common.white' }}
        />
      </Stack>

      {coverImg && <Image alt={slug.current} src={coverImg} ratio="1/1" />}

      <Stack spacing={0.5} sx={{ p: 2.5 }}>
        <Typography variant="body3" sx={{ color: 'text.secondary' }}>
          {location.alt}
        </Typography>

        <Link as={Routes.ShowOperatorPage({ operatorId: slug.current})} href={Routes.ShowOperatorPage({ operatorId: slug.current})} passHref>
          <TextMaxLine variant="h6" asLink persistent>
            {name}
          </TextMaxLine>
        </Link>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack direction="row" justifyContent="space-between" sx={{ p: 2.5 }}>
        {'rating and duration have been pulled from this space'}
      </Stack>
    </Card>
  );
}

export const OperatorsList = ({ operators, loading }) => {
  const router = useRouter();
  const page = Number(router.query.page) || 0;
  // const [{ operators, hasMore }] = usePaginatedQuery(getOperators, {
  //   orderBy: { id: "asc" },
  //   skip: ITEMS_PER_PAGE * page,
  //   take: ITEMS_PER_PAGE,
  // });

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } });
  const goToNextPage = () => router.push({ query: { page: page + 1 } });

  if (loading) {
    return (
      [...Array(8)].map((item, i) => <OperatorListItemSkeleton key={i} />)
    )
  }
  return (

    <div>
      <Box
        sx={{
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          columnGap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
        >
        {operators.map((operator) => (
          <OperatorListItem key={operator.id} operator={operator} />
        ))}
        </Box>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button onClick={goToNextPage}>
        Next
      </button>
    </div>
  );
};

const OperatorsPage = ({ operators }) => {
  return (
    <Page title="Operators">
      <RootStyle>
        <Head>
          <title>Operators</title>
        </Head>



        <Container>
          <div>
            <p>
              <Link href={Routes.NewOperatorPage()}>
                <a>{'Create Operator'}</a>
              </Link>
            </p>
          </div>
          <Suspense fallback={<OperatorsList loading={true} />}>
            <OperatorsList operators={operators} />
          </Suspense>
        </Container>
      </RootStyle>
    </Page>
  );
};

export async function getStaticProps() {
  const operators = await client.fetch(`
    *[ _type == "operator" ] {"id": _id, name, description, slug, "location":coordinates }
  `, {})
  return {
    props: {
      operators
    }
  }
}

OperatorsPage.getLayout = function getLayout(page) {
  return <Layout> {page}</Layout>
}

export default OperatorsPage;
