import React from 'react';
import NotFound from './not-found.page';
import { PageProps, TemplateLayout } from '@/components';

export async function generateMetadata({ params }: any) {
  console.log('PARAM', params);
  return {
    title: '...',
  };
}

export default function NotFoundPage(props: PageProps) {
  return (
    <TemplateLayout
      {...props}
      component={NotFound}
      route={{ module: 'notfound', view: 'index' }}
    />
  );
}
