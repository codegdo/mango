import React from 'react';
import { Metadata } from 'next';
import Dashboard from './dashboard.index';
import { PageProps, TemplateLayout } from '@/components';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: '',
};

export default function DashboardPage(props: PageProps) {
  return (
    <TemplateLayout
      {...props}
      component={Dashboard}
      route={{ module: 'dashboard', view: 'index' }}
    />
  );
}
