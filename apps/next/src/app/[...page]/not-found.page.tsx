'use client';
import Link from 'next/link';
import {
  notFound,
  usePathname,
  useSelectedLayoutSegment,
} from 'next/navigation';
import { useSelector } from 'react-redux';
import { AppState } from '@/stores';
import { useEffect } from 'react';

export default function NotFound() {
  const { isAuthenticated } = useSelector((state: AppState) => state.session);
  const type = typeof window !== 'undefined' ? 'Client' : 'Server';
  const currentPage = usePathname();
  const segment = useSelectedLayoutSegment();

  console.log(type, currentPage, isAuthenticated, segment);

  useEffect(() => {
    if (currentPage === '/abc') {
      notFound();
    }
  }, [currentPage]);

  return (
    <div>
      <h2>Not Found CATCH ALL</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
}
