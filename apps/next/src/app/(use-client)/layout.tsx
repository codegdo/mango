'use client';
import type { Metadata } from 'next';
import { Provider } from 'react-redux';
import { store } from '@/stores';

export interface Params {
  metadata?: Metadata;
  module?: string;
}

interface LayoutProps {
  children: React.ReactNode;
  params?: Params;
}

export default function Layout({
  children,
  params = {},
}: Readonly<LayoutProps>) {
  console.log('CLIENTLAYOUT', params);

  return <Provider store={store}>{children}</Provider>;
}
