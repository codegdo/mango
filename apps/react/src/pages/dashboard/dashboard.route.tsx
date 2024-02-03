import { lazy } from "react";
import { useRoutes } from "react-router-dom";

import { Layout } from "../../app.layout";

const Welcome = lazy(() => import('./dashboard.welcome'));

function DashboardRoute() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout module='dashboard' view='welcome' component={Welcome} />
    }
  ]);

  return routes;
}

export default DashboardRoute;
