import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { Layout } from '@/app.layout';

const Login = lazy(() => import('./login/login.form'));
const NotFound = lazy(() => import('../page.not-found'));

function AuthRoute() {
  const routes = useRoutes([
    {
      path: '/login',
      element: <Layout module='auth' view='login' component={Login} />,
    },
    {
      path: '*',
      element: <Layout module='auth' view='notfound' component={NotFound} />,
    },
  ]);

  return routes;
}

export default AuthRoute;
