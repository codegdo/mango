# Add Login Page to Your React App

1. **Navigate to the 'pages' Folder:**

   - Open your terminal.
   - Change to the 'pages' folder using the `cd` command:

   ```bash
   cd src/pages
   ```

2. **Create 'page.not-found.tsx' File:**

```tsx
// pages/page.not-found.tsx
function NotFound() {
  return <div>Not Found</div>;
}

export default NotFound;
```

3. **Import 'page.not-found.tsx' to auth.route.tsx**

```tsx
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { Layout } from '../../app.layout';

const Login = lazy(() => import('./login/login.form'));
const NotFound = lazy(() => import('../page.not-found'));

function AuthRoute() {
  const routes = useRoutes([
    {
      path: '/login',
      element: <Layout module='auth' view='login' component={Login} />,
    },
    {
      path: '*',
      element: <Layout module='auth' view='notfound' component={NotFound} />,
    },
  ]);

  return routes;
}

export default AuthRoute;
```

4. **Import 'page.not-found.tsx' to dashboard.route.tsx**

```tsx
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { Layout } from '../../app.layout';

const Welcome = lazy(() => import('./dashboard.welcome'));
const NotFound = lazy(() => import('../page.not-found'));

function DashboardRoute() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout module='dashboard' view='welcome' component={Welcome} />,
    },
    {
      path: '*',
      element: <Layout module='auth' view='notfound' component={NotFound} />,
    },
  ]);

  return routes;
}

export default DashboardRoute;
```

**Important Note:**
When employing lazy loading for pages, make sure to use the `export default` syntax for the page components.
