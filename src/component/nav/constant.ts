export const routes = [
  {
    name: 'Move Freely',
    link: '/services',

    subRoutes: [
      {
        name: 'Pickup Services',
        link: '/service/web-development',
      },
      {
        name: 'Hire a bus',
        link: '/service/mobile-development',
      },
    ],
  },

  {
    name: 'Do Freely',
    link: '/freely',

    subRoutes: [
      {
        name: 'Bills payment',
        link: '/service/web-development',
      },
      {
        name: 'Enterprise',
        link: '/service/mobile-development',
      },
    ],
  },

  {
    name: 'Suggest Routes',
    link: '/products',
  },
];
