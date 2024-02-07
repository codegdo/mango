import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { AppState } from './stores';

export interface ContextProps {
  isAuthenticated: boolean;
}

export function App() {
  const { isAuthenticated } = useSelector((state: AppState) => state.session);
  const context: ContextProps = { isAuthenticated };

  return <Outlet context={context} />;
}

// npx madge src/app.router.tsx --image src/app.graph.png --warning
