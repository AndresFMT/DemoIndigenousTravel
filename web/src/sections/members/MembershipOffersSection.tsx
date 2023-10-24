import { Box, Container, Typography } from '@mui/material';

import MembershipOffersCard from './MembershipOffersCard';

const _pricing01 = [
  {
    license: 'In Development',
    price: 'Free',
    icon: '/pricing/ic_plan_basic01.svg',
    options: [
      { title: 'Included in Newsletter & Blog Promotion', disabled: false },
      { title: 'Access Event Promotion', disabled: false },
      { title: 'Link on ITM Website', disabled: false },
      { title: 'AGM Voting Power', disabled: true},
      { title: 'Board Representation', disabled: true},
      { title: 'Marketing Programs and Co-op Partnerships', disabled: true},
    ],
  },
  {
    license: 'Visitor Ready',
    price: 'Free',
    icon: '/pricing/ic_plan_starter01.svg',
    options: [
      { title: 'Included in Newsletter & Blog Promotion', disabled: false },
      { title: 'Access Event Promotion', disabled: false },
      { title: 'Link on ITM Website', disabled: false },
      { title: 'AGM Voting Power', disabled: true},
      { title: 'Board Representation', disabled: true},
      { title: 'Marketing Programs and Co-op Partnerships', disabled: true},
    ],
  },
  {
    license: 'Market or Export Ready',
    price: 'Free',
    icon: '/pricing/ic_plan_premium01.svg',
    options: [
      { title: 'Included in Newsletter & Blog Promotion', disabled: false },
      { title: 'Access Event Promotion', disabled: false },
      { title: 'Link on ITM Website', disabled: false },
      { title: 'AGM Voting Power', disabled: false },
      { title: 'Board Representation', disabled: false },
      { title: 'Marketing Programs and Co-op Partnerships', disabled: false },
    ],
  },
];

const MembershipOffersSection = () => {
  return (
    <Container
      sx={{
        minHeight: 1,
        pt: { xs: 13, md: 16 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h3" align="center" paragraph>
        Flexible plans for your
        <br /> community&apos;s size and needs
      </Typography>

      <Typography align="center" sx={{ color: 'text.secondary' }}>
        Choose your plan and make modern online conversation magic
      </Typography>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {_pricing01.map((plan) => (
          <MembershipOffersCard key={plan.license} plan={plan} />
        ))}
      </Box>
    </Container>
  )
}

export default MembershipOffersSection;

