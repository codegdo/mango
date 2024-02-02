import { createBrowserRouter } from "react-router-dom";
import { Welcome } from "./pages/dashboard/welcome.dashboard";

const routes = [
  {
    path: '/',
    element: <Welcome />
  }
];

export const router = createBrowserRouter(routes);