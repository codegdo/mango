import { Navigate, Outlet, useOutletContext } from 'react-router-dom';

import { ContextOutletProps } from './app.component';

interface WebPageProps {
  renderNotFound: () => JSX.Element
}

export function AppGuard() {
  const { isAuthenticated } = useOutletContext<ContextOutletProps>();
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

export function AuthGuard() {
  const { isAuthenticated } = useOutletContext<ContextOutletProps>();
  return !isAuthenticated ? <Outlet /> : <Navigate to='/dashboard' />;
}

export function WebPageGuard({ renderNotFound }: WebPageProps) {
  const { isAuthenticated } = useOutletContext<ContextOutletProps>();
  return !isAuthenticated ? <Outlet /> : renderNotFound();
}