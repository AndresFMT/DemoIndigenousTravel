import { Box, Container, Divider, Typography } from '@mui/material';

import MembershipOffersCard from './MembershipOffersCard';

const _pricing01 = [
  {
    license: 'In Development',
    price: 'Free',
    icon: '/pricing/ic_plan_basic01.svg',
    requirements: [
      { title: 'Business (Idea) Currently in Development', disabled: false },
      { title: 'Set Business Hours', disabled: true },
      { title: 'Business Location', disabled: true },
      { title: 'Required Staff Employed', disabled: true },
      { title: 'Relevant Promotional Material', disabled: true },
      { title: 'Meets Market Ready Criteria', disabled: true },
    ],
    options: [
      { title: 'Networking Opportunities', disabled: false },
      { title: 'Advocacy by ITM to Industry Partners', disabled: false },
      { title: 'Access to ITM Research and Studies', disabled: false },
      { title: 'Invite to ITM Annual General Meeting', disabled: false },
      { title: 'Eligible for ITM Training and Capacity Development', disabled: false },
    ],
  },
  {
    license: 'Visitor Ready',
    price: 'Free',
    icon: '/pricing/ic_plan_starter01.svg',
    requirements: [
      { title: 'Business in Operation', disabled: false },
      { title: 'Set Business Hours', disabled: false },
      { title: 'Business Location', disabled: false },
      { title: 'Required Staff Employed', disabled: false },
      { title: 'Relevant Promotional Material', disabled: true},
      { title: 'Meets Market Ready Criteria', disabled: true},
    ],
    options: [
      { title: 'All "In-Development" Benefits', disabled: false },
      { title: 'Eligible To Be Included in Newsletter', disabled: false },
      { title: 'Included in Blog & Promotional Channels', disabled: false },
      { title: 'Event Promotion with ITM and Partners', disabled: false },
      { title: 'Listed on ITM Website', disabled: false },
    ],
  },
  {
    license: 'Market or Export Ready',
    price: 'Free',
    icon: '/pricing/ic_plan_premium01.svg',
    requirements: [
      { title: 'Business in Operation', disabled: false },
      { title: 'Set Business Hours', disabled: false },
      { title: 'Business Location', disabled: false },
      { title: 'Required Staff Employed', disabled: false },
      { title: 'Relavant Promotional Material', disabled: false },
      { title: 'Meets Market Ready Criteria', disabled: false },
    ],
    options: [
      { title: 'All "Visitor-Ready" Benefits', disabled: false },
      { title: 'AGM Voting Rights', disabled: false },
      { title: 'Board Representation', disabled: false },
      { title: 'Inclusion in Co-op Partnerships and Marketing Programs', disabled: false },
      { title: 'Included in ITM experience Guide', disabled: false },
      { title: 'Participate in Travel Trade Programs', disabled: false },
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
        Empowering Your Journey to Success
      </Typography>

      <Typography align="center" sx={{ color: 'text.secondary' }}>
        Our members program is designed to foster growth and support for Indigenous tourism businesses
        <br/>and organizations. We offer three levels of membership to meet you where you are on your journey to success.
      </Typography>

      <Box
        sx={{
          mt: 5,
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {_pricing01.map((plan, index) => (
          <MembershipOffersCard key={plan.license} plan={plan} index={index}/>
        ))}
      </Box>
    </Container>
  )
}

export default MembershipOffersSection;

