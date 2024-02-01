import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: '/',
    element: <div>HOME</div>
  }
];

export const router = createBrowserRouter(routes);