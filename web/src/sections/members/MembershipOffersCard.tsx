import {
  Button,
  Card,
  Divider,
  Stack,
  Typography,
  Box,
} from '@mui/material';
import NextLink from 'next/link';

import { Image } from 'src/core/components';
import Routes from 'src/routes';

type Props = {
  plan: {
    license: string;
    price: string;
    icon: string;
    requirements: {
      title: string;
      disabled: boolean;
    }[];
    options: {
      title: string;
      disabled: boolean;
    }[];
  }
  index: number;
};

const MembershipOffersCard = ({ plan, index}: Props) => {
  return (
    <Card
      sx={{
        p: 5,
        textAlign: 'center',
        boxShadow: (theme) => theme.customShadows.z8,
        ...(index == 0 && {
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      <Stack spacing={5} alignItems="center">
        <Typography variant="overline" component="div" sx={{ color: 'text.secondary' }}>
          {plan.license}
        </Typography>

        <Image alt={plan.icon} src={plan.icon} sx={{ width: 80, height: 80 }} />

        <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5}>

          <Typography variant="h3" component="span">
            {plan.price}
          </Typography>

        </Stack>

        <Stack spacing={1} sx={{ textAlign: 'start' }}>

          <Typography variant="h5" component="span" sx={{ pt: 3}}>
            {'Eligibility'}
          </Typography>

          {plan.requirements.map((option) => (
            <Typography
              key={option.title}
              variant={option.disabled ? 'body2' : 'subtitle2'}
              sx={{
                  pl: 1,
                ...(option.disabled && {
                  color: 'text.disabled',
                  textDecoration: 'line-through',
                }),
              }}
            >
              {option.title}
            </Typography>
          ))}
          <Divider sx={{ pt: 3 }} />

          <Typography variant="h5" component="span" sx={{ pt:1 }}>
            {'Benefits'}
          </Typography>
          <Box sx={{ mt: 3, minHeight: 250 }} >
          {plan.options.map((option) => (
            <Typography
              key={option.title}
              variant={option.disabled ? 'body2' : 'subtitle2'}
              sx={{
                  pl: 1,
                  mt: 1,
                ...(option.disabled && {
                  color: 'text.disabled',
                  textDecoration: 'line-through',
                }),
              }}
            >
              {option.title}
            </Typography>
          ))}
          </Box>
        </Stack>

        <Button
          fullWidth
          size="large"
          variant={index == 0 ? 'outlined' : 'contained'}
          color={index == 2 ? 'primary' : 'inherit'}
        >

          <NextLink href={Routes.members.membershipApplication}>
          {index == 0 && 'Get Started'}
          {index == 1 && 'Apply Now'}
          {index == 2 && 'Become a Member'}
          </NextLink>
        </Button>
      </Stack>
    </Card>
  );
}

export default MembershipOffersCard;
