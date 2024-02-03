# Splitting Router Into Mulitple Nested Routes

## 1. Create Auth Route

Navigate to the auth folder and create a new file named auth.route.tsx.

```tsx
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { Layout } from '../../app.layout';

const Login = lazy(() => import('./login/login.form'));

function AuthRoute() {
  const routes = useRoutes([
    {
      path: '/login',
      element: <Layout module='auth' view='login' component={Login} />,
    },
    {
      path: '*',
      element: <div>NOT FOUND</div>,
    },
  ]);

  return routes;
}

export default AuthRoute;
```

## 2. Create Dashboard Route

Navigate to the dashboard folder and create a new file named dashboard.route.tsx.

```tsx
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { Layout } from '../../app.layout';

const Welcome = lazy(() => import('./dashboard.welcome'));

function DashboardRoute() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout module='dashboard' view='welcome' component={Welcome} />,
    },
  ]);

  return routes;
}

export default DashboardRoute;
```

## 3. Update App Router

Navigate to app.router.tsx and import auth.route.tsx and dashboard.route.tsx. Remove the import statements for the Login and Welcome components.

```tsx
import { createBrowserRouter } from 'react-router-dom';
import { Guard } from './app.guard';
import AuthRoute from './pages/auth/auth.route';
import DashboardRoute from './pages/dashboard/dashboard.route';

const routes = [
  {
    element: <Guard />,
    children: [
      {
        path: 'dashboard/*',
        element: <DashboardRoute />,
      },
    ],
  },
  {
    path: '*',
    element: <AuthRoute />,
  },
];

export const router = createBrowserRouter(routes);
```

The first route with path: 'dashboard/\*' is intended to handle any sub-routes under /dashboard/ when protected by the <Guard /> component. It associates the DashboardRoute component with such routes.

The second route with path: '\*' serves as a catch-all route. If the URL doesn't match the dashboard pattern, it defaults to the <AuthRoute /> component. This might be a login page or an authentication-related route.

In the context of the React Router, the path property specifies the URL path that the route should match. The '_' and 'dashboard/_' are examples of path patterns.

path: 'dashboard/\*':

This path pattern means that the route will match any URL that starts with /dashboard/ and can have any additional segments after that (_is a wildcard for any characters).
For example, it will match /dashboard/home, /dashboard/profile, /dashboard/settings, and so on.
path: '_':

This is a wildcard path that matches any URL. It is often used as a fallback or a catch-all route when no other specific route matches the given URL.
For example, if none of the defined routes match the current URL, the route with path: '\*' will be used, and it might be configured to display a "Not Found" page or handle the situation in some specific way.

Make sure to replace "./path/to/auth.route" and "./path/to/dashboard.route" with the actual relative paths to your auth.route.tsx and dashboard.route.tsx files.
