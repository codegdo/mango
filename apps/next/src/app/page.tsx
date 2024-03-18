import React from 'react';
import { Metadata } from 'next';
import Home from './home.page';
import { TemplateLayout, PageProps } from '@/components';

export const metadata: Metadata = {
  title: 'Home',
  description: '',
};

export default function HomePage(props: PageProps) {
  return (
    <TemplateLayout
      {...props}
      component={Home}
      route={{ module: 'home', view: 'index' }}
    />
  );
}
