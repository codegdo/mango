import { Outlet } from 'react-router-dom'

export interface ContextProps {
  isAuthenticated: boolean;
}

export function App() {
  const isAuthenticated: boolean = false;
  const context: ContextProps = { isAuthenticated };

  return <Outlet context={context} />;
}

// npx madge src/app.router.tsx --image src/app.graph.png --warning
