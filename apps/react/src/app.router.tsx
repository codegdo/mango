import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Guard } from './app.guard';
import { Layout } from './app.layout';
import AuthRoute from './pages/auth/auth.route';
import DashboardRoute from './pages/dashboard/dashboard.route';

const routes = [
  {
    element: <Guard />,
    children: [
      {
        path: '/',
        element: <Navigate to='dashboard' replace />,
      },
      {
        path: 'dashboard',
        element: <DashboardRoute layout={Layout} />,
      },
    ],
  },
  {
    path: '*',
    element: <AuthRoute layout={Layout} />,
  },
];

export const router = createBrowserRouter(routes);
