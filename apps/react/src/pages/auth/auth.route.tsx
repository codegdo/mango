import { FC, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { ContextProps } from '@/types';

const Login = lazy(() => import('./login/login.form'));
const NotFound = lazy(() => import('../page.not-found'));

interface IProps {
  layout: FC<ContextProps & { component: FC<ContextProps> }>;
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
