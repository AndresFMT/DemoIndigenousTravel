import { ReactElement, useState, useCallback, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import { Box, Container } from '@mui/material'
import Layout from 'src/core/layouts/Layout'
import { Page } from 'src/core/components'
import { OperatorCard, OperatorCardSkeleton, OperatorFilter } from 'src/sections/operators';
import { useInteractiveMapContext } from 'src/contexts/InteractiveMapContext';
import client from 'integrations/sanity.client';
import { groq } from 'next-sanity';

type Props = {
  title?: string;
  description?: string;
  operatorCount: number;
  [key: string]: any;
};

const StyledOperatorList = styled(Box)(({ theme }) => ({
  display: 'grid',
  marginTop: theme.spacing(2),
  columnGap: theme.spacing(2),
  rowGap: theme.spacing(2),
  gridTemplateColumns: 'repeat(4, 1fr)',
}));

const OperatorsPage = (props: Props) => {
  const {title, description, operatorCount} = props;
  const resultsPerPage = 12;


  const { operators: contextOperators } = useInteractiveMapContext();
  const [operators, setOperators] = useState(contextOperators.slice(0, resultsPerPage));
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(Math.ceil(operatorCount / resultsPerPage));

  const [filter, setFilter] = useState({
    category: '',
    region: '',
  });

  const [isLoading, setIsLoading] = useState(!operators);

  const queryOperators = useCallback(async () => {
    // Eventually, we will need to query for filters, sorting and pagination
    // We can implement this at a later date when needed,
    // The amount of operators right now is entirely manageable
    // in local state.

  }, [filter]);

  useEffect(() => {
    if (filter) {
      const filteredOperators =
        contextOperators.filter((operator: any) => {
          if (filter.category && filter.category !== '') {
            console.log(operator.category, filter.category);
            return operator.category.includes(filter.category);
          }
          return true;
        }).filter((operator: any) => {
          if (filter.region && filter.region !== '') {
              console.log(operator.region, filter.region);
            return operator.region.includes(filter.region.toLowerCase());
          }
          return true;
        });
      setPageCount(Math.ceil(filteredOperators.length/resultsPerPage));
      setOperators(filteredOperators.slice((page-1)*resultsPerPage, page*resultsPerPage));
    }
  }, [filter, setOperators, contextOperators, page, setPageCount]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  const handleFilterChange = (filter: any) => {
    setFilter(filter);
    setPage(1);
  }

  return (
    <Page title={title || "ITM"} meta={description}>
      <Container sx={{mt: 8}}>
        <OperatorFilter setFilter={handleFilterChange} />
        <StyledOperatorList>

          {(isLoading ? [...Array(resultsPerPage)] : operators).map((operator: any) => {
            return (operator ?
              <OperatorCard key={operator._id} operator={operator} />
              :
              <OperatorCardSkeleton key={operator._id} />
            )
          })
          }
        </StyledOperatorList>
        <Pagination
          count={pageCount}
          color="primary"
          page={page}
          onChange={handlePageChange}
          sx={{
            my: 10,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      </Container>
    </Page>
  )
}

OperatorsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout >{page}</Layout>;
}

export default OperatorsPage;


export const getStaticProps = async () => {
  const operatorCount = await client.fetch(groq`
    count(*[_type == "operator" && !(_id in path("drafts.**"))])
  `);
  return {
    props: {
      operatorCount,
    },
  };
}
