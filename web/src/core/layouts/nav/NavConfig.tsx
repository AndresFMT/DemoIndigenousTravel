// routes
import Routes from 'src/routes';
// _data
import { _tours, _jobs, _courses } from '_data/mock';

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'About ITM',
    cover: 'https://placekitten.com/g/900/500',
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
    cover: 'https://placekitten.com/g/1600/900',
    items: [
      { title: 'Explore Indigenous Tourism', path: Routes.explore.landing},
      { title: 'Things To Do', path: Routes.explore.thingsToDo },
      { title: 'Cultural Authenticity', path: Routes.explore.culturalAuthenticity },
    ],
  },
  {
    order: '3',
    subheader: 'Explore Manitoba',
    cover: 'https://placekitten.com/1600/900',
    items: [
      { title: 'Tundra', path: Routes.explore.tundra },
      { title: 'Urban', path: Routes.explore.urban },
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

