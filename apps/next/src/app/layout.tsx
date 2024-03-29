import type { Metadata } from 'next';
//import { Inter } from 'next/font/google';
import { TemplateProvider } from '@/components';

//const inter = Inter({ subsets: ['latin'] });

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Mango',
  description: '...',
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body cz-shortcut-listen='true'>
        <TemplateProvider>
          {children}
        </TemplateProvider>
      </body>
    </html>
  );
}
