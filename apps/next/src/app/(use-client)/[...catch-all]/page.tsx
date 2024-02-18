'use client';
import { Metadata } from 'next';
import Link from 'next/link';
import pageLayout from '../page.layout';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { AppState } from '@/stores';

const metadata: Metadata = { title: 'Not Found', description: '' };

function NotFound() {
  const { isAuthenticated } = useSelector((state: AppState) => state.session);
  const type = typeof window !== 'undefined' ? 'Client' : 'Server';
  const currentPage = usePathname();

  console.log(type, currentPage, isAuthenticated);

  return (
    <div>
      <h2>Not Found CATCH ALL</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
}

export default pageLayout(NotFound, {
  metadata,
});
