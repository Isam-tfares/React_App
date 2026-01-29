export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  auth: {
    login: {
      path: '/auth/login',
      getHref: (redirectTo) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    register: {
      path: '/auth/register',
      getHref: (redirectTo) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },

  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    dashboard: {
      path: '/app/dashboard',
      getHref: () => '/app/dashboard',
    },
    stocks: {
      path: '/app/stocks',
      getHref: () => '/app/stocks',
    },
    finance: {
      path: '/app/finance',
      getHref: () => '/app/finance',
    },
    hr: {
      path: '/app/hr',
      getHref: () => '/app/hr',
    },
    users: {
      path: '/app/users',
      getHref: () => '/app/users',
    },
  },
};