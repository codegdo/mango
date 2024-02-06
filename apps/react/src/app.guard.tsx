import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAuth = false;

export function AppGuard() {
  const isAuthenticated = isAuth;

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

export function AuthGuard() {
  const isAuthenticated = isAuth;

  return !isAuthenticated ? <Outlet /> : <Navigate to='/dashboard' />;
}

export const WebPageGuard: FC<{ renderNotFound: () => JSX.Element }> = ({ renderNotFound }) => {
  const isAuthenticated = isAuth;

  return !isAuthenticated ? <Outlet /> : renderNotFound();
};