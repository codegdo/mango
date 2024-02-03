import { lazy } from "react";
import { useRoutes } from "react-router-dom";

import { Layout } from "../../app.layout";

const Login = lazy(() => import('./login/login.form'));

function AuthRoute() {
  const routes = useRoutes([
    {
      path: '/login',
      element: <Layout module='auth' view='login' component={Login} />
    },
    {
      path: '*',
      element: <div>NOT FOUND</div>
    }
  ]);

  return routes;
}

export default AuthRoute;
