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
      { title: 'Reconcilliation', path: Routes.reconciliation},
    ],
  },
  {
    order: '2',
    subheader: 'Membership',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/ba8ef63228996208f4db7982101914caa2d10cc0-5791x3861.jpg?fp-x=0.5128913443830572&fp-y=0.6907985333399698&auto=format&fit=crop&crop=focalpoint&w=3840&h=2160&q=10',
    items: [
      { title: 'Members', path: Routes.members},
      { title: 'Become a Member', path: Routes.membership},

    ],
  },
  {
    order: '3',
    subheader: 'Cultural Authenticity',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/d107abda4e74aaa722fee77c57d1a99c7f349425-9087x5111.jpg?fp-x=0.5&fp-y=0.5&auto=format&fit=crop&crop=focalpoint&w=3840&h=2160&q=10',
    items: [
      { title: 'Cultural Authenticity', path: Routes.culturalAuthenticity },
    ],
  },
  {
    order: '4',
    subheader: 'Things To Do',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/ee689889b3c6d4de316174a9584dc71ad6899e7c-2832x2832.jpg?fp-x=0.5122549019607844&fp-y=0.4068627450980393&auto=format&fit=crop&crop=focalpoint&w=3840&h=2160&q=10',
    items: [
      { title: 'Things To Do', path: Routes.thingsToDo },
      { title: 'Discover Indigenous Tourism', path: Routes.operators},
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
  { title: 'Contact Us', path: Routes.contactUs },
  { title: 'Map', path: '?open_map=true' },
];

