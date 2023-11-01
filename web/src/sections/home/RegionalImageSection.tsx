import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Image, TextMaxLine } from 'src/core/components';
import { useResponsive } from 'src/hooks';

import { SanityAccessibleImage } from 'src/@types/sanity';
import { urlFor } from 'integrations/sanity.image';
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

type Props = {
  regionalImages?: SanityAccessibleImage[];
  rows?: string[];
  heading?: string;
  description?: string;
}

export default function RegionalImageSection({ regionalImages: regions, rows, heading, description}: Props) {


  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid
        container
        rowSpacing={{ xs: 8, md: 0 }}
        columnSpacing={{ xs: 0, md: 3 }}
        alignItems={{ md: 'center' }}
        justifyContent={{ md: 'space-between' }}
      >
        <Grid xs={12} md={4}>
          <Typography variant="h2">{heading}</Typography>

          <Typography sx={{ my: 3, color: 'text.secondary' }}>
            {description}
          </Typography>

          <Stack spacing={2}>
            {rows && rows.map((line) => (
              <Stack key={line} direction="row" alignItems="center" sx={{ typography: 'body1' }}>
                <Box
                  sx={{
                    mr: 2,
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                  }}
                />
                {line}
              </Stack>
            ))}
          </Stack>
        </Grid>

        <Grid container xs={12} md={6} spacing={{ xs: 4, md: 3 }}>
          {regions && regions.map((region, index) => (
            <Grid
              key={index}
              xs={12}
              sm={6}
              sx={{
                ...(index === 1 && {
                  display: { md: 'inline-flex' },
                  alignItems: { md: 'flex-end' },
                }),
              }}
            >
              <DestinationItem region={region} order={index % 3} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

// ----------------------------------------------------------------------

type DestinationItemProps = {
  region: SanityAccessibleImage;
  order: number;
};

function DestinationItem({ region, order }: DestinationItemProps) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');
  console.log(region);

  if (!region) {
    return null;
  }
  const { caption: location } = region;
  const coverUrl = urlFor(region.asset).width(600).height(600).url();

  console.log( location );
  return (
    <Box
      sx={{
        width: 1,
        borderRadius: 2,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Image
        alt={location}
        src={coverUrl}
        ratio={(!mdUp && '1/1') || (order && '1/1') || '4/6'}
        overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${alpha(
          theme.palette.common.black, 0.9)
        } 95%)`}
      />

      <Stack
        spacing={1}
        sx={{
          p: 3,
          left: 0,
          bottom: 0,
          zIndex: 9,
          color: 'common.white',
          position: 'absolute',
        }}
      >
        <TextMaxLine variant="h5" line={1}>
          {location}
        </TextMaxLine>

      </Stack>
    </Box>
  );
}
