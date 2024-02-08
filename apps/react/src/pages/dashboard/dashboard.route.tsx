import { FC, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { ContextRouteProps } from '@/types';
const Welcome = lazy(() => import('./dashboard.index'));

interface IProps {
  layout: FC<ContextRouteProps & { component: FC<ContextRouteProps> }>;
}

function DashboardRoute({ layout: Layout }: IProps) {
  const routes = useRoutes([
    {
      path: '/welcome',
      element: <Layout module='dashboard' view='welcome' component={Welcome} />,
    },
  ]);

  return routes;
}

export default DashboardRoute;
