import { RouterProvider } from "react-router-dom";
import { router } from "./app.router";

function App() {
  return <RouterProvider router={router} />
}

export default App;


// npx madge src/app.component.tsx --image src/app.graph.png --warning