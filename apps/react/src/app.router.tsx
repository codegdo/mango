import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./app.layout";
//import Welcome from "./pages/dashboard/dashboard.welcome";
const Welcome = lazy(() => import('./pages/dashboard/dashboard.welcome'));

const routes = [
  {
    path: '/',
    element: <Layout module="dashboard" component={Welcome} />
  }
];

export const router = createBrowserRouter(routes);