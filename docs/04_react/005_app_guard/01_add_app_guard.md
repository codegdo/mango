# Add App Guard to Your Project

1. **Navigate to the 'src' Directory:**

   - Open your terminal.
   - Change to the 'src' directory using the `cd` command:
     ```bash
     cd path/to/your/project/src
     ```

2. **Create 'app.guard.tsx':**

   - Inside the 'src' directory, create a file named 'app.guard.tsx':

   ```jsx
   // src/app.guard.tsx
   import { Outlet } from 'react-router-dom';

   export function Guard() {
     return <Outlet />;
   }
   ```

3. **Import 'app.guard.tsx' to 'app.router.tsx':**

   - Open the 'app.router.tsx' file.
   - Import the 'Guard' component from 'app.guard.tsx':

   ```jsx
   // src/app.router.tsx
   import { lazy } from 'react';
   import { createBrowserRouter } from 'react-router-dom';
   import { Guard } from './app.guard';
   import { Layout } from './app.layout';
   const Welcome = lazy(() => import('./pages/dashboard/dashboard.welcome'));

   const routes = [
     {
       path: '/',
       element: <Layout module='dashboard' component={Welcome} />,
     },
   ];

   export const router = createBrowserRouter(routes);
   ```

4. **Update 'app.router.tsx' to Use 'Guard' Component:**

   - In 'app.router.tsx', add a parent route using 'Guard' with children of 'Layout':

   ```jsx
   import { lazy } from 'react';
   import { createBrowserRouter } from 'react-router-dom';
   import { Layout } from './app.layout';
   import { Guard } from './app.guard';

   const Welcome = lazy(() => import('./pages/dashboard/dashboard.welcome'));

   const routes = [
     {
       element: <Guard />,
       children: [
         {
           path: '/',
           element: <Layout module='dashboard' component={Welcome} />,
         },
       ],
     },
   ];

   export const router = createBrowserRouter(routes);
   ```

These steps guide you through adding an 'App Guard' component to your project, introducing a suspense wrapper for page loading, and updating the router to use the new layout. Adjust the file paths and names as necessary for your project structure.
