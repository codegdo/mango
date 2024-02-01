# 1. Install react-router-dom:

Open your terminal and navigate to the root of your React project. Run the following command to install react-router-dom using npm:

```bash
npm install react-router-dom
```

# 2. Set Up Basic Routing:

Create a new file for your routes, for example, app.router.tsx in the "src" directory.

In app.router.tsx:

```jsx
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <div>HOME</div>,
  },
];

export const router = createBrowserRouter(routes);
```

Import app.router.tsx to app.component.tsx:
In your existing app.component.tsx file, import the router:

```jsx
import { RouterProvider } from 'react-router-dom';
import { router } from './app.router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

These steps guide you through installing react-router-dom and setting up basic routing in your React project. Adjust the routes in app.router.tsx according to your project requirements.
