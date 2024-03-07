'use client';

import Link from 'next/link';
import { Metadata } from 'next';

const metadata: Metadata = { title: 'Not Found', description: '' };

function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
}

export default NotFound;
