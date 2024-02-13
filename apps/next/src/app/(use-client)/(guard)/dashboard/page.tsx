'use client';

import { Metadata } from 'next';
import pageLayout from '../../page.layout';

const metadata: Metadata = { title: 'Dashboard', description: '' };

function Dashboard() {
  return <>DASHBOARD</>;
}

export default pageLayout(Dashboard, {
  metadata,
  module: 'dashboard',
});
