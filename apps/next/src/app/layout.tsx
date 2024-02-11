'use client';
import type { Metadata } from 'next';
import { Provider } from 'react-redux';
//import { Inter } from 'next/font/google';
import { store } from '@/stores';
import './globals.css';

//const inter = Inter({ subsets: ['latin'] });

export interface Params {
  metadata?: Metadata;
}

interface LayoutProps {
  children: React.ReactNode;
  params?: Params;
}

export default function RootLayout({
  children,
  params = {},
}: Readonly<LayoutProps>) {
  const { metadata } = params;
  const title =
    typeof metadata?.title === 'string' ? metadata?.title : 'Default Title';

  console.log('ROOTLAYOUT', metadata);

  if (!metadata) {
    return <Provider store={store}>{children}</Provider>;
  }

  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        {/* Add other meta tags, styles, scripts, etc. */}
      </head>
      <body cz-shortcut-listen='true'>{children}</body>
    </html>
  );
}
