// routes
import Routes from 'src/routes';
// _data
import { _tours, _jobs, _courses } from '_data/mock';

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'About ITM',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/c7d834475ab88cf7717c59b726488933a07aa768-2500x1500.jpg?fp-x=0.4965753424657535&fp-y=0.8966894977168942&auto=format&fit=crop&crop=focalpoint&w=3840&h=2160&q=10',
    items: [
      { title: 'Who We Are', path: Routes.whoWeAre},
      { title: 'What We Do', path: Routes.whatWeDo},
      { title: 'Reconciliation', path: Routes.reconciliation},
      { title: 'Meet Our Team', path: Routes.ourTeam },
    ],
  },
  {
    order: '2',
    subheader: 'Indigenous Tourism',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/ee689889b3c6d4de316174a9584dc71ad6899e7c-2832x2832.jpg?fp-x=0.5122549019607844&fp-y=0.4068627450980393&auto=format&fit=crop&crop=focalpoint&w=3840&h=2160&q=10',
    items: [
      { title: 'Things To Do', path: Routes.thingsToDo },
      { title: 'Cultural Authenticity', path: Routes.culturalAuthenticity },
      { title: 'Explore Indigenous Tourism', path: Routes.explore.landing},
    ],
  },
  {
    order: '3',
    subheader: 'Members',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/ba8ef63228996208f4db7982101914caa2d10cc0-5791x3861.jpg?fp-x=0.5128913443830572&fp-y=0.6907985333399698&auto=format&fit=crop&crop=focalpoint&w=3840&h=2160&q=10',
    items: [
      { title: 'Members', path: Routes.members},
      { title: 'Become a Member', path: Routes.membership},
      { title: 'Prairie', path: Routes.explore.praire },
      { title: 'Shield', path: Routes.explore.events },

    ],
  },
  {
    order: '4',
    subheader: 'News & Events',
    cover: 'https://placekitten.com/1000/600',
    items: [
      { title: 'News', path: Routes.discover.news },
      { title: 'Events', path: Routes.discover.events },
      { title: 'Contact Us', path: Routes.discover.contactUs },
    ],
  },
];


export const navConfig = [
  { title: 'Home', path: '/' },
  {
    title: 'Explore',
    path: '/explore',
    children: PageLinks
  },
  { title: 'Members', path: '/membership' },
  { title: 'Map', path: '?open_map=true' },
];

