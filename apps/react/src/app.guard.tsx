import { FC } from 'react';
import { Navigate, Outlet, useOutletContext } from 'react-router-dom';
import { ContextProps } from './app.component';


export function AppGuard() {
  const { isAuthenticated } = useOutletContext<ContextProps>();

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

export function AuthGuard() {
  const { isAuthenticated } = useOutletContext<ContextProps>();

  return !isAuthenticated ? <Outlet /> : <Navigate to='/dashboard' />;
}

export const WebPageGuard: FC<{ renderNotFound: () => JSX.Element }> = ({ renderNotFound }) => {
  const { isAuthenticated } = useOutletContext<ContextProps>();

  return !isAuthenticated ? <Outlet /> : renderNotFound();
};