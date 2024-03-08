import type { Metadata } from 'next';
//import { Inter } from 'next/font/google';

import TemplateProvider from './template.provider';
import TemplateApp from './template.app';

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
    <html lang='en'>
      <body cz-shortcut-listen='true'>
        <TemplateProvider>
          <TemplateApp>
            {children}
          </TemplateApp>
        </TemplateProvider>
      </body>
    </html>
  );
}
