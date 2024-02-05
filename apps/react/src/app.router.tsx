import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Auth, Guard } from './app.guard';
import { Layout } from './app.layout';

const Welcome = lazy(() => import('./pages/dashboard/dashboard.welcome'));
const Login = lazy(() => import('./pages/auth/login/login.form'));
const NotFound = lazy(() => import('./pages/page.not-found'));

const routes = [
  {
    element: <Guard />,
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
    element: <Auth />,
    children: [
      {
        path: '/login',
        element: <Layout module='auth' view='login' component={Login} />,
      },
    ],
  },
  {
    path: '*',
    element: <Layout module='auth' view='notfound' component={NotFound} />,
  },
];

export const router = createBrowserRouter(routes);
