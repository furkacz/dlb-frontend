const routes = [
  {
    path: '/',
    name: 'Start',
    component: () => import('@/containers/Start'),
    production: true,
  },
  {
    path: '/debug',
    name: 'Debug',
    component: () => import('@/containers/Debug'),
    production: false,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
    production: true,
  },
];

export default routes;
