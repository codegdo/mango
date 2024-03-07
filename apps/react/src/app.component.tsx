import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { AppState } from './stores';
import { utils } from './helpers';

import { ContextOutletProps } from './types';

export function App() {
  const { isAuthenticated } = useSelector((state: AppState) => state.session);
  const context: ContextOutletProps = { isAuthenticated };
  const subdomain = utils.getSubdomain();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log(subdomain);
    }
  }, [subdomain, isAuthenticated]);

  return <Outlet context={context} />;
}


