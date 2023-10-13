import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'

import { groqOperatorQuery, groqOperatorSlugsQuery } from 'src/utils/pageQuery';

import { Container, Typography, Stack, Button, Divider} from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2"

import Layout from 'src/core/layouts/Layout'
import { Page, PortableText} from 'src/core/components'
import CustomBreadcrumbs from 'src/core/components/custom-breadcrumbs';
import client from 'integrations/sanity.client';

import { OperatorImageGallery } from 'src/sections/operators';


import { SanityPageProps } from 'src/@types/sanity';
import { Page as AppPage } from 'src/@types/app';


const OperatorPage: AppPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const { title, description, images} = props;

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Operators', href: '/operators' },
    { name: props.name, href: `/operators/${title}`},
  ];

  return (
    <Page title={title} meta={description}>
      <Container sx={{overflow: 'hidden'}}>

        <CustomBreadcrumbs links={breadcrumbs} sx={{mt:3, mb:5}}/>

        {images && <OperatorImageGallery images={images} />}
        <Grid container columnSpacing={8} rowSpacing={5} direction="row-reverse">

          <Grid xs={12} md={5} lg={4}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {props.name}
            </Typography>
          </Grid>

          <Grid xs={12} md={7} lg={8}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {props.name}
            </Typography>

            <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

            <PortableText body={props.description} />


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
    </Page>
  )
}

OperatorPage.getLayout = (page:React.ReactNode) => {
  return <Layout>{page}</Layout>;
}

export default OperatorPage;

export const getStaticPaths = (async () => {
  const data = await client.fetch(groqOperatorSlugsQuery)
  const slugs = data.map((item: { slug: {current: string, _type:string} }) => {
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
  const  params  =  { slug: context.params?.slug };
  const data = await client.fetch(groqOperatorQuery, params)
  return { props: { ...data } }
}) satisfies GetStaticProps<SanityPageProps>
