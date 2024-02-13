import type { Metadata } from 'next';
//import { Inter } from 'next/font/google';

//const inter = Inter({ subsets: ['latin'] });

export interface Params {
  metadata?: Metadata;
  module?: string;
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

  console.log('ROOTLAYOUT', params);

  if (!metadata) {
    return <>{children}</>;
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
