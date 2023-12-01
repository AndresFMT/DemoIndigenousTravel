import NextLink from 'next/link';
import { Card, Stack, Typography } from '@mui/material'
import { urlFor } from 'integrations/sanity.image';

import { Image } from 'src/core/components'

const OperatorCard = (props: any) => {
  const { operator } = props;
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
      <Image src={image} alt={operator.name} ratio="1/1" />
      <Stack spacing={0.5} sx={{ p: 2.5 }}>
        <Typography variant="h6" sx={{ color: 'secondary.orange', textTransform: 'capitalize' }}>
          {operator.region}
        </Typography>

        <Typography variant="h6" sx={{ lineHeight: '1.2rem', pb: 2, overflow: 'hidden', '&:hover': { textDecoration: 'underline' } }}>
          <NextLink
            passHref
            legacyBehavior
            href={{
              pathname: '/operators/[slug]',
              query: { slug: operator.slug.current }
            }}
            color="inherit">
            {operator.name}
          </NextLink>
        </Typography>
      </Stack>

    </Card>

  )
};

export default OperatorCard;

