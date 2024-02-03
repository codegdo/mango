import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { Layout } from '@/app.layout';
import NotFound from '../page.not-found';

const Welcome = lazy(() => import('./dashboard.welcome'));

function DashboardRoute() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout module='dashboard' view='welcome' component={Welcome} />,
    },
    {
      path: '*',
      element: (
        <Layout module='dashboard' view='notfound' component={NotFound} />
      ),
    },
  ]);

  return routes;
}

export default DashboardRoute;
