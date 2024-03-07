import React from 'react';
import { Metadata } from 'next';
import Dashboard from './dashboard.index';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: ''
};

const DashboardPage: React.FC = () => <Dashboard />;

export default DashboardPage;