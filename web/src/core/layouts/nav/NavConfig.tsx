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
      { title: 'Reconciliation', path: Routes.reconcilliation},
      { title: 'Meet Our Team', path: Routes.ourTeam },
      { title: 'Cultural Authenticity', path: Routes.culturalAuthenticity },
    ],
  },
  {
    order: '2',
    subheader: 'Things To Do',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/ee689889b3c6d4de316174a9584dc71ad6899e7c-2832x2832.jpg?fp-x=0.5122549019607844&fp-y=0.4068627450980393&auto=format&fit=crop&crop=focalpoint&w=384&h=216',
    items: [
      { title: 'Things To Do', path: Routes.thingsToDo },
      { title: 'Discover Indigenous Tourism', path: Routes.operators},
    ],
  },
  {
    order: '3',
    subheader: 'Places To Go',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/ee689889b3c6d4de316174a9584dc71ad6899e7c-2832x2832.jpg?fp-x=0.5122549019607844&fp-y=0.4068627450980393&auto=format&fit=crop&crop=focalpoint&w=384&h=216',
    items: [
      { title: 'Things To Do', path: Routes.thingsToDo },
      { title: 'Discover Indigenous Tourism', path: Routes.operators},
    ],
  },
  {
    order: '4',
    subheader: 'Members',
    cover: 'https://cdn.sanity.io/images/uimvg3pl/production/ba8ef63228996208f4db7982101914caa2d10cc0-5791x3861.jpg?fp-x=0.5128913443830572&fp-y=0.6907985333399698&auto=format&fit=crop&crop=focalpoint&w=384&h=216',
    items: [
      { title: 'Membership Benefits', path: Routes.members.landing},
      { title: 'Become a Member', path: Routes.members.membershipApplication},
      { title: 'Members', path: Routes.members.newAccountRequest},

    ],
  },
  {
    order: '5',
    subheader: 'Discover',
    items: [
      { title: 'Accomodations', path: Routes.thingsToDo },
      { title: 'Culinary', path: Routes.operators},
      { title: 'Attactions', path: Routes.thingsToDo },
      { title: 'Events', path: Routes.thingsToDo },
      { title: 'Outdoors & Adventure', path: Routes.thingsToDo },
      { title: 'Tours & Related Services', path: Routes.thingsToDo },
      { title: 'Workshops, Arts & Culture', path: Routes.thingsToDo },
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
  { title: 'Map', path: '?imv=true'},// path is irrelevant this is solved on the Link in DesktopNavigation
];

