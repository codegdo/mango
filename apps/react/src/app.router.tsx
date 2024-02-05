import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { AppGuard, AuthGuard } from './app.guard';
import { Layout } from './app.layout';

const Welcome = lazy(() => import('./pages/dashboard/dashboard.welcome'));
const Login = lazy(() => import('./pages/auth/login/login.form'));
const Signup = lazy(() => import('./pages/auth/signup/signup.form'));
const WebPage = lazy(() => import('./pages/page.webpage'));

const routes = [
  {
    element: <AppGuard />,
    children: [
      {
        path: '/welcome',
        element: (
          <Layout module='dashboard' view='welcome' component={Welcome} />
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
        element: <Layout module='auth' view='login' component={Signup} />,
      },
    ],
  },
  {
    path: '*',
    element: <Layout module='webpage' view='*' component={WebPage} />,
  },
];

export const router = createBrowserRouter(routes);
