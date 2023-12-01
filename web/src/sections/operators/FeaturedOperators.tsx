import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Iconify from 'src/core/components/iconify';

import OperatorCard from './OperatorCard';

import { Operator } from 'src/@types/sanity';
import { useResponsive } from 'src/hooks';

type Props = {
  operators?: Operator[];
  heading?: string;
};

export default function FeaturedOperators({ operators, heading = "You Might Like"}: Props) {

  const mdUp = useResponsive('up', 'md')

  const viewAllBtn = (
    <Button
      sx={{ color: 'theme.primary', fontWeight: 'bold' }}
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      <NextLink href="/operators" passHref legacyBehavior>
        View All
      </NextLink>
    </Button>
  );

  if (!operators) return null;
  return (
    <Box sx={{ bgcolor: 'background.neutral' }}>
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
          <Typography variant="h3">{heading}</Typography>

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
          {operators && operators.map((operator) => (
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

