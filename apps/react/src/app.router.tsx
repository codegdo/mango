import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./app.layout";
import { Guard } from "./app.guard";

const Login = lazy(() => import('./pages/auth/login/login.form'));
const Welcome = lazy(() => import('./pages/dashboard/dashboard.welcome'));

const routes = [
  {
    path: '/login',
    element: <Layout module="auth" component={Login} />
  },
  {
    element: <Guard />,
    children: [
      {
        path: '/',
        element: <Layout module="dashboard" component={Welcome} />
      }
    ]
  }
];

export const router = createBrowserRouter(routes);