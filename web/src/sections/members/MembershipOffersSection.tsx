import { Box, Container, Divider, Typography } from '@mui/material';

import MembershipOffersCard from './MembershipOffersCard';

const _pricing01 = [
  {
    license: 'Non Market Ready Indigenous Tourism Experiences',
    price: 'Free',
    icon: '/pricing/in_development_icon.svg',
    requirements: [
      { title: 'Business (Idea) Currently in Development', disabled: false },
      { title: 'Set Business Hours', disabled: true },
      { title: 'Business Location', disabled: true },
      { title: 'Required Staff Employed', disabled: true },
      { title: 'Relevant Promotional Material', disabled: true },
      { title: 'Meets Market Ready Criteria', disabled: true },
    ],
    options: [
      { title: 'Development Support', disabled: false },
      { title: 'One on one mentorship through a Product Development Expert', disabled: false },
      { title: 'Access to data, studies and research', disabled: false },
      { title: 'Eligible for ITM training and capacity development programs', disabled: false },
      { title: 'Networking Opportunities', disabled: false },
      { title: 'Advocacy and political representation by ITM', disabled: false },
      { title: 'Participation in ITM events', disabled: false },
      { title: 'Access to ITM annual general meeting as a non-voting organization', disabled: false },
      { title: 'Access to support and resources via ITM’s partners at Travel Manitoba and the ITAC', disabled: false },
    ],
  },
  {
    license: 'Industry Partner',
    price: 'Free',
    icon: '/pricing/visitor_ready_icon.svg',
    requirements: [
      { title: 'Business in Operation', disabled: false },
      { title: 'Set Business Hours', disabled: false },
      { title: 'Business Location', disabled: false },
      { title: 'Required Staff Employed', disabled: false },
      { title: 'Relevant Promotional Material', disabled: true},
      { title: 'Meets Market Ready Criteria', disabled: true},
    ],
    options: [
      { title: 'Guidance when working with Indigenous tourism partners', disabled: false },
      { title: 'Access to data, studies and research', disabled: false },
      { title: 'Eligible for ITM training and capacity development programs', disabled: false },
      { title: 'Networking Opportunities', disabled: false },
      { title: 'Advocacy and political representation by ITM', disabled: false },
      { title: 'Participation in ITM events', disabled: false },
      { title: 'Access to ITM annual general meeting as a non-voting organization', disabled: false },
      { title: 'Access to support and resources via ITM’s partners at Travel Manitoba and the ITAC', disabled: false },
      { title: 'Priority on call for proposals', disabled: false },
    ],
  },
  {
    license: 'Market Ready Indigenous Tourism Experiences',
    price: 'Free',
    icon: '/pricing/market_ready_icon.svg',
    requirements: [
      { title: 'Business in Operation', disabled: false },
      { title: 'Set Business Hours', disabled: false },
      { title: 'Business Location', disabled: false },
      { title: 'Required Staff Employed', disabled: false },
      { title: 'Relevant Promotional Material', disabled: false },
      { title: 'Meets Market Ready Criteria', disabled: false },
    ],
    options: [
      { title: 'All benefits of other categories and:', disabled: false },
      { title: 'Business listing on Indigenous Tourism Manitoba’s experiences web page', disabled: false },
      { title: 'Experience will be featured in ITM sales and travel trade activities', disabled: false },
      { title: 'Ability to be included in provincial press and trade familiarization trips', disabled: false },
      { title: 'Ability to be included in provincial itinerary development and story ideas', disabled: false },
      { title: 'Images will be prioritized for marketing and communication materials', disabled: false },
      { title: 'Ability to apply for subsidized registration at travel trade shows and marketplaces', disabled: false },
      { title: 'Access to ITM annual general meeting as a voting organization', disabled: false },
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

