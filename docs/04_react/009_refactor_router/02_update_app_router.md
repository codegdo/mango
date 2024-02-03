# Update App Router Pattern

In the current implementation of `app.router.tsx`, the route pattern is set to 'dashboard/_' and '/_'. This approach requires importing `page.not-found.tsx` for all routes, which is not an optimal way to handle the catch-all case for not-found scenarios. To improve this, update the route patterns to 'dashboard' and '\*':

```tsx
import { createBrowserRouter } from 'react-router-dom';
import { Guard } from './app.guard';
import { Layout } from './app.layout';
import AuthRoute from './pages/auth/auth.route';
import DashboardRoute from './pages/dashboard/dashboard.route';

const routes = [
  {
    element: <Guard />,
    children: [
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
