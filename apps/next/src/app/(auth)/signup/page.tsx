import React from 'react';
import { Metadata } from 'next';
import Signup from './signup.form';
import TemplateLayout, { PageProps } from '@/app/template.layout';

export const metadata: Metadata = {
  title: 'Singup',
  description: '',
};

export default function SignupPage(props: PageProps) {
  return (
    <TemplateLayout
      {...props}
      component={Signup}
      route={{ module: 'auth', view: 'signup' }}
    />
  );
}
