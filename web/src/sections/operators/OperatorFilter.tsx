import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack, { StackProps } from '@mui/material/Stack';

import Iconify from 'src/core/components/iconify';

import FilterLocation from './FilterLocation';
import FilterCategory from './FilterCategory';
import { useQueryState } from 'next-usequerystate';

// ----------------------------------------------------------------------

type Props = {
  setFilter: (filter: any) => void;
} & StackProps;

export default function TravelFilters({ sx, setFilter, ...other }: Props) {

  const [category, setCategory] = useQueryState('category');
  const [region, setRegion] = useQueryState('region');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setFilter({ category, region });
  }, []);

  return (
    <Stack
      spacing={2.5}
      alignItems={{ md: 'center' }}
      direction={{ xs: 'column', md: 'row' }}
      sx={{ p: 4, borderRadius: 2, bgcolor: 'background.neutral', ...sx }}
      {...other}
    >
      {isClient && <FilterLocation region={region} setRegion={setRegion} />}

      <Divider flexItem orientation="vertical" />

      {isClient && <FilterCategory category={category} setCategory={setCategory} />}

      <Button
        size="large"
        color="secondary"
        variant="contained"
        onClick={() => {setFilter({ category, region })}}
        sx={{
          px: 0,
          flexShrink: 0,
          minWidth: { xs: 1, md: 48 },
        }}
      >
        <Iconify icon="carbon:search" />
      </Button>
    </Stack>
  );
}
