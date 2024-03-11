import { Navigate, Outlet, useOutletContext } from 'react-router-dom';
import { ContextOutletProps } from './types';

interface PageProps {
  notFound: () => JSX.Element
}

export function MainGuard() {
  const { isAuthenticated } = useOutletContext<ContextOutletProps>();
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

export function AuthGuard() {
  const { isAuthenticated } = useOutletContext<ContextOutletProps>();
  return !isAuthenticated ? <Outlet /> : <Navigate to='/dashboard' />;
}

export function PageGuard({ notFound }: PageProps) {
  const { isAuthenticated } = useOutletContext<ContextOutletProps>();
  return !isAuthenticated ? <Outlet /> : notFound();
}