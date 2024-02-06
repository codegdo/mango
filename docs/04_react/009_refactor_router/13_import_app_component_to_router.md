# Import App Component to router

## Utilizing app.component.tsx for Effective Error Handling in the Router

### Root Path with Error Handling:

- We configure the root path in the router and incorporate an `errorElement` to handle error pages.
- The `errorElement` utilizes the `Layout` component to render the `ErrorPage` component, effectively managing exceptions.

### Index Route in AppGuard:

- Within the `AppGuard`, we establish an index route that redirects users to the dashboard.
- This ensures seamless redirection to the dashboard upon accessing the root path.

### Updated Code:

```tsx
import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import { App } from './app.component';
import { AppGuard, AuthGuard, WebPageGuard } from './app.guard';
import { Layout } from './app.layout';

const Dashboard = lazy(() => import('./pages/dashboard/dashboard.index'));
const Login = lazy(() => import('./pages/auth/login/login.form'));
const Signup = lazy(() => import('./pages/auth/signup/signup.form'));
const WebPage = lazy(() => import('./pages/page.webpage'));
const ErrorPage = lazy(() => import('./pages/page.error'));
const NotFoundPage = lazy(() => import('./pages/page.notfound'));

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: (
      <Layout module='error' view='exception' component={ErrorPage} />
    ),
    children: [
      {
        element: <AppGuard />,
        children: [
          {
            path: '/',
            element: <Navigate to='/dashboard' />,
          },
          {
            path: '/dashboard',
            element: (
              <Layout module='dashboard' view='index' component={Dashboard} />
            ),
          },
        ],
      },
      {
        element: <AuthGuard />,
        children: [
          {
            path: '/login',
            element: <Layout module='auth' view='login' component={Login} />,
          },
          {
            path: '/signup',
            element: <Layout module='auth' view='signup' component={Signup} />,
          },
        ],
      },
      {
        element: (
          <WebPageGuard
            renderNotFound={() => (
              <Layout module='error' view='notfound' component={NotFoundPage} />
            )}
          />
        ),
        children: [
          {
            path: '*',
            element: <Layout module='webpage' view='*' component={WebPage} />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
```
