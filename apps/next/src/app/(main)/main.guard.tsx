'use client';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { AppState } from '@/stores';

export default function MainGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useSelector((state: AppState) => state.session);
  const router = useRouter();

  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return <>{isAuthenticated ? children : null}</>;
}