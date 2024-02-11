'use client';
import { Metadata } from 'next';
import layoutTemplate from '../../layout.template';

const metadata: Metadata = { title: 'Dashboard', description: '' };

function Dashboard() {
  return <main>DASHBOARD</main>;
}

export default layoutTemplate(Dashboard, {
  metadata,
});
