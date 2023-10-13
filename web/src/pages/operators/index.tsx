import { ReactElement } from 'react';
import NextLink from 'next/link';

import client from 'integrations/sanity.client';

import { styled } from '@mui/material/styles';
import { Box, Card, Container, Stack, Typography, Link} from '@mui/material'

import Layout from 'src/core/layouts/Layout'
import { Page, Image, TextMaxLine } from 'src/core/components'
import { groqOperatorsQuery } from 'src/utils/pageQuery'


import  { urlFor} from 'integrations/sanity.image';

type Props = {
  title?: string;
  description?: string;
  [key: string]: any;
};

const StyledOperatorList = styled(Box)(({ theme }) => ({
  display: 'grid',
  columnGap: theme.spacing(2),
  rowGap: theme.spacing(2),
  gridTemplateColumns: 'repeat(4, 1fr)',
}));

const OperatorCard = (props: any) => {
  const { operator } = props;
  const shortDescription = operator?.description?.[0]?.children?.[0]?.text;
  const image = urlFor(operator.image).width(300).height(300).url();
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


      </Stack>
      </Stack>
      <Image src={image} alt={operator.name} ratio="1/1"/>
            <Stack spacing={0.5} sx={{ p: 2.5 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {operator.region}
        </Typography>

        <Link component={NextLink} href={`/operators/${operator.slug.current}`} color="inherit">
          <TextMaxLine variant="h6" persistent>
            {operator.name}
          </TextMaxLine>
        </Link>
      </Stack>

    </Card>

  )
};



const OurTeamPage = (props: Props) => {
  const { title, description, operators } = props;

  return (
    <Page title={title || "ITM"} meta={description}>
      <Container>

        <StyledOperatorList>
          {
            operators.map((operator: any) => {
              return (
                <OperatorCard key={operator._id} operator={operator} />
              )
            })
          }
        </StyledOperatorList>
      </Container>
    </Page>
  )
}

OurTeamPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout >{page}</Layout>;
}

export async function getStaticProps() {

  const data = await client.fetch(groqOperatorsQuery)
  return {
    props: {
      operators: [...data]
    },
    revalidate: 300
  }
}

export default OurTeamPage;

