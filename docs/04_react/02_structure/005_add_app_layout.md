# Add App Layout to Your Project

1. **Navigate to the 'src' Directory:**

   - Open your terminal.
   - Change to the 'src' directory using the `cd` command:
     ```bash
     cd path/to/your/project/src
     ```

2. **Create 'app.layout.tsx':**

   - Inside the 'src' directory, create a file named 'app.layout.tsx':

     ```jsx
     // src/app.layout.tsx
     import { FC, Suspense } from 'react';
     import { ContextProps } from './types';

     interface IProps extends ContextProps {
       component: FC<ContextProps>;
     }

     export function Layout({ component: Component, ...props }: IProps) {
       return (
         <Suspense fallback={'...loading'}>
           <Component {...props} />
         </Suspense>
       );
     }
     ```

3. **Import 'app.layout.tsx' to 'app.router.tsx':**

   - Open the 'app.router.tsx' file.
   - Import the 'Layout' component from 'app.layout.tsx':

     ```jsx
     // src/app.router.tsx
     import { lazy } from 'react';
     import { createBrowserRouter } from 'react-router-dom';
     import { Layout } from './app.layout';
     import Welcome from './pages/dashboard/dashboard.welcome';

     const routes = [
       {
         path: '/',
         element: <Welcome />,
       },
     ];

     export const router = createBrowserRouter(routes);
     ```

4. **Update 'app.router.tsx' to Use 'Layout' Component:**

   - In 'app.router.tsx', comment out the import of 'Welcome' and replace the 'element' property with the 'Layout' component:

     ```jsx
     // src/app.router.tsx
     import { lazy } from 'react';
     import { createBrowserRouter } from 'react-router-dom';
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

These steps guide you through adding an 'App Layout' component to your project, introducing a suspense wrapper for page loading, and updating the router to use the new layout. Adjust the file paths and names as necessary for your project structure.
