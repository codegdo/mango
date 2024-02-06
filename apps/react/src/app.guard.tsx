import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export function AppGuard() {
  const isAuthenticated = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      //navigate('/login');
    }

    // Cleanup function to prevent navigation after component unmounts
    return () => {
      // Any cleanup code if needed
    };
  }, [isAuthenticated, navigate]);

  return <Outlet />;
}

export function AuthGuard() {
  const isAuthenticated = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/welcome');
    }

    // Cleanup function to prevent navigation after component unmounts
    return () => {
      // Any cleanup code if needed
    };
  }, [isAuthenticated, navigate]);

  return <Outlet />;
}
