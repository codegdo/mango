import React from 'react';
import { Metadata } from 'next';
import Login from './login.form';

export const metadata: Metadata = {
  title: 'Login',
  description: ''
};

const LoginPage: React.FC = () => <Login />;

export default LoginPage;