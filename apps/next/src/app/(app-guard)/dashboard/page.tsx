import React from 'react';
import { Metadata } from 'next';
import Dashboard from './dashboard.index';
import TemplateLayout, { PageProps } from '@/app/template.layout';

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
