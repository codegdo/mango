import React from 'react';
import { Metadata } from 'next';
import Signup from './signup.form';

export const metadata: Metadata = {
  title: 'Singup',
  description: ''
};

const SignupPage: React.FC = () => <Signup />;

export default SignupPage;