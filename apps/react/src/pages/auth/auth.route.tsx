import { FC, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { ContextRouteProps } from '@/types';

const Login = lazy(() => import('./login/login.form'));
const NotFound = lazy(() => import('../page.notfound'));

interface IProps {
  layout: FC<ContextRouteProps & { component: FC<ContextRouteProps> }>;
}

function AuthRoute({ layout: Layout }: IProps) {
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
