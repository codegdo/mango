# Add Login Page to Your React App

1. **Navigate to the 'pages' Folder:**

   - Open your terminal.
   - Change to the 'pages' folder using the `cd` command:

     ```bash
     cd src/pages
     ```

2. **Create 'auth' and 'login' Folders:**

   - To organize authentication-related pages, follow these steps:

     1. Inside the 'pages' folder, create an 'auth' folder using the `mkdir` command:

        ```bash
        mkdir auth
        ```

     2. Inside the 'auth' folder, create a 'login' folder using the `mkdir` command:

        ```bash
        mkdir auth/login
        ```

3. **Create 'login.form.tsx' File:**

   - Inside the 'login' folder, create a file named 'login.form.tsx':

   ```tsx
   // src/pages/auth/login/login.form.tsx
   function Login() {
     return <div>LOGIN</div>;
   }

   export default Login;
   ```

   **Important Note:**
   When employing lazy loading for pages, make sure to use the `export default` syntax for the page components.

4. **Import 'login.form.tsx' in 'app.router.tsx':**

   - Open the 'app.router.tsx' file.
   - Import the 'Login' component from the 'login.form.tsx' file:

     ```tsx
     // src/app.router.tsx
     import { lazy } from 'react';
     import { createBrowserRouter } from 'react-router-dom';
     import { Layout } from './app.layout';
     import { Guard } from './app.guard';

     const Login = lazy(() => import('./pages/auth/login/login.form'));
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

5. **Add Login Route:**

- In the 'app.router.tsx' file, incorporate the Login component into the existing routes:

````tsx
// src/app.router.tsx
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./app.layout";
import { Guard } from "./app.guard";

const Login = lazy(() => import('./pages/auth/login/login.form'));
const Welcome = lazy(() => import('./pages/dashboard/dashboard.welcome'));

const routes = [
  {
    path: '/login',
    element: <Layout module="auth" component={Login} />
  },
  {
    element: <Guard />,
    children: [
      {
        path: '/',
        element: <Layout module="dashboard" component={Welcome} />
      }
    ]
  }
];

export const router = createBrowserRouter(routes);
  ```

Now, your React app has a login page added to the 'auth' section. Adjust these steps based on your specific project structure and requirements.
````
