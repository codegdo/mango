# Add Welcome Page to Your React App

1. **Navigate to the 'pages' Folder:**

   - Open your terminal.
   - Change to the 'pages' folder using the `cd` command:
     ```bash
     cd src/pages
     ```

2. **Add 'dashboard' Folder:**

   - Inside the 'pages' folder, create a 'dashboard' folder using the `mkdir` command:
     ```bash
     mkdir dashboard
     ```

3. **Create 'dashboard.welcome.tsx' File:**

   - Inside the 'dashboard' folder, create a file named 'dashboard.welcome.tsx':

     ```tsx
     // src/pages/dashboard/dashboard.welcome.tsx
     function Welcome() {
       return <>Welcome</>;
     }

     export default Welcome;
     ```

   **Important Note:**
   When employing lazy loading for pages, make sure to use the `export default` syntax for the page components.

4. **Import 'dashboard.welcome.tsx' in 'app.router.tsx':**

   - Open the 'app.router.tsx' file.
   - Import the 'Welcome' component from the 'dashboard.welcome.tsx' file:

     ```tsx
     // src/app.router.tsx
     import { createBrowserRouter } from 'react-router-dom';
     import Welcome from './pages/dashboard/dashboard.welcome';

     const routes = [
       {
         path: '/',
         element: <div>HOME</div>,
       },
     ];

     export const router = createBrowserRouter(routes);
     ```

5. **Replace 'element' with `<Welcome />`:**

   - In the same 'app.router.tsx' file, update the 'element' property to use the 'Welcome' component:

     ```tsx
     // src/app.router.tsx
     import { createBrowserRouter } from 'react-router-dom';
     import Welcome from './pages/dashboard/dashboard.welcome';

     const routes = [
       {
         path: '/',
         element: <Welcome />,
       },
     ];

     export const router = createBrowserRouter(routes);
     ```

Now, your React app has a welcome page added to the 'dashboard' section. Adjust these steps based on your specific project structure and requirements.
