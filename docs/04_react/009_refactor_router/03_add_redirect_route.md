# Add Redirect Route

To enhance navigation, a redirect from the index to the dashboard route has been implemented. This redirection ensures that the dashboard serves as the entry page after the user logs in.

Add the following route configuration in `app.router.tsx`:

```tsx
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
```

This addition streamlines the user experience by automatically redirecting to the dashboard upon navigating to the index route.
