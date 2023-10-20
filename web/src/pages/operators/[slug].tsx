import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'

import client from 'integrations/sanity.client';
import { groqOperatorQuery, groqOperatorSlugsQuery, groqOperatorsNearbyQuery } from 'src/utils/pageQuery';

import { Container, Typography, Stack, Divider } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2"

import Layout from 'src/core/layouts/Layout'
import { OperatorImageGallery, FeaturedOperators, OperatorDetails } from 'src/sections/operators';
import { Page, PortableText, CustomBreadcrumbs } from 'src/core/components'

import { Operator } from 'src/@types/sanity';
import { Page as AppPage } from 'src/@types/app';


const OperatorPage: AppPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const { name, images, nearby } = props;

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Operators', href: '/operators' },
    { name: props.name },
  ];

  return (
    <Page title={name}>
      <Container sx={{ overflow: 'hidden', mb: 5 }}>

        <CustomBreadcrumbs links={breadcrumbs} sx={{ mt: 3, mb: 5 }} />

        {images && <OperatorImageGallery images={images} />}
        <Grid container columnSpacing={8} rowSpacing={5} direction="row-reverse">

          <Grid xs={12} md={5} lg={4} >
            <OperatorDetails operator={props} />
          </Grid>

          <Grid xs={12} md={7} lg={8}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {props.name}
            </Typography>


            <PortableText body={props.description} />

            <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

            <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
              <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
                Share: We can put social media cta here, or link to operator socials
              </Typography>

              <Stack direction="row" alignItems="center" flexWrap="wrap">
              </Stack>
            </Stack>
          </Grid>
        </Grid>

      </Container>
      <FeaturedOperators operators={nearby} />
    </Page>
  )
}

OperatorPage.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
}

export default OperatorPage;

export const getStaticPaths = (async () => {
  const data = await client.fetch(groqOperatorSlugsQuery)
  const slugs = data.map((item: { slug: { current: string, _type: string } }) => {
    return (
      { params: { slug: item.slug.current } }
    )
  })

  return {
    paths: slugs,
    fallback: true,
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
  const params = { slug: context.params?.slug };
  const pageData = await client.fetch(groqOperatorQuery, params)
  const nearby = await client.fetch(groqOperatorsNearbyQuery, { ...params, coordinates: pageData.coordinates })
  return { props: { ...pageData, nearby } }
}) satisfies GetStaticProps<Operator>

