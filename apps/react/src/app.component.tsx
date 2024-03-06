import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { AppState } from './stores';
import { utils } from './helpers';
import { useEffect } from 'react';

export interface ContextOutletProps {
  isAuthenticated: boolean;
}

export function App() {
  const { isAuthenticated } = useSelector((state: AppState) => state.session);
  const context: ContextOutletProps = { isAuthenticated };
  const subdomain = utils.getSubdomain();

  useEffect(() => {
    console.log(subdomain);
  }, [subdomain]);

  return <Outlet context={context} />;
}

// npx madge src/app.router.tsx --image src/app.graph.png --warning
