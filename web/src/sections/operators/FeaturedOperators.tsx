import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Iconify from 'src/core/components/iconify';


import { OperatorCard } from 'src/sections/operators';

import { Operator } from 'src/@types/sanity';
import { useResponsive } from 'src/hooks';
import { useInteractiveMapContext } from 'src/contexts/InteractiveMapContext';
// ----------------------------------------------------------------------

type Props = {
  operators: Operator[];
};

export default function FeaturedOperators({ operators }: Props) {
console.log(operators);
  const {operators: contextOperators} = useInteractiveMapContext();
  const filteredOperators: Operator[] = operators.map((operatorIdentifier) => {
    return contextOperators.find((operator:Operator) => operator.slug.current === operatorIdentifier.slug.current);
  });
  const mdUp = useResponsive('up', 'md')

  const viewAllBtn = (
    <Button
      component={NextLink}
      href={'/operators'}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Box sx={{ bgcolor: 'background.nuetral' }}>
      <Container
        sx={{
          py: { xs: 10, md: 15 },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">You Might Like</Typography>

          {mdUp && viewAllBtn}
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {filteredOperators.map((operator) => (
            <OperatorCard key={operator._id} operator={operator} />
          ))}
        </Box>

        {!mdUp && (
          <Stack alignItems="center" sx={{ mt: 8 }}>
            {viewAllBtn}
          </Stack>
        )}
      </Container>
    </Box>
  );
}

