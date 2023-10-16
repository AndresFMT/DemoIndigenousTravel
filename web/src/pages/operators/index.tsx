import { ReactElement } from 'react';
import client from 'integrations/sanity.client';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material'
import Layout from 'src/core/layouts/Layout'
import { Page } from 'src/core/components'
import { groqOperatorsQuery } from 'src/utils/pageQuery'
import { OperatorCard, OperatorCardSkeleton } from 'src/sections/operators';

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

const OurTeamPage = (props: Props) => {
  const { title, description, operators } = props;
  const loading = !operators;

  return (
    <Page title={title || "ITM"} meta={description}>
      <Container>
        <StyledOperatorList>
          {(loading ? [...Array(12)] : operators).map((operator: any) => {
            return (operator ?
              <OperatorCard key={operator._id} operator={operator} />
              :
              <OperatorCardSkeleton key={operator._id} />
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

