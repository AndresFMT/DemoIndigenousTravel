// routes
import Routes from 'src/routes';
// _data
import { _tours, _jobs, _courses } from '_data/mock';

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'Indigenous Tourism Manitoba',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Who We Are', path: Routes.whoweare},
      { title: 'What We Do', path: Routes.whatWeDo},
      { title: 'Reconcilliation', path: Routes.reconciliation},
    ],
  },
  {
    order: '2',
    subheader: 'Members',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'About Us', path: Routes.aboutUs},
      { title: 'Membership', path: Routes.membership},
      { title: 'Contact Us', path: Routes.contactUs},
    ],
  },
];

export const navConfig = [
  { title: 'Who We Are', path: '/' },
  { title: 'What We Do', path: '/what-we-do'},
  { title: 'About Us', path: '/about-us'},
  { title: 'Membership', path: '/membership'},
  { title: 'Reconciliation', path: '/reconciliation'},
];

