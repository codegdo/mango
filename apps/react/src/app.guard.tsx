import { Navigate, Outlet, useOutletContext } from 'react-router-dom';
import { ContextOutletProps } from './types';

interface WebPageProps {
  notFound: () => JSX.Element
}

export function AppGuard() {
  const { isAuthenticated } = useOutletContext<ContextOutletProps>();
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

export function AuthGuard() {
  const { isAuthenticated } = useOutletContext<ContextOutletProps>();
  return !isAuthenticated ? <Outlet /> : <Navigate to='/dashboard' />;
}

export function PageGuard({ notFound }: WebPageProps) {
  const { isAuthenticated } = useOutletContext<ContextOutletProps>();
  return !isAuthenticated ? <Outlet /> : notFound();
}