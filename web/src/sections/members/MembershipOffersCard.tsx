import {
  Button,
  Card,
  Stack,
  Typography,

} from '@mui/material';

import { Image, Label } from 'src/core/components';

type Props = {
  plan: {
    license: string;
    price: string;
    icon: string;
    options: {
      title: string;
      disabled: boolean;
    }[];
  }
};

const MembershipOffersCard = ({ plan }: Props) => {
  const basicLicense = plan.license === 'Basic';

  const starterLicense = plan.license === 'Starter';

  const premiumLicense = plan.license === 'Premium';
  return (
    <Card
      sx={{
        p: 5,
        textAlign: 'center',
        boxShadow: (theme) => theme.customShadows.z8,
        ...(starterLicense && {
          py: 8,
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      {starterLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 16, right: 16 }}>
          POPULAR
        </Label>
      )}

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

        <Stack spacing={1} sx={{ textAlign: 'center' }}>
          <Typography variant="h5" component="span">
            {'Benefits'}
          </Typography>
          {plan.options.map((option) => (
            <Typography
              key={option.title}
              variant={option.disabled ? 'body2' : 'subtitle2'}
              sx={{
                ...(option.disabled && {
                  color: 'text.disabled',
                  textDecoration: 'line-through',
                }),
              }}
            >
              {option.title}
            </Typography>
          ))}
        </Stack>

        <Button
          fullWidth
          disabled={basicLicense}
          size="large"
          variant={basicLicense ? 'outlined' : 'contained'}
          color={premiumLicense ? 'primary' : 'inherit'}
        >
          {basicLicense && 'Current Plan'}
          {starterLicense && 'Choose Starter'}
          {premiumLicense && 'Choose Premium'}
        </Button>
      </Stack>
    </Card>
  );
}

export default MembershipOffersCard;
