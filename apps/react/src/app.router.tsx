import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import { App } from './app.component';
import { MainGuard, AuthGuard, PageGuard } from './app.guard';
import { Layout } from './app.layout';

const Dashboard = lazy(() => import('./pages/dashboard/dashboard.index'));
const Login = lazy(() => import('./pages/auth/login/login.form'));
const Signup = lazy(() => import('./pages/auth/signup/signup.form'));
const DynamicPage = lazy(() => import('./pages/page.dynamic'));
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
        element: <MainGuard />,
        children: [
          {
            path: '/',
            element: <Navigate to='/dashboard' />,
          },
          {
            path: '/dashboard',
            element: <Layout title='Dashboard' module='dashboard' view='index' component={Dashboard} />,
          },
        ],
      },
      {
        element: <AuthGuard />,
        children: [
          {
            path: '/login',
            element: <Layout title='Login' module='auth' view='login' component={Login} />,
          },
          {
            path: '/signup',
            element: <Layout title='Signup' module='auth' view='signup' component={Signup} />,
          },
        ],
      },
      {
        element: <PageGuard notFound={() => <Layout module='notfound' view='*' component={NotFoundPage} />} />,
        children: [
          {
            path: '*',
            element: <Layout module='content' view='*' component={DynamicPage} />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

// npx madge src/app.router.tsx --image src/app.graph.png --warning
