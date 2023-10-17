import { ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material'
import Layout from 'src/core/layouts/Layout'
import { Page } from 'src/core/components'
import { OperatorCard, OperatorCardSkeleton } from 'src/sections/operators';
import { useInteractiveMapContext } from 'src/contexts/InteractiveMapContext';

type Props = {
  title?: string;
  description?: string;
  [key: string]: any;
};

const StyledOperatorList = styled(Box)(({ theme }) => ({
  display: 'grid',
  marginTop: theme.spacing(8),
  columnGap: theme.spacing(2),
  rowGap: theme.spacing(2),
  gridTemplateColumns: 'repeat(4, 1fr)',
}));

const OurTeamPage = (props: Props) => {
  const { operators } = useInteractiveMapContext();
  const { title, description } = props;
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

export default OurTeamPage;

