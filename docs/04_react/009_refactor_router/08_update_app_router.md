# Update App Router

1. **Remove DashbaordRoute and AuthRoute:**

   - In the `app.router.tsx` file, remove the `DashboardRoute` and `AuthRoute` components.

2. **Replace DashboardRoute with all the routes in Dashboard:**

   - Replace the `DashboardRoute` with all the routes specific to the Dashboard module.
   - This update streamlines the routing structure by incorporating all Dashboard-related routes directly into the main `app.router.tsx` file, promoting a more centralized and maintainable approach.

3. **Replace AuthRoute with all the routes in Auth:**

   - Replace the `AuthRoute` with all the routes specific to the Auth module.
   - Similar to the Dashboard module, consolidating Auth-related routes directly into the main `app.router.tsx` file enhances clarity and simplifies route management.

4. **Wrap all AuthRoute with AuthGuard:**

   - Wrap all routes specific to the Auth module with the `AuthGuard` component.
   - This introduces a guard mechanism to control access to Auth-related routes, ensuring proper authentication before navigating to protected pages.

5. **Rename The Guard to AuthGuard:**

   - Rename the `Guard` component to `AuthGuard` for better clarity.
   - A clear and descriptive naming convention enhances code readability, making it easier for developers to understand the purpose and functionality of the component.

6. **Add a path wild card to handle WebPage:**
   - Add a path wildcard (`*`) to handle the WebPage module.
   - The introduction of a wildcard route allows for the handling of all unspecified paths under the `webpage` module. This ensures that the WebPage component is rendered for any unmatched routes, providing a catch-all mechanism for generic website content.

The reason we update the routing above to handle the webpage route and move all the children route in DashboardRoute and AuthRoute to `app.router.tsx` is to simplify the project's routing structure and promote a more organized and centralized approach. This makes it easier to manage and understand the routing logic, facilitates better code organization, and ensures a consistent and scalable structure as the project grows. Additionally, the inclusion of guards enhances security measures, controlling access to specific routes based on authentication status. Adjustments to the routing structure also contribute to improved readability and maintainability, making it easier for developers to navigate and work with the codebase.

```tsx
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { AppGuard, AuthGuard } from './app.guard';
import { Layout } from './app.layout';

const Welcome = lazy(() => import('./pages/dashboard/dashboard.welcome'));
const Login = lazy(() => import('./pages/auth/login/login.form'));
const WebPage = lazy(() => import('./pages/page.webpage'));

const routes = [
  {
    element: <AppGuard />,
    children: [
      {
        path: '/welcome',
        element: (
          <Layout module='dashboard' view='welcome' component={Welcome} />
        ),
      },
    ],
  },
  {
    element: <AuthGuard />,
    children: [
      {
        path: '/login',
        element: <Layout module='auth' view='login' component={Login} />,
      },
    ],
  },
  {
    path: '*',
    element: <Layout module='webpage' view='*' component={WebPage} />,
  },
];

export const router = createBrowserRouter(routes);
```

These steps guide you through updating the app.router.tsx file to reflect the changes in routing, guard naming, and handling the WebPage module. Adjust as needed based on your project structure and requirements.
