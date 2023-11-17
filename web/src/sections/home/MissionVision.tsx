import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Image, TextMaxLine } from 'src/core/components';
import { useResponsive } from 'src/hooks';

import { SanityAccessibleImage } from 'src/@types/sanity';
import { urlFor } from 'integrations/sanity.image';
import { PortableBlockProps } from './TextSection';
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

type Props = {
  regionalImages?: SanityAccessibleImage[];
  rows?: {title:string,body:PortableBlockProps}[];
  heading?: string;
  description?: string;
}

export default function MissionVision({ regionalImages: regions, rows, heading, description}: Props) {


  return (
    <Container
      sx={{
        overflow: 'hidden',
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
        <Grid xs={12} md={6} lg={5}>
      <Stack
        spacing={3}
        sx={{
          maxWidth: 466,
          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="h2">{heading}</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
        </Grid>

        <Grid container xs={12} md={6} lg={5} spacing={{ xs: 4, md: 3 }}>
          <Stack alignItems={{ md: 'flex-end' }} sx={{ position: 'relative' }}>
            {rows && rows.map((vision, index) => {
              const { title,  body } = vision;

              const firstVision = index === 0;

              const secondVision = index === 1;

              const thirdVision = index === 2;

              return (
                <Card
                  key={title}
                  sx={{
                    p: 4,
                    mt: 4,
                    width: { md: 'calc(50% - 16px)' },
                    ...(firstVision && {
                      top: { md: 0 },
                      left: { md: 0 },
                      bottom: { md: 0 },
                      my: { md: 'auto' },
                      boxShadow: { md: 0 },
                      maxHeight: { md: 304 },
                      display: { md: 'flex' },
                      position: { md: 'absolute' },
                      flexDirection: { md: 'column' },
                      justifyContent: { md: 'center' },
                    }),
                    ...(secondVision && {
                      boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
                    }),
                    ...(thirdVision && {
                      boxShadow: { md: 0 },
                    }),
                  }}
                >
                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{ color: 'text.disabled', opacity: 0.24, mb: 3 }}
                  >
                    {`0${index + 1}`}
                  </Typography>

                  <Typography variant="h4" paragraph>
                    {title}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{body}</Typography>
                </Card>
              );
            })}
          </Stack>
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

  if (!region) {
    return null;
  }
  const { caption: location } = region;
  const coverUrl = urlFor(region.asset).width(400).height(400).url();

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
