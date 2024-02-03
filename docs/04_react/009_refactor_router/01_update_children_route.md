# Refactor Children Route

The current structure shows that `app.layout.tsx` is not well organized. We aim to improve the organization by moving `app.layout.tsx` to `app.router.tsx`, where we can pass it as a prop callback to children routes. This approach enhances manageability in `app.router.tsx` and improves the overall flow. As a result, `app.route.tsx` will be modified as follows:

```tsx
import { createBrowserRouter } from 'react-router-dom';
import { Guard } from './app.guard';
import { Layout } from './app.layout';
import AuthRoute from './pages/auth/auth.route';
import DashboardRoute from './pages/dashboard/dashboard.route';

const routes = [
  {
    element: <Guard />,
    children: [
      {
        path: 'dashboard/*',
        element: <DashboardRoute layout={Layout} />,
      },
    ],
  },
  {
    path: '/*',
    element: <AuthRoute layout={Layout} />,
  },
];

export const router = createBrowserRouter(routes);
```

## Update `DashboardRoute`

Since we are passing the layout as a prop, we can remove the import of Layout from dashboard.route.tsx. Additionally, we create an IProps interface for DashboardRoute.

```tsx
import { FC, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { ContextProps } from '@/types';
const Welcome = lazy(() => import('./dashboard.welcome'));
const NotFound = lazy(() => import('../page.not-found'));

interface IProps {
  layout: FC<ContextProps & { component: FC<ContextProps> }>;
}

function DashboardRoute({ layout: Layout }: IProps) {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout module='dashboard' view='welcome' component={Welcome} />,
    },
    {
      path: '*',
      element: <Layout module='auth' view='notfound' component={NotFound} />,
    },
  ]);

  return routes;
}

export default DashboardRoute;
```

## Update `AuthRoute`

Similar to the previous step, we clean up and remove the import of Layout from auth.route.tsx. We also create an IProps interface for AuthRoute.

```tsx
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
```

These changes optimize the structure by centralizing layout management in app.router.tsx, making it more streamlined and maintainable.
