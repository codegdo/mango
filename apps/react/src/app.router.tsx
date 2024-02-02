import { createBrowserRouter } from "react-router-dom";

import { Guard } from "./app.guard";
import AuthRoute from "./pages/auth/auth.route";
import DashboardRoute from "./pages/dashboard/dashboard.route";

const routes = [
  {
    element: <Guard />,
    children: [
      {
        path: 'dashboard/*',
        element: <DashboardRoute />
      }
    ]
  },
  {
    path: '*',
    element: <AuthRoute />
  },
];

export const router = createBrowserRouter(routes);