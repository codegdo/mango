import React from 'react';
import NotFound from './not-found.page';


export async function generateMetadata({ params }: any) {
  console.log('PARAM', params);
  return {
    title: '...',
  }
}

const NotFoundPage: React.FC = () => <NotFound />;

export default NotFoundPage;