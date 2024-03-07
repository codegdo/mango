import React from 'react';
import { Metadata } from 'next';
import Home from './home.page';

export const metadata: Metadata = {
  title: 'Home',
  description: ''
};

const HomePage: React.FC = () => <Home />;

export default HomePage;