'use client';

import Link from 'next/link';
import pageLayout from './page.layout';
import { Metadata } from 'next';

const metadata: Metadata = { title: 'Home', description: '' };

function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
}

export default pageLayout(NotFound, {
  metadata,
});
