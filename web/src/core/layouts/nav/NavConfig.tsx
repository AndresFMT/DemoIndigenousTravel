// routes
import Routes from 'src/routes';

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'About ITM',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/c7d834475ab88cf7717c59b726488933a07aa768-2500x1500.jpg?fp-x=0.4965753424657535&fp-y=0.8966894977168942&auto=format&fit=crop&crop=focalpoint&w=384&h=216',
    items: [
      { title: 'Who We Are', path: Routes.whoWeAre},
      { title: 'What We Do', path: Routes.whatWeDo},
      { title: 'Reconciliation', path: Routes.reconciliation },
      { title: 'Meet Our Team', path: Routes.ourTeam },
    ],
  },
  {
    order: '2',
    subheader: 'Experience',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/ee689889b3c6d4de316174a9584dc71ad6899e7c-2832x2832.jpg?fp-x=0.5122549019607844&fp-y=0.4068627450980393&auto=format&fit=crop&crop=focalpoint&w=384&h=216',
    items: [
      { title: 'Things To Do', path: Routes.thingsToDo },
      { title: 'Operators', path: Routes.operators },
    ],
  },
  {
    order: '4',
    subheader: 'Members',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/a13bbb2f19eceef2666fe39d02861634cf13f6ad-6720x4480.jpg?fp-x=0.5128913443830572&fp-y=0.6907985333399698&auto=format&fit=crop&crop=focalpoint&w=384&h=216',
    items: [
      { title: 'Membership Benefits', path: Routes.members.landing },
      { title: 'Become a Member', path: Routes.members.membershipApplication },
    ],
  },
  {
    order: '5',
    subheader: 'Discover',
    items: [
      { title: 'Accommodations', path: Routes.operatorsCategoryFilter('accommodation') },
      { title: 'Attractions', path: Routes.operatorsCategoryFilter('attractions') },
      { title: 'Events', path: Routes.operatorsCategoryFilter('events') },
      { title: 'Outdoors & Adventure', path: Routes.operatorsCategoryFilter('outdoors-and-adventure') },
      { title: 'Culinary', path: Routes.operatorsCategoryFilter('culinary') },
      { title: 'Tours & Related Services', path: Routes.operatorsCategoryFilter('tours') },
      { title: 'Workshops, Arts & Culture', path: Routes.operatorsCategoryFilter('workshops') },
      { title: 'Retail & Other', path: Routes.operatorsCategoryFilter('retail') },
      { title: 'North', path: Routes.operatorsRegionFilter('north') },
      { title: 'East', path: Routes.operatorsRegionFilter('east') },
      { title: 'South', path: Routes.operatorsRegionFilter('south') },
      { title: 'West', path: Routes.operatorsRegionFilter('west') },
    ],
  },
];


const HeaderLinks = [

  {
    order: '2',
    subheader: 'Things To Do',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/ee689889b3c6d4de316174a9584dc71ad6899e7c-2832x2832.jpg?fp-x=0.5122549019607844&fp-y=0.4068627450980393&auto=format&fit=crop&crop=focalpoint&w=384&h=216',
    items: [
      { title: 'Things To Do', path: Routes.thingsToDo },
      { title: 'Operators', path: Routes.operators },
    ],
  },
  {
    order: '3',
    subheader: 'Places To Go',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/5d84a8e52123785bad9adabc9f737479bbfa2064-5472x3648.jpg?fp-x=0.5&fp-y=0.5&auto=format&fit=crop&crop=focalpoint&w=384&h=216',
    items: [
      { title: 'Places To Go', path: Routes.placesToGo },
      { title: 'Operators', path: Routes.operators },

    ],
  },
]

export const navConfig = [
  { title: 'Home', path: '/' },
  {
    title: 'Explore',
    path: '/explore',
    children: [PageLinks[0], PageLinks[1],  PageLinks[2], PageLinks[3]],
  },
  { title: 'Contact Us', path: Routes.contactUs },
  { title: 'Map', path: '?imv=true' },// path is irrelevant this is solved on the Link in DesktopNavigation
];

