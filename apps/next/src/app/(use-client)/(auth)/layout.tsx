'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@/stores';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useSelector((state: AppState) => state.session);
  const router = useRouter();

  console.log(isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return <>{!isAuthenticated ? children : null}</>;
}
