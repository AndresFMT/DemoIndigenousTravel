// ----------------------------------------------------------------------

const Routes = {
  // Marketing
  marketing: {
    landing: '/marketing',
    services: '/marketing/services',
    caseStudies: '/marketing/case-studies',
    caseStudy: (slug) => `/marketing/case-studies/${slug}`,
    posts: '/marketing/blog',
    post: (slug) => `/marketing/blog/${slug}`,
    about: '/marketing/about-us',
    contact: '/marketing/contact-us',
  },
  // Travel
  travel: {
    landing: '/travel',
    tours: '/travel/tours',
    tour: (id) => `/travel/tours/${id}`,
    checkout: '/travel/checkout',
    checkoutComplete: '/travel/checkout/complete',
    posts: '/travel/blog',
    post: (slug) => `/travel/blog/${slug}`,
    about: '/travel/about-us',
    contact: '/travel/contact-us',
  },
  // Career
  career: {
    landing: '/career',
    jobs: '/career/jobs',
    job: (id) => `/career/jobs/${id}`,
    posts: '/career/blog',
    post: (slug) => `/career/blog/${slug}`,
    about: '/career/about-us',
    contact: '/career/contact-us',
  },
  // E-Learning
  eLearning: {
    landing: '/e-learning',
    courses: '/e-learning/courses',
    course: (id) => `/e-learning/courses/${id}`,
    posts: '/e-learning/blog',
    post: (slug) => `/e-learning/blog/${slug}`,
    about: '/e-learning/about-us',
    contact: '/e-learning/contact-us',
  },
  // Explore ITM
  explore: {
    landing: '/explore',
    whoWeAre: '/explore/who-we-are',
    thingsToDo: '/explore/things-to-do',
    placesToStay: '/explore/places-to-stay',
    placesToEat: '/explore/places-to-eat',
    tundra: '/explore/tundra',
    urban: '/explore/urban',
    shield: '/explore/shield',
    praire: '/explore/prairie',
    news: '/explore/news',
    newsArticle: (slug) => `/explore/news/${slug}`,
    events: '/explore/events',
    event: (slug) => `/explore/events/${slug}`,
    contactUs: '/explore/contact-us',
    culturalAuthenticity: '/explore/cultural-authenticity',

    pastEvents: '/explore/past-events',

  },
  // Discover ITM
  discover: {
    landing: '/discover',
    whoWeAre: '/discover/who-we-are',
    ourTeam: '/discover/our-team',

    whatWeDo: '/discover/what-we-do',
    membership: '/discover/membership',
    reconciliation: '/discover/reconciliation',

    news: '/discover/news',
    newsArticle: (slug) => `/discover/news/${slug}`,

    events: '/discover/events',
    event: (slug) => `/discover/events/${slug}`,

    contactUs: '/discover/contact-us',
  },
  // Common
  loginCover: '/auth/login-cover',
  registerCover: '/auth/register-cover',
  loginIllustration: '/auth/login-illustration',
  registerIllustration: '/auth/register-illustration',
  resetPassword: '/auth/reset-password',
  verifyCode: '/auth/verify-code',
  maintenance: '/maintenance',
  comingsoon: '/coming-soon',
  pricing01: '/pricing-01',
  pricing02: '/pricing-02',
  checkout: '/checkout',
  support: '/support',
  page404: '/404',
  page500: '/500',
  // Others
  pages: '/pages',
  componentsUI: '/components-ui',
  componentUI: (slug) => `/components-ui/${slug}`,
  muiComponents: 'https://mui.com/components',
  docs: 'https://zone-docs.vercel.app',
  license: '#',
  minimalDashboard: '#',
  buyNow: '#',
  whoWeAre: '/about-itm',
  whatWeDo: '/what-we-do',
  ourTeam: '/our-team',
  aboutUs: '/about-us',
  membership: '/membership',
  reconciliation: '/reconciliation',
  contactUs: '/contact-us',
};

export default Routes;

